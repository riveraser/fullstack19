//modulos propios con commonjs

function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicacion(a, b) {
  return a * b;
}

module.exports = {
  suma,
  resta,
  multiplicacion,
};
