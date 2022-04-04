export const regex = {
  name: /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm,
  dni: /^[V|E|J|P][0-9]{5,9}$/,
  tel: /^(0414|0424|0412|0416|0426)[-][0-9]{7}$/g,
  bankAccountNum: /^(\d{5})(\d{15})$/,
};