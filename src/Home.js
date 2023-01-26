import easterpanhancav from './easternpanhancav.jpg'
import eastercav from './easternpancav.jpg'
import Logo from './image0.png'
import image0 from './attachments/image0.png'
import image1 from './attachments/image1.png'
import image2 from './attachments/image2.jpeg'
import image3 from './attachments/image3.jpeg'
import eNe from './attachments/e&e.jpg'
import './Home.css';
import React,{useState} from 'react'



function Home() {

  return (
    <div className="App">
        <img src={Logo} className='logo' alt="logo" />
      <header className="App-header">
      <a href='https://www.facebook.com/groups/444599141095663'>
        <h2>Check out our Facebook page!</h2>
        </a>
        <div className='asd'>
          <h2>TRYOUTS!</h2>
        </div>
        <img src={easterpanhancav} className="App-logo" alt="logo" />


{/* <a>Donations/Sponsorships</a>
field equipment(
) */}
        <div>
          <h2>About Us</h2>
          Eastern Panhandle Cavalry Youth Football Team is a non-profit program under Eastern Panhandle Cavalry Youth Sports. We are continuously looking for sponsors to assist us in the purchasing of personal protective equipment as well as field equipment which are needed to have a successful and safe season. We solicit your support in the forms of sponsorships and donations both monetary and by the purchase/donating of equipment. Your support helps our organization tremendously by lowering cost for the players families for travel, lodging, equipment, and most importantly the experience. Our EP Cavalry YFT is a part of the American Youth Football League (AYF), that compete a national level. Our team is composed of youth athletes from Berkeley, Jefferson, and Morgan County, and extend just across our border to neighboring communities in Winchester and Hagerstown. The EP Cavalry Organization gives youth athletes from all over the Eastern Panhandle and neighboring communities the opportunity to compete with each other and build relationships.


        </div>
          <h2>Shout Out Our Sponsors!</h2>
    <ul>
         <li id='sponsor'><img src={image1} className='brand'/><h3>Cardinal Realty Group, Inc.</h3></li>
      <li id='sponsor'><img src={image0} className='brand' /><h3>THE APRIL LEONARD TEAM</h3></li>
         <li id='sponsor'><img src={image2} className='brand'/><h3>Negley's Water and Well Drilling</h3></li>
         <li id='sponsor'><img src={image3} className='brand'/><h3>Mountaineer Pub</h3></li>
         <li id='sponsor'><img src={eNe} className='brand'/><h3>Enter & Exit</h3></li>
      <li id='sponsor'><h3>Johnathan Knight Century 21</h3></li>
      <li id='sponsor'><h3>Lemon Enterprises, Inc.</h3></li>
    </ul>
      </header>
    </div>
  );
}

export default Home;
