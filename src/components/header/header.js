import React from 'react';
import './header.css'

const tabs = [
  {
    id:1,
    name:"Flights",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/airplane-take-off.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/airplane-take-off.png"
  },
  {
    id:1,
    name:"Hotels",
    active_img:"https://img.icons8.com/office/30/000000/4-star-hotel.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/4-star-hotel--v1.png"
  },
  {
    id:1,
    name:"Home",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/home--v1.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/home--v1.png"
  },
  {
    id:1,
    name:"Holiday",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/hot-air-balloon.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/hot-air-balloon.png"
  },
  {
    id:1,
    name:"Train",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/train.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/train.png"
  },
  {
    id:1,
    name:"Bus",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/bus.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/bus.png"
  },
  {
    id:1,
    name:"Taxi",
    active_img:"https://img.icons8.com/ultraviolet/30/000000/taxi.png",
    inactive_img:"https://img.icons8.com/ios/30/000000/taxi.png"
  },
  {
    id:1,
    name:"Visas",
    active_img:"https://img.icons8.com/external-itim2101-blue-itim2101/30/000000/external-passport-travel-itim2101-blue-itim2101-1.png",
    inactive_img:"https://img.icons8.com/external-itim2101-lineal-itim2101/30/000000/external-passport-travel-itim2101-lineal-itim2101-1.png"
  },
]

const Header = ({activeTab, setActiveTab}) => {
   
  return (
    <nav className='Header'>
      <img className='Header_logo' src="//imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png" alt="logo" />
       <div className='headerwrapper'>
          {tabs.map((tab)=>{
            return(
              <div>{tab.name}</div>
            )
          })}
       </div>

    </nav>
  )
}

export default Header

// style={{ fontSize: 30, padding: 4 }}

{/* <div className='img'>
<span>
<img src="https://img.icons8.com/pastel-glyph/30/000000/airplane-take-off--v3.png"/>
</span>
<p>Flights</p>
</div> */}