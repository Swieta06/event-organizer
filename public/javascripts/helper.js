const formatRupiah = (numb) => {
  const format = numb.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const rupiah = "Rp " + convert.join(".").split("").reverse().join("");
  return rupiah;
};
const formatInteger = (string) => {
  const format = string.replace("Rp", "").replace(".", "");
  return parseInt(format);
};

// Validation
const validation = (title) => {
     let error = false;
     if (getLocalStorage(title) && getLocalStorage(title).length !== 0) {
       document.getElementById(`error-${title}`).classList.remove("d-block");
       document.getElementById(`error-${title}`).classList.add("d-none");
       error = true;
     } else {
       document.getElementById(`error-${title}`).classList.remove("d-none");
       document.getElementById(`error-${title}`).classList.add("d-block");
       error = false;
     }

     if(title === "snack" && getLocalStorage(title).length < getLocalStorage("maxSnack")){
        document.getElementById(`error-${title}-quota`).classList.remove("d-none");
        error = false;
     }else if(title === "snack" && getLocalStorage(title).length >= getLocalStorage("maxSnack")){
        document.getElementById(`error-${title}-quota`).classList.add("d-none");
        error = true;
     }
     return error;
   };

  //  Remove Alert
   const removeAlert = (title) => {
       document.getElementById(`error-${title}`).classList.remove("d-block");
       document.getElementById(`error-${title}`).classList.add("d-none");
   };
