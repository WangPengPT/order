function mergeFilteredExact(target, values, local) {
  // 1. target 是空 → 返回 values
  if (!target || target.length === 0) {
    return values || [];
  }

  // 2. values 是空 → 返回 target
  if (!values || values.length === 0) {
    return target;
  }

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
      // ❗ 不在 local 里 → 直接插到最前
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