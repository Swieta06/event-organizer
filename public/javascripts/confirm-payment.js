function copyNumber(value) {
  var tempInput = document.createElement('input');
  tempInput.value = value;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  document.body.removeChild(tempInput);
}

document.querySelector('#btn-bca').onclick = function () {
  copyNumber('382371928');
};
