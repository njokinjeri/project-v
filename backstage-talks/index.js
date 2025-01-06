//pop-up modal 

const infoModal = document.getElementById('modal-popup');
const caretDown = document.getElementById('caret-down');
const caretRight = document.getElementById('caret-right');

function openModal() {
    infoModal.style.display = 'block';
    caretRight.style.display = 'none';
    caretDown.style.display = 'block';
}

function closeModal() {
    infoModal.style.display = 'none';
        caretRight.style.display = 'block';
        caretDown.style.display = 'none';
}

function toggleModal() {
    const isModalVisible = infoModal.style.display === 'block';

    if (isModalVisible) {
        closeModal();
    } else {
       openModal();
    }
}

caretDown.addEventListener('click', toggleModal);
caretRight.addEventListener('click', toggleModal);

function isModalVisible() {
    return infoModal.style.display === 'block';
}

function isClickOutside(event) {
    return !infoModal.contains(event.target)
         && !caretDown.contains(event.target)
         && !caretRight.contains(event.target);
}

document.addEventListener('click', function (event) {
    if (isModalVisible() && isClickOutside(event)){
        closeModal();
    }
});