import React from 'react';
import ShoppingIndexItem from './shopping_index_item';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.emptyCart = this.emptyCart.bind(this);
    this.purchaseFruits = this.purchaseFruits.bind(this);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  purchaseFruits() {
    if(Object.values(this.props.cart).length > 0) {
      if(confirm("Would you like to proceed and purchase?")) {
        let cart = Object.values(this.props.cart);
        for (let i = 0; i < cart.length; i++) {
          let currentFruit = cart[i];
          this.props.deleteFromCart(currentFruit);
        }
      }
    } else {
      alert("Please add fruits to cart!");
    }
  }

  emptyCart() {
    let cart = Object.values(this.props.cart);
    for (let i = 0; i < cart.length; i++) {
      let currentFruit = cart[i];
      this.props.deleteFromCart(currentFruit);
      let newFruit = {
        id: currentFruit.id,
        itemName: currentFruit.itemName,
        imgSrc: currentFruit.imgSrc,
        price: currentFruit.price,
        quantityRemaining: this.props.fruits[currentFruit.id].quantityRemaining + currentFruit.count,
      };
      this.props.updateFruit(newFruit);
    }
  }

  render() {
    let fruits = Object.values(this.props.cart);
    let all_fruits;
    let count = 0;
    let total = 0;
    if (fruits) {
      all_fruits = fruits.map((fruit) => {
        count += fruit.count;
        total += fruit.count * fruit.price;
        return (
          <ShoppingIndexItem
            key={fruit.id}
            cart={this.props.cart}
            fruit={fruit}
            fruits={this.props.fruits}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            deleteFromCart={this.props.deleteFromCart}
            updateFruit={this.props.updateFruit}
            shopping={true}
          />
        );
      });
    }

    return (
      <div className="shopping_cart">
        <div className="shopping_cart_head">Shopping Cart</div>
        <div className="itemCount">{count} items</div>
        <div className="bodyShopping">
          <ul className="fruitItemsShopping">
            {all_fruits}
          </ul>
        </div>
        <div className="Purchase">
          <div className="total">Total: ${total.toFixed(2)}</div>
          <button className="emptyCart" onClick={this.emptyCart}>Empty Cart</button>
          <button className="confirmPurchase" onClick={this.purchaseFruits}>Confirm Purchase</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
