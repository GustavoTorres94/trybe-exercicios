let u = '1 cachaça, 5 cervejas e 1 copo de vinho';
let w = '1 cerveja';

const hydrate = (s) => {
  let nS = s.split(' ').filter(e => !isNaN(e)).map(v => parseFloat(v)).reduce((a, vl) => a + vl);
  if (nS === 1) {
    return `${nS} copo de água`;
} if (nS > 1) {
  return `${nS} copos de água`;
}
};
hydrate(u);