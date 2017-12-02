import React from 'react';
import ShoppingIndexItem from './shopping_index_item';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
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
            addToCart={this.props.addToCart}
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
          <button className="emptyCart">Empty Cart</button>
          <button className="confirmPurchase">Confirm Purchase</button>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
