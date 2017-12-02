import React from 'react';

class FruitIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addToCart(this.props.fruit);
    if(this.props.fruit.quantityRemaining > 0) {
      let newFruit = {
        id: this.props.fruit.id,
        itemName: this.props.fruit.itemName,
        imgSrc: this.props.fruit.imgSrc,
        price: this.props.fruit.price,
        quantityRemaining: this.props.fruit.quantityRemaining - 1,
      };
      this.props.updateFruit(newFruit);
    } else {
      alert("No more " + this.props.fruit.itemName + " in stock!");
    }
  }

  render() {
    let fruit = this.props.fruit;
    if(this.props.shopping) {
      return (
        <div className="fruitItem" onClick={this.handleClick}>
          <img className="fruitImage" src={fruit.imgSrc}></img>
          <div className="priceAndCount">
            <div className="fruitPrice">${fruit.price}</div>
            <div className="count">{this.state.count}</div>
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
