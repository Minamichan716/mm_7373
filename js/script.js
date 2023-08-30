
/*
FOOTER
================================================ */

// 年取得
const year = document.querySelector('.year');

const today = new Date();
const thisyear = today.getFullYear();
console.log(thisyear);


year.textContent = thisyear;