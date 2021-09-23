let lis = document.querySelector('.lis');
let modelbox = document.querySelector('.modelbox');
let modelbox_close = document.querySelector('.modelbox div a');

lis.onclick = function () {
  modelbox.style.display = "block";
}

modelbox_close.onclick = function () {
  modelbox.style.display = "none";
}