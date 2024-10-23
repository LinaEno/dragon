if (document.querySelector('.accordion-container')) {
    new Accordion('.accordion-container');
  }

  const leftNavHeader = document.querySelector('.left-menu__acc-header');
  const leftNavList = document.querySelector('.left-menu__acc-list');
  leftNavHeader.addEventListener('click', () => {
    leftNavList.classList.toggle('hide');
    leftNavHeader.classList.toggle('active');
  });


  document.addEventListener('DOMContentLoaded', function() {
    const selectedLanguage = document.getElementById('selectedLanguage');
    const languageOptions = document.getElementById('languageOptions');
  
    selectedLanguage.addEventListener('click', function() {
      languageOptions.classList.toggle('visible');
      languageOptions.classList.toggle('hidden');
    });
  
    document.addEventListener('click', function(event) {
      if (!selectedLanguage.contains(event.target) && !languageOptions.contains(event.target)) {
        languageOptions.classList.remove('visible');
        languageOptions.classList.add('hidden');
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerMenu = document.getElementById('burgerMenu');
  
    burgerBtn.addEventListener('click', function() {
      burgerBtn.classList.toggle('open');
      burgerMenu.classList.toggle('open');
    });
  });
  