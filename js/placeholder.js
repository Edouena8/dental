document.querySelector('.form-input').addEventListener('focusin', e => {
    e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
});

document.querySelector('.form-input').addEventListener('focusout', e => {
    e.currentTarget.placeholder = ' ';
})