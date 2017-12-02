import React from 'react';

class FruitIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.props.fruit.quantityRemaining > 0) {
      let newFruit = {
        id: this.props.fruit.id,
        itemName: this.props.fruit.itemName,
        imgSrc: this.props.fruit.imgSrc,
        price: this.props.fruit.price,
        quantityRemaining: this.props.fruit.quantityRemaining - 1,
      };
      this.props.updateFruit(newFruit);
      this.props.addToCart(this.props.fruit);
    } else {
      alert("No more " + this.props.fruit.itemName + " in stock!");
    }
  }

  render() {
    let fruit = this.props.fruit;
    return (
      <div className="fruitItem">
        <img className="fruitImage" src={fruit.imgSrc}></img>
        <div className="fruitName">{fruit.itemName[0].toUpperCase() + fruit.itemName.slice(1)}</div>
        <div className="priceAndCount">
          <div className="fruitPrice">${fruit.price}</div>
          <div className="fruitCount">{fruit.quantityRemaining} In Stock</div>
        </div>
        <button className="addToCart" onClick={this.handleClick}>Add to Cart</button>
      </div>
    );
  }
}

export default FruitIndexItem;
