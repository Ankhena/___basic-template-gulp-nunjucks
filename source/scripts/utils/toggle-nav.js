//////////////////////////////////////////////////////////////////
// toggle nav

const toggleNav = () => {

  const toggleBtn = document.querySelector('.btn-toggle');
  const nav = document.querySelector('.nav');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('nav--opened');
      toggleBtn.classList.toggle('btn-toggle--close');
      document.body.classList.toggle('body-with-open-modal');
    });
  }
};

toggleNav();

// end toggle nav
//////////////////////////////////////////////////////////////////
