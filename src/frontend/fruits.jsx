import React from 'react';
import FruitIndexItem from './fruit_index_item';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {
    let fruits = this.props.fruits;
    let all_fruits;
    if (fruits) {
      all_fruits = fruits.map((fruit) => {
        return (
          <FruitIndexItem
            key={fruit.id}
            fruit={fruit}
          />
        );
      });
    }

    return (
      <div>
        <div className="headerContainer">
          <div className="header">Fruit</div>
        </div>
        <ul className="fruitItems">
          {all_fruits}
        </ul>
      </div>
    );
  }
}

export default Fruits;
