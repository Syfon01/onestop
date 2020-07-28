import React from 'react';
import SHOP_DATA from './ShopData';
import Collections from '../../components/Collections/Collections';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections : SHOP_DATA
    }
  }
  render() {
    const {collections} = this.state
    return (
      <div className="shop-page">
        {
          collections.map(({id, ...otherCollectionProps}) => (
            < Collections key={id} {...otherCollectionProps}/>
          ))
        }
      </div>
    );
  }
}
export default ShopPage;