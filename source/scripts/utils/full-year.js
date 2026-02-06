//////////////////////////////////////////////////////////////////
// full-year for copyright

const yearBlock = document.querySelector('[data-copyright]');
const startYearBlock = document.querySelector('[data-startYear]');

if (yearBlock && startYearBlock) {
  const startYear = startYearBlock.innerText;
  const currentYear = new Date().getFullYear();
  if (startYear < currentYear) {
    yearBlock.innerHTML = `© ${startYear} - ${currentYear}`;
  } else {
    yearBlock.innerHTML = `© ${startYear}`;
  }
}


// full-year for copyright
//////////////////////////////////////////////////////////////////
