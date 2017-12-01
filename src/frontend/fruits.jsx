import React from 'react';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFruits();
  }

  render() {

    return (
      <div>testing</div>
    );
  }
}

export default Fruits;
