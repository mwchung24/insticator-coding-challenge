import React from 'react';

class FruitIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fruit = this.props.fruit;
    return (
      <div className="fruitItem">
        <img className="fruitImage" src={fruit.imgSrc}></img>
        <div className="fruitName">{fruit.itemName}</div>
        <div className="fruitPrice">{fruit.price}</div>
        <div className="fruitCount">{fruit.quantityRemaining} In Stock</div>
        <button className="addToCart">Add to Cart</button>
      </div>
    );
  }
}

export default FruitIndexItem;
