import React, { useState } from 'react'
import '../Components/Products.css'
import PRODUCTS from './Data'
import Items from './Items'
import Footer from './Footer'

function Products() {
  // const [searchterm,setSearchterm] = useState('')
  const [selectBrand,setselectBrand] = useState(null)
  const [data,setdata] = useState(PRODUCTS)
  // const handleSearchchange = (event) => {
  //   setSearchterm (event.target.value);
  // };
  const capSearchBrand = (category) => {
    setselectBrand(category);
  };
  const filterdProduct = PRODUCTS.filter((store)=>
  store.name.toLowerCase()
  )

  const filterdbycategory =() => {
    let filterd = filterdProduct;
    if (selectBrand) {
      filterd = filterd.filter((product)=>product.name===selectBrand)
    }
    return filterd;
  }

  const clearFilter = () => {
    setselectBrand(null); 
  };


  return (
    <>
    <div className='full-cover-body'>
      <div className='sticky'>
        <div className='sticky-div'>
          <div className='filters'>
            <span className='filterText'>Filters</span>
            <p className='clearText' onClick={()=>clearFilter(null)}>Clear All</p>
          </div>

          <div className='Pumafilter'>
            <span className='pumaText' onClick={()=>capSearchBrand('Puma')}>Puma</span>
            <span className='cap'>Men's Cap</span>
          
          </div>

          <div className='Pumafilter'>
            <span className='pumaText' onClick={()=>capSearchBrand('Adidas')}>Adidas</span>
            <span className='cap'>Men's Cap</span>
            
          </div>

          
          <div className='Pumafilter'>
            <span className='pumaText' onClick={()=>capSearchBrand('Royel Enfield')}>Royel Enfield</span>
            <span className='cap'>Men's Cap</span>
            
          </div>

          <div className='Pumafilter'>
            <span className='pumaText'  onClick={()=>capSearchBrand('WoodLand')}>WoodLand</span>
            <span className='cap'>Men's Cap</span>
            
          </div>

          <div className='Pumafilter'>
            <span className='pumaText' onClick={()=>capSearchBrand('Peter England')}>Peter England</span>
            <span className='cap'>Men's Cap</span>
            
          </div>


        </div>
        
      </div>
     <div className='maping'>
        {
          filterdbycategory().map((product)=>(
            <Items data={product}/>
        
          ))
        }

     </div>
     </div>
     <Footer/>
     </>
  )
}

export default Products