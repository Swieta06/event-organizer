const formatRupiah = (numb) => {
  const format = numb.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  const rupiah = 'Rp ' + convert?.join('.')?.split('')?.reverse()?.join('')
  return rupiah;
}
const formatInteger = (string) => {
  const format = string.replace("Rp", "").replace(".", "");
  return parseInt(format);
}

const setLocalStorage = (name, value) => {
  const getData = JSON.parse(localStorage.getItem("data"));
  if(name){
    getData[name] = value;
  }
  localStorage.setItem("data", JSON.stringify(getData));
};
const getLocalStorage = (name) => {
  const getData = JSON.parse(localStorage.getItem("data"));
  return getData[name];
};

localStorage.setItem("data", JSON.stringify({totalPrice: 25000000}))

function slideControl(title) {
  const pivot = document.querySelector(`.${"pivot" + title}`).id;
  const sortingId = parseInt(pivot.charAt(pivot.length - 1));
  const dataLength = document.querySelectorAll(
    `.slide-show-item-${title}`
  ).length;
  const totalItemShow = 5;

  const btnLeft = document.getElementById(`btnLeft${title}`);
  const btnRight = document.getElementById(`btnRight${title}`);

  if (sortingId === 1) {
    btnLeft.style.visibility = "hidden";
  }

  btnRight.addEventListener("click", () => {
    const pivot = document.querySelector(`.${"pivot" + title}`).id;
    const getData = parseInt(pivot.charAt(pivot.length - 1));
    const pivotBreak = dataLength - totalItemShow + 1;
    const hitung = getData > pivotBreak ? pivotBreak : getData;

    for (let i = 1; i <= dataLength; i++) {
      document.getElementById(`${title + i}`).style.transform = `translate(-${
        hitung * 104
      }%, 0%)`;
      document.getElementById(`${title + i}`).style.transition =
        "all 1s ease 0s";
    }
    const addPivot = getData + 1;
    if (getData <= pivotBreak) {
      document.getElementById(pivot).classList.remove(`${"pivot" + title}`);
      document
        .getElementById(`${title + addPivot}`)
        .classList.add(`${"pivot" + title}`);
    }

    if (addPivot !== 1) {
      btnLeft.style.visibility = "visible";
    }

    if (addPivot === pivotBreak) {
      btnRight.style.visibility = "hidden";
    }
  });

  btnLeft.addEventListener("click", () => {
    const pivot = document.querySelector(`.${"pivot" + title}`).id;
    const getData = parseInt(pivot.charAt(pivot.length - 1));
    const hitung = getData - 2;
    const rubah = getData - 1;
    for (let i = 1; i <= dataLength; i++) {
      document.getElementById(`${title + i}`).style.transform = `translate(-${
        hitung * 104
      }%, 0%)`;
      document.getElementById(`${title + i}`).style.transition =
        "all 1s ease 0s";
    }
    if (getData > 1) {
      document.getElementById(pivot).classList.remove(`${"pivot" + title}`);
      document
        .getElementById(`${title + rubah}`)
        .classList.add(`${"pivot" + title}`);
    }
    if (rubah !== 1) {
      btnRight.style.visibility = "visible";
    }
    if (rubah === 1) {
      btnLeft.style.visibility = "hidden";
    }
  });
}