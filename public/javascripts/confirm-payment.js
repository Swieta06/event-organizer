// javascript copy number rek
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

// javascript upload Image
const upload = document.querySelector('#upload');
var uploaded_image;

upload.addEventListener('change', function () {
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    uploaded_image = reader.result;
    document.querySelector('#inner-border').style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
