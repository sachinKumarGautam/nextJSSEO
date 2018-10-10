export const modifiyMedicineList = (medicineList, cartItems) => {
  const updatedmedicineList = medicineList.map(searchItem => {
    const checkIfAlredyExistInCart = cartItems.findIndex(
      cartItem => searchItem.sku === cartItem.sku
    )
    if (checkIfAlredyExistInCart !== -1) {
      return {
        ...searchItem,
        is_exist_in_cart: true
      }
    } else {
      return {
        ...searchItem,
        is_exist_in_cart: false
      }
    }
  })
  return updatedmedicineList
}

export function removeQueryParameters () {
  // return window.history.pushState("object or string", "Title", "/"+window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0]);
  var uri = window.location.toString()
  if (uri.indexOf('?') > 0) {
    var clean_uri = uri.substring(0, uri.indexOf('?'))
    window.history.replaceState({}, document.title, clean_uri)
  }
}
