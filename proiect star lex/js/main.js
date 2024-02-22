// hamburgherul

document.addEventListener('DOMContentLoaded', function () {
    const butonHamburgher = document.getElementById('butonBar');
    const listaPagini = document.getElementById('listaAscunsa');

    butonHamburgher.addEventListener('click', function () {
        listaPagini.classList.toggle('activa');
    });
});


// schimbarea anilor

document.addEventListener('DOMContentLoaded', function() {
    var yearContainer = document.getElementById('ani-container');
    
    
    var currentYear = new Date().getFullYear();

    
    yearContainer.textContent = currentYear;
});


// schimbarea informatiei in conteiner la dreapta si la stinga in prezentare generala

let currentIndex = 0;

function showPrevious() {
  if (currentIndex > 0) {
    currentIndex--;
    updateVisibility();
  }
}

function showNext() {
  const totalSections = document.querySelectorAll('.despre-grupa').length;
  if (currentIndex < totalSections - 1) {
    currentIndex++;
    updateVisibility();
  }
}

function updateVisibility() {
  const sections = document.querySelectorAll('.despre-grupa');
  sections.forEach((section, index) => {
    if (index === currentIndex) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

updateVisibility();

// deschiderea imaginilor din galerie

document.querySelectorAll('.img-conteiner img').forEach(img => {
  img.onclick = () => {
    document.querySelector('.pop-up').style.display ='block'
    document.querySelector('.pop-up img').src = img.getAttribute('src')
  }
});

document.querySelector('.pop-up span').onclick = () => {
  document.querySelector('.pop-up').style.display ='none'
}

// cautarea textului search

function searchText() {
  var searchText = document.getElementById('searchInput').value.toLowerCase();
  var content = document.getElementById('content').getElementsByTagName('p');

  for (var i = 0; i < content.length; i++) {
    var text = content[i].innerText.toLowerCase();
    if (text.includes(searchText)) {
      content[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
      break;
    }
  }
}

// navigarea intre pagini la pozele deschise din galerie

document.querySelectorAll('.img-conteiner img').forEach(img => {
  img.onclick = () => {
    const popup = document.querySelector('.pop-up');
    const popupImg = popup.querySelector('img');
    popup.style.display = 'block';
    popupImg.src = img.getAttribute('src');


    const prevButton = document.createElement('div');
    prevButton.classList.add('prev');
    prevButton.innerHTML = '&#10094;';
    popup.appendChild(prevButton);

    const nextButton = document.createElement('div');
    nextButton.classList.add('next');
    nextButton.innerHTML = '&#10095;';
    popup.appendChild(nextButton);

    let currentIndex = Array.from(document.querySelectorAll('.img-conteiner img')).indexOf(img);
    
    prevButton.onclick = () => {
      currentIndex = (currentIndex - 1 + document.querySelectorAll('.img-conteiner img').length) % document.querySelectorAll('.img-conteiner img').length;
      popupImg.src = document.querySelectorAll('.img-conteiner img')[currentIndex].src;
    };

    nextButton.onclick = () => {
      currentIndex = (currentIndex + 1) % document.querySelectorAll('.img-conteiner img').length;
      popupImg.src = document.querySelectorAll('.img-conteiner img')[currentIndex].src;
    };
  }
});

document.querySelector('.pop-up span').onclick = () => {
  document.querySelector('.pop-up').style.display ='none';
}






