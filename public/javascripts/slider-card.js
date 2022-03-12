const addTransform = (dataLength, hitung, transformValue, title) => {
  for (let i = 1; i <= dataLength; i++) {
    const elm = document.getElementById(`${title + i}`);
    elm.style.transform = `translate(-${hitung * transformValue}%, 0%)`;
    elm.style.transition = "all 1s ease 0s";
  }
};

function sliderControl(title, totalItemShow = 5, transformValue = 104) {
  const pivot = document.querySelector(`.${"pivot" + title}`).id;
  const sortingId = parseInt(pivot.charAt(pivot.length - 1));
  const dataLength = document.querySelectorAll(
    `.slide-show-item-${title}`
  ).length;
  const btnLeft = document.getElementById(`btnLeft${title}`);
  const btnRight = document.getElementById(`btnRight${title}`);

  if (sortingId === 1) {
    btnLeft.style.visibility = "hidden";
  }
  const pivotId = parseInt(pivot.charAt(pivot.length - 1));

  if (dataLength <= totalItemShow || pivotId > dataLength - totalItemShow) {
    btnRight.style.visibility = "hidden";
  }

  btnRight.addEventListener("click", () => {
    const pivot = document.querySelector(`.${"pivot" + title}`).id;
    const getData = parseInt(pivot.charAt(pivot.length - 1));
    const pivotBreak = dataLength - totalItemShow + 1;
    const hitung = getData > pivotBreak ? pivotBreak : getData;

    addTransform(dataLength, hitung, transformValue, title);

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

    addTransform(dataLength, hitung, transformValue, title);

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

const viewBtnSlider = (title) => {
  return `
            <div class="slide-show-control">
                <button id="btnLeft${title}" class=" fs-18 btn text-start bg-neutral-10 shadow  rounded-circle"><i class="bi bi-chevron-left"></i></button>
                <button id="btnRight${title}" class=" fs-18 btn text-end bg-neutral-10 shadow rounded-circle  top-0 left-0"><i class="bi bi-chevron-right"></i></button>
             </div>
             <div class="slide-show-ari theme-check"  id="${title}Item"></div>
                      `;
};
