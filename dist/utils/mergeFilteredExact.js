function mergeFilteredExact(target, values, local) {
  // 按 local 排序数组的辅助函数
  function sortByLocal(arr) {
    if (!arr) return [];
    const inLocal = arr.filter(v => local.includes(v));
    const notInLocal = arr.filter(v => !local.includes(v));
    inLocal.sort((a, b) => local.indexOf(a) - local.indexOf(b));
    return [...inLocal, ...notInLocal];
  }

  // 1. target 是空 → 返回 values 按 local 排序
  if (!target || target.length === 0) {
    return sortByLocal(values);
  }

  // 2. values 是空 → 返回 target 按 local 排序
  if (!values || values.length === 0) {
    return sortByLocal(target);
  }

  // 原逻辑合并 target 和 values
  let result = [...values];
  let inserted = false;

  for (let t of target) {
    let idxInSource = local.indexOf(t);

    if (idxInSource !== -1) {
      // 在 local 里找到了 → 尽量按顺序插
      let anchor = local[idxInSource - 1];
      let idxInResult = anchor ? result.indexOf(anchor) : -1;

      if (idxInResult !== -1) {
        result.splice(idxInResult + 1, 0, t);
      } else {
        result.unshift(t);
      }
      inserted = true;
    } else {
      // 不在 local 里 → 直接插到最前
      result.unshift(t);
      inserted = true;
    }
  }

  // 兜底
  if (!inserted) {
    result = [...target, ...result];
  }

  return result;
}




module.exports = {
    mergeFilteredExact
}