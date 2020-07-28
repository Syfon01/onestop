import React from 'react';
import './Collections.scss'
import CollectionItem from './CollectionItem';
function Collections({items,title}) {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, index)=>(index < 4)).map(({id, ...OtherItemProps}) => (
         <CollectionItem key={id} {...OtherItemProps } />
        ))}
      
      </div>
    </div>
  );
}

export default Collections;