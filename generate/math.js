function liczbaCalkowita(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function ciagZnakow(length) {
  return Math.random(length).toString(36).slice(2);
}

function tablicaLiczb(min, max, length) {
  return Array.from(
    Array(length),
    () => Math.floor(Math.random() * (max - min)) + min
  );
}

module.exports = {
  liczbaCalkowita: liczbaCalkowita,
  ciagZnakow: ciagZnakow,
  tablicaLiczb: tablicaLiczb,
};
