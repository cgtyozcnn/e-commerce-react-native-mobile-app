class CartItem {
  constructor(productTitle, productImageUrl,productPrice, quantity, sum) {
    this.productTitle = productTitle;
    this.productImageUrl = productImageUrl
    this.productPrice = productPrice;
    this.quantity = quantity;
    this.sum = sum;
  }
}

export default CartItem;
