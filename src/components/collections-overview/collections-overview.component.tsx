import React from 'react'

import './collections-overview.styles.scss'
import { useSelector } from 'react-redux'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import CollectionPreview from '../collection-preview/collection-preview.component'
import { ShopTypes } from '../../Types'

const CollectionsOverview = () => {
  const collections: ShopTypes[]=useSelector(selectCollectionsForPreview)

  return (
    <div className='collections-overview'>
      {collections.map(({id, ...otherCollectionProps})=>(
        <CollectionPreview key={id} {...otherCollectionProps}/>
      ))}
    </div>
  )
}

export default CollectionsOverview

