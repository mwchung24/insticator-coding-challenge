import React from 'react';

class ShoppingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fruit = this.props.fruit;
    let product = fruit.price * fruit.count;
    return (
      <div className="fruitItemShopping">
        <div className="shoppingTop">
          <img className="fruitImageShopping" src={fruit.imgSrc}></img>
          <button className="shoppingButton">-</button>
          <div className="count">{fruit.count}</div>
          <button className="shoppingButton">+</button>
        </div>
        <div className="shoppingBottom">
          <div className="fruitPriceShopping">@ ${fruit.price.toFixed(2)} each = ${product.toFixed(2)}</div>
          <button className="deleteButton">Delete</button>
        </div>
      </div>
    );
  }
}

export default ShoppingIndexItem;
