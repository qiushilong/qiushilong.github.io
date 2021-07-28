let lis = document.querySelector('.lis');
let modalbox = document.querySelector('.modalbox');
let modalbox_close = document.querySelector('.modalbox div a');

lis.onclick = function () {
    modalbox.style.display = "block";
}

modalbox_close.onclick = function () {
    modalbox.style.display = "none";
}