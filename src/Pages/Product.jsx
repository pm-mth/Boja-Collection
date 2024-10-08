import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Component/Breadcrums/Breadcrum';
import ProductDispaly from '../Component/ProductDisplay/ProductDispaly';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

const Product = () => {
  const{all_product} = useContext(ShopContext);
  const {productId} =useParams();
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <Breadcrum product = {product} />
      <ProductDispaly product = {product}/>
      <DescriptionBox />
      <RelatedProduct/>
    </div>
  )
}

export default Product
