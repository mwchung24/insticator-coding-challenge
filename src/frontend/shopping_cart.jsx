import React from 'react';
import FruitIndexItem from './fruit_index_item';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  render() {
    let fruits = this.props.cart;
    let all_fruits;
    if (fruits) {
      all_fruits = fruits.map((fruit) => {
        return (
          <FruitIndexItem
            key={fruit.id}
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
        <div className="bodyShopping">
          <ul className="fruitItemsShopping">
            {all_fruits}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
