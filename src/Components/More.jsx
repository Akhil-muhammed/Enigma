import React, { useContext, useState } from 'react'
import '../Components/More.css'
import { useLocation } from 'react-router-dom'
import { Shopcontext } from './Shopcontext';

function More() {
    const location = useLocation();
    const selectedProduct = location.state.selectedProduct
    const [image,setimage ]= useState(selectedProduct.img)
    const {cartitems,addToCart,taxes,shareUrOpinion,size} =useContext(Shopcontext)
    
  return (
    <div className='main-morediv'>
        <div className='morediv'>
        <div className='cart-img-puma'>
        <img className='sub-cart-img-puma' src={image} />
        </div>
        <div className='details'>
        <span className='head-name'>{selectedProduct.name}</span>
        <span className='head-discription'>{selectedProduct.discription}</span>
        <p className='head-price'>MRP : {selectedProduct.price}</p>
        <span className='taxes'>{selectedProduct.taxes}</span>
        <span className='shareopinion'>{selectedProduct.shareUrOpinion}</span>
        <span className='size'>{selectedProduct.size}</span>
        <div className='round'></div>
        <span>Size out of stock?</span>
        <span className='view'>View Similar</span>
        <div className='line'></div>
        <div className='Cart-div'>
        <button className='AddTo-Cart' onClick={()=>addToCart(selectedProduct.id)}>ADD TO CART</button>
        </div>
        </div>
        </div>
        <div className='deraction-img'>
          <div className='sub-deraction-img'>
          <img className='firstimg' onClick={()=>setimage(selectedProduct.img)} src={selectedProduct.img}/>
          <img className='firstimg' onClick={()=>setimage(selectedProduct.imgf)} src={selectedProduct.imgf}/>
          <img className='firstimg' onClick={()=>setimage(selectedProduct.imgl)} src={selectedProduct.imgl}/>
          <img className='firstimg' onClick={()=>setimage(selectedProduct.imgr)} src={selectedProduct.imgr}/>
          </div>
        </div>

    </div>
  )
}

export default More