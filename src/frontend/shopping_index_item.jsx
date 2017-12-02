import React from 'react';

class ShoppingIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fruit = this.props.fruit;
    return (
      <div className="fruitItem">
        <img className="fruitImage" src={fruit.imgSrc}></img>
        <div className="priceAndCount">
          <div className="fruitPrice">${fruit.price}</div>
          <div className="count">{fruit.count}</div>
        </div>
      </div>
    );
  }
}

export default ShoppingIndexItem;
