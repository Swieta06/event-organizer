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
const setLsPackage = (value) => {
  const decodeCp = JSON.parse(decodeURIComponent(value));
  setLocalStorage("package", decodeCp.package);
  setLocalStorage("additionCost", decodeCp.additionCost);
  setLocalStorage("minParticipan", decodeCp.minParticipan);
  setLocalStorage("totalPrice", decodeCp.totalPrice);
  setLocalStorage("maxSnack", decodeCp.maxSnack);
  setLocalStorage("snack", []);

  const addParticipan = getLocalStorage("addParticipan");

  document.getElementById("totalGuestText").innerText = `total tamu undangan ${decodeCp.minParticipan + addParticipan}`;
  document.getElementById("maxSnack").innerText = `0/${decodeCp.maxSnack}`;
  document.getElementById("totalGuest").value = addParticipan;
  const totalPrice = addParticipan === 0 ? decodeCp.totalPrice : decodeCp.totalPrice + (decodeCp.additionCost * (addParticipan / 10));
  document.getElementById("totalPrice").innerText = formatRupiah(
    totalPrice
  );
};
const packageListener = () =>{
  const choosePackage = document.getElementById('choosePackage');
  setLsPackage(choosePackage.value);

  choosePackage.addEventListener("change", (e) => {
      setLsPackage(e.target.value);
      const cardCheckSnack = document.querySelectorAll(".card-check-snack");
      document.getElementById("error-snack-toolong").classList.add("d-none");
      document.getElementById("error-snack-quota").classList.add("d-none");
      for (let i = 0; i < cardCheckSnack.length; i++) {
        cardCheckSnack[i].style.border = "1px solid #e5e5e5";
        cardCheckSnack[i].children[0].children[0].children[1].children[0].checked = false;
      }
  });
}