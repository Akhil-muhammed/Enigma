import React from 'react'
import '../Components/Caps.css'
import redPuma from './Images/puma-red-cap-removebg-preview.png'
import bmw from './Images/bmw-cap-removebg-preview.png'
import AdidasBlack from './Images/adida-_black-removebg-preview.png'
import adidasWhite from './Images/adidas-white-removebg-preview.png'
import RoyelEnfield from './Images/RoyelEnfield-removebg-preview.png'
import RoyelEnfield39 from './Images/RoyelEnfield-39-removebg-preview.png'
import adidasmkyCap from './Images/adidadMonkey-cap-removebg-preview.png'
import BmwmkyCap from './Images/bmw-mkyCap-removebg-preview.png'
import pumamkyCap from './Images/puma-mkyCap-removebg-preview.png'
import WoodLandwhitwCap from './Images/WoodLand-Whitw-cap-removebg-preview.png'
import PeterEglCap from './Images/peter-england-cap-removebg-preview.png'
import RoyelDarkBlueCap from './Images/royel-darkBlue-cap-removebg-preview.png'
import { useNavigate } from 'react-router-dom'

function Caps() {
  const navigate=useNavigate()
  return (
    <div className='main-body'>
    <div className='main-body1'>
        <div className='headline'>
          <h3>Caps & hats</h3>
          <span>603 Products</span>  
        </div>
        <div className='card-container'>
          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='redPuma' src={redPuma} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Puma</span>
            <span className='puma-defi'>Puma Scuderia Ferrari Sptwr <br /> Race Rosso Corsa Baseball <br /> Cap</span>
            <span className='pumatext'>₹1999</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('product')}>
            <div className='img-div'>
            <img className='redPuma' src={bmw} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Puma</span>
            <span className='puma-defi'>Puma BMW M Motorsport <br />Statement Black Baseball <br />Cap </span>
            <span className='pumatext'>₹2499</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('product')}>
            <div className='img-div'>
            <img className='adidas-black' src={AdidasBlack} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>adidas</span>
            <span className='puma-defi'>adidas Black  Solid Baseball <br /> Cap</span>
            <span className='pumatext'>₹1499</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='redPuma' src={adidasWhite} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>adidas</span>
            <span className='puma-defi'>Adidas White Cotton <br />Baseball Cap</span>
            <span className='pumatext'>₹1999</span>
            </div>
          </div>


        </div>

        <div className='card-container'>
          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='adidas-black' src={RoyelEnfield} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Royel Enfield</span>
            <span className='puma-defi'>Royel Enfield Tornadoes  <br />Olive Green Solid Baseball <br /> Cap</span>
            <span className='pumatext'>₹1300</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='adidas-black' src={RoyelEnfield39} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Royel Enfield</span>
            <span className='puma-defi'>Royel Enfield Military <br />Green Solid Baseball <br />Cap </span>
            <span className='pumatext'>₹850</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='adidas-monkeyCap' src={adidasmkyCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>adidas</span>
            <span className='puma-defi'>adidas Black  Solid Beanies- <br /> Small</span>
            <span className='pumatext'>₹1299</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='BMW-monkeyCap' src={BmwmkyCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>adidas</span>
            <span className='puma-defi'>Adidas White Cotton <br />Baseball Cap</span>
            <span className='pumatext'>₹1999</span>
            </div>
          </div>


        </div>


        <div className='card-container'>
          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='BMW-monkeyCap' src={pumamkyCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Puma</span>
            <span className='puma-defi'>Puma Ferrari Sptwr Style<br />Classic Cuff Grey Solid <br />Beanies</span>
            <span className='pumatext'>₹839</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='adidas-black' src={WoodLandwhitwCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>WoodLand</span>
            <span className='puma-defi'>Woodland White Solid <br />Baseball Cap </span>
            <span className='pumatext'>₹716</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='redPuma' src={PeterEglCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Peter England</span>
            <span className='puma-defi'>Peter England Olive Green <br /> Baseball Cap</span>
            <span className='pumatext'>₹524</span>
            </div>
          </div>

          <div className='card-1' onClick={()=>navigate('Product')}>
            <div className='img-div'>
            <img className='adidas-black' src={RoyelDarkBlueCap} />
            </div>
            <div className='featurs'>
            <span className='pumatext'>Royel Enfield</span>
            <span className='puma-defi'>Royel Enfield Trucker Dark <br /> Blue Solid Baseball cap </span>
            <span className='pumatext'>₹630</span>
            </div>
          </div>


        </div>


    </div>
    </div>
  )
}

export default Caps
