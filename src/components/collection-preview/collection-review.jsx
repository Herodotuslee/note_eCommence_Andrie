import React from 'react';

import './collection-review.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';
const CollectionPreview =({title,items})=>{
    console.log('items',items)
   return  (
    <div className='collection-preview'>
        <h1 className='title'></h1>
        <div className='preview'>
         <p>{title}</p>
        {items.map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}

        </div>

    </div>
)
}
export default CollectionPreview;