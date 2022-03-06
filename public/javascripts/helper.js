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
     if (getLocalStorage(title) && getLocalStorage(title).length !== 0) {
       document.getElementById(`error-${title}`).classList.remove("d-block");
       document.getElementById(`error-${title}`).classList.add("d-none");
     } else {
       document.getElementById(`error-${title}`).classList.remove("d-none");
       document.getElementById(`error-${title}`).classList.add("d-block");
       return true;
     }
   };

  //  Remove Alert
   const removeAlert = (title) => {
       document.getElementById(`error-${title}`).classList.remove("d-block");
       document.getElementById(`error-${title}`).classList.add("d-none");
   };
