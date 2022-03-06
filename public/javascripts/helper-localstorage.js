const getLocalStorage = (name) =>{
  const getData = JSON.parse(localStorage.getItem('data'));
  return getData[name];
};
const setLocalStorage = (name, value) => {
  const getData = JSON.parse(localStorage.getItem('data'));
  getData[name] = value;
  localStorage.setItem('data', JSON.stringify(getData));
};
const setLocalStorageProduct = ( value, value2 = 0) => {
  const getData = JSON.parse(localStorage.getItem("data"));
    getData["products"]
      .push({
        id: value,
        qty: value2,
      });
  localStorage.setItem("data", JSON.stringify(getData));
};