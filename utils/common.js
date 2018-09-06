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
