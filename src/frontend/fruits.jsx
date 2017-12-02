import React from 'react';
import FruitIndexItem from './fruit_index_item';
import ShoppingCartContainer from './shopping_cart_container';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {
    let fruits = Object.values(this.props.fruits);
    let all_fruits;
    if (fruits) {
      all_fruits = fruits.map((fruit) => {
        return (
          <FruitIndexItem
            key={fruit.id}
            fruit={fruit}
            cart={this.props.cart}
            addToCart={this.props.addToCart}
            updateFruit={this.props.updateFruit}
          />
        );
      });
    }

    return (
      <div>
        <div className="headerContainer">
          <div className="header">Fruit</div>
        </div>
        <div className="body">
          <ul className="fruitItems">
            {all_fruits}
          </ul>
          <ShoppingCartContainer />
        </div>
      </div>
    );
  }
}

export default Fruits;
