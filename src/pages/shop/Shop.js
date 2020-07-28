import React from 'react';
import SHOP_DATA from './ShopData';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections : SHOP_DATA
    }
  }
  render() {
    return (
      <div>
        <h1>Shop page</h1>
      </div>
    );
  }
}
export default ShopPage;