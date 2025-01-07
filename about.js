function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

document.querySelectorAll('.gallery-item a').forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); 
        const imgId = `img${index + 1}`;
        openModal(imgId);
    });
});

document.querySelectorAll('.close').forEach((closeButton) => {
    closeButton.addEventListener('click', (e) => {
        const modalId = e.target.closest('.modal').id; 
        closeModal(modalId);
    });
});

document.querySelectorAll('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal(modal.id);
        }
    });
});
