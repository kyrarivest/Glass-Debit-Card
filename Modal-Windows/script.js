'use strict';

//All elements that we will need to use throughout the program
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Opens the modal by removing the hidden class from the elements
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Closes the modal by adding the hidden class back to the elements
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Add the openModal event listener to all the buttons
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//Event listeners for closing the modal window
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
