//* VAZIFE IN MODULE TABDIL TARIKH MILADI BE SHAMSI MIBASHAD/
const jm = require("jalali-moment");

exports.jalali_date = (date) => {
  return jm(date).locale("fa").format("YYYY/MM/DD");
};
