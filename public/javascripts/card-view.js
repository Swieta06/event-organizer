const card = (type, title, id, data) => {
  return `
             <div style="width: 19.6%; box-sizing: border-box;" class="slide-show-item-${title} px-1 d-inline-block  ${
    id === 1 ? `pivot${title}` : ""
  }" id="${title + id}" >
                <div class="card ${"card-check-" + title}">
                  <div class="card-header bg-white">
                    <div class="row my-1 ">
                      <div class="col-10"><label for="test" class="text-capitalize fw-bold text-neutral-100 fs-18">${
                        data.name
                      }</label></div>
                      <div class="col-2">
                      ${
                        type === "radio"
                          ? `<input class="form-check-input" type="radio" name="${title}" id="${data.id}" value="" aria-label="..."/>`
                          : `<input class="form-check-input" type="checkbox" name="snack" value="" id="${data.id}">`
                      }
                      </div>
                    </div>
                 </div>
                  <div class="card-body p-0" style="white-space: initial;">
                           <img class="w-100" src="${data.photo}" alt=""/>
                           ${
                             data.desc
                               ? `<p class="w-100 mt-2 text-start px-1" > ${data.desc} </p>`
                               : ""
                           }
                  </div>
                </div>
           </div>`;
};
