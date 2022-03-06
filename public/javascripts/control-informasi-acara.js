// Add Or Reduce Guest
const addOrReduceGuest = () =>{
    const redGuest = document.getElementById("redGuest");
    const addGuest = document.getElementById("addGuest");
    const totalGuest = document.getElementById("totalGuest");
    const totalGuestText = document.getElementById("totalGuestText");
    const totalPrice = document.getElementById("totalPrice");

    const minParticipan = getLocalStorage("minParticipan");
    totalGuestText.innerText = `total tamu undangan ${minParticipan}`;

    // Reduce Guest
    redGuest.addEventListener("click", () => {
      const minParticipan = getLocalStorage("minParticipan");
      const addParticipan = getLocalStorage("addParticipan");
      if (addParticipan >= 10) {
        const totalParticipan = addParticipan - 10;
        totalGuestText.innerText = `total tamu undangan ${
          minParticipan + totalParticipan
        }`;
        setLocalStorage("addParticipan", totalParticipan);
        totalGuest.value = getLocalStorage("addParticipan");
        totalPrice.innerText = formatRupiah(
          getLocalStorage("totalPrice") +
            (getLocalStorage("addParticipan") / 10) *
              getLocalStorage("additionCost")
        );
      }
    });

    // Add Guest
    addGuest.addEventListener("click", () => {
      const minParticipan = getLocalStorage("minParticipan");
      const totalParticipan = getLocalStorage("addParticipan") + 10;
      totalGuestText.innerText = `total tamu undangan ${
        minParticipan + totalParticipan
      }`;
      setLocalStorage("addParticipan", totalParticipan);
      totalGuest.value = getLocalStorage("addParticipan");
      totalPrice.innerText = formatRupiah(
        getLocalStorage("totalPrice") +
          (getLocalStorage("addParticipan") / 10) *
            getLocalStorage("additionCost")
      );
    });
}

// Pakage Listener
const packageListener = () =>{
  const getPackage = document.getElementById('package')
const getPackageConvert = JSON.parse(decodeURIComponent(getPackage.value))
  setLocalStorage('namePackage', getPackageConvert.name)
  setLocalStorage('additionCost', getPackageConvert.additionCost)
  setLocalStorage('minParticipan', getPackageConvert.minParticipan)
  setLocalStorage('totalPrice', getPackageConvert.totalPrice)
  totalGuestText.innerText =  `total tamu undangan ${getPackageConvert.minParticipan}`;
  document.getElementById('price').innerText =  formatRupiah(getPackageConvert.price)
  
getPackage.addEventListener("change", (e)=>{
  const data = decodeURIComponent(e.target.value)
  const convertData = JSON.parse(data)
  setLocalStorage('namePackage', convertData.name)
  setLocalStorage('minParticipan', convertData.minParticipan)
  setLocalStorage('additionCost', convertData.additionCost)
  setLocalStorage('price', convertData.price)
  totalGuestText.innerText =  `total tamu undangan ${convertData.minParticipan + getLocalStorage("addParticipan")}`;
  document.getElementById('price').innerText =  formatRupiah(getLocalStorage('price') + ((getLocalStorage("addParticipan") / 10) * getLocalStorage('additionCost')))

});
}