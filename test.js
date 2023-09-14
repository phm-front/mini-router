function multiply(a, b) {
  const precision = getPrecision(a) + getPrecision(b);
  const multiplier = Math.pow(10, precision);
  return (a * multiplier) * (b * multiplier) / (multiplier * multiplier);
}

function getPrecision(value) {
  if (!isFinite(value)) {
    return 0;
  }
  let e = 1;
  let p = 0;
  while (Math.round(value * e) / e !== value) {
    e *= 10;
    p++;
  }
  return p;
}

console.log(multiply(0.0009, 0.9))
