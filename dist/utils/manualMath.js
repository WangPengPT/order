
function add(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        f
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        f
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}


function mul(a, b) {
    var c = 0,
        d = a.toString(),
        e = b.toString();
    try {
        c += d.split(".")[1].length
    } catch (f) {
       f
    }

    try {
        c += e.split(".")[1].length
    } catch (f) {
        f
    }

    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

module.exports = {
    add
}