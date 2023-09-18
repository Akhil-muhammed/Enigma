import React from 'react'
import { Link } from 'react-router-dom';
import '../Components/Items.css'

const Items = (props) => {
    const {id,img,imgf,imgl,imgr,name,discription,price}=props.data;
  return (
    <div>
     <Link state={{selectedProduct:props.data}} className='morelink' to='/More'> 
            <div className='card-z'>
            <div className='img-div'>
            <img className='redPuma' src={img} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>{name}</span>
            <span className='puma-defi'>{discription}</span>
            <span className='pumatext'>{price}</span>
            
            </div>
          </div>
      </Link> 
    </div>
  )
}

export default Items
