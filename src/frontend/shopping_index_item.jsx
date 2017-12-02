import React from 'react';

class ShoppingIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.addFruit = this.addFruit.bind(this);
    this.removeFruit = this.removeFruit.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  addFruit() {
    if(this.props.fruits[this.props.fruit.id].quantityRemaining > 0) {
      let newFruit = {
        id: this.props.fruit.id,
        itemName: this.props.fruit.itemName,
        imgSrc: this.props.fruit.imgSrc,
        price: this.props.fruit.price,
        quantityRemaining: this.props.fruits[this.props.fruit.id].quantityRemaining - 1,
      };
      this.props.updateFruit(newFruit);
      this.props.addToCart(this.props.fruit);
    } else {
      alert("No more " + this.props.fruit.itemName + " in stock!");
    }
  }

  removeFruit() {
    if (this.props.fruit.count > 1) {
      let newFruit = {
        id: this.props.fruit.id,
        itemName: this.props.fruit.itemName,
        imgSrc: this.props.fruit.imgSrc,
        price: this.props.fruit.price,
        quantityRemaining: this.props.fruits[this.props.fruit.id].quantityRemaining + 1,
      };
      this.props.updateFruit(newFruit);
      this.props.removeFromCart(this.props.fruit);
    }
  }

  deleteFromCart() {
    this.props.deleteFromCart(this.props.fruit);
    let newFruit = {
      id: this.props.fruit.id,
      itemName: this.props.fruit.itemName,
      imgSrc: this.props.fruit.imgSrc,
      price: this.props.fruit.price,
      quantityRemaining: this.props.fruits[this.props.fruit.id].quantityRemaining + this.props.fruit.count,
    };
    this.props.updateFruit(newFruit);
  }

  render() {
    let fruit = this.props.fruit;
    let product = fruit.price * fruit.count;
    return (
      <div className="fruitItemShopping">
        <div className="shoppingTop">
          <img className="fruitImageShopping" src={fruit.imgSrc}></img>
          <button className="shoppingButton" onClick={this.removeFruit}>-</button>
          <div className="count">{fruit.count}</div>
          <button className="shoppingButton" onClick={this.addFruit}>+</button>
        </div>
        <div className="shoppingBottom">
          <div className="fruitPriceShopping">@ ${fruit.price.toFixed(2)} each = ${product.toFixed(2)}</div>
          <button className="deleteButton" onClick={this.deleteFromCart}>Delete</button>
        </div>
      </div>
    );
  }
}

export default ShoppingIndexItem;
