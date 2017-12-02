import React from 'react';

class FruitIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.addToCart(this.props.fruit);
  }

  render() {
    let fruit = this.props.fruit;
    if(this.props.shopping) {
      return (
        <div className="fruitItem" onClick={this.handleClick}>
          <img className="fruitImage" src={fruit.imgSrc}></img>
          <div className="priceAndCount">
            <div className="fruitPrice">${fruit.price}</div>
            <div className="fruitCount">{fruit.quantityRemaining} In Stock</div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="fruitItem" onClick={this.handleClick}>
          <img className="fruitImage" src={fruit.imgSrc}></img>
          <div className="fruitName">{fruit.itemName[0].toUpperCase() + fruit.itemName.slice(1)}</div>
          <div className="priceAndCount">
            <div className="fruitPrice">${fruit.price}</div>
            <div className="fruitCount">{fruit.quantityRemaining} In Stock</div>
          </div>
          <button className="addToCart">Add to Cart</button>
        </div>
      );
    }
  }
}

export default FruitIndexItem;
