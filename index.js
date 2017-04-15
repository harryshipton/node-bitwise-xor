module.exports = xor;

function xor(a, b) {
  if (!Buffer.isBuffer(a)) a = Buffer.from(a);
  if (!Buffer.isBuffer(b)) b = Buffer.from(b);
  var res = [];
  if (a.length > b.length) {
    for (var i = 0; i < b.length; i++) {
      res.push(a[i] ^ b[i]);
    }
  } else {
    for (var i = 0; i < a.length; i++) {
      res.push(a[i] ^ b[i]);
    }
  }
  return Buffer.from(res);
}
