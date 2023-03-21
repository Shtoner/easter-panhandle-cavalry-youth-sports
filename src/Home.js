import eastercav from './easternpancav.jpg'
import Logo from './image0.png'
import image0 from './attachments/image0.png'
import image1 from './attachments/image1.png'
import image2 from './attachments/image2.jpeg'
import image3 from './attachments/image3.jpeg'
import eNe from './attachments/e&e.jpg'
import MissionPic from './MissionPic.jpg'
import './Home.css';
import React,{useState} from 'react'



function Home() {

  return (
    <div className="App">
        <img src={Logo} className='logo' alt="logo" />
      <header className="App-header">
        <h1>Home</h1>
      <a href='https://www.facebook.com/groups/444599141095663'>
        <h2>Check out our Facebook page!</h2>
        </a>
        <div className='asd'>
          <h3 className='brandname'>(For information on upcoming team events, please visit our Facebook page, as it's being updated hourly.)</h3>
        </div>


{/* <a>Donations/Sponsorships</a>
field equipment(
) */}
        <div className='App-header'>
          <h2>Our Mission</h2>
<p>The Eastern Panhandle Cavalry Youth Football organization is a non-profit organization (Tax ID: 88-0528782), and one of many under The Eastern Panhandle Cavalry Youth Sports Association. We are based out of Martinsburg, WV, and are a part of the American Youth Football League (AYFL), that competes at a national level. Our teams are composed of youth athletes from Berkeley, Jefferson, and Morgan counties, and extend just across our border to neighboring communities and counties. The EP Cavalry Organization gives youth athletes from all over the Eastern Panhandle and neighboring communities the opportunity to compete with each other and build relationships.
</p>
<p>EP Cavalry YFT provides area kids with the opportunity to achieve their dreams through personal development as well as athletic training. We work with our children to promote: good character; hard work; dedication; sportsmanship; learn responsibility & teamwork; perseverance, and self-confidence. EPC provides a structured, safe, and secure environment for the children to learn these life skills. 
</p>
<br></br>
<br></br>

<img className='brand'src={MissionPic}></img>
        </div>

        <br></br>
          <h2>Shout Out Our Sponsors!</h2>
         <div id='sponsor'><img src={image1} className='brand'/><h3 className='brandname'>Cardinal Realty Group, Inc.</h3></div>
      <div id='sponsor'><img src={image0} className='brand' /><h3 className='brandname'>THE APRIL LEONARD TEAM</h3></div>
         <div id='sponsor'><img src={image2} className='brand'/><h3 className='brandname'>Negley's Water and Well Drilling</h3></div>
         <div id='sponsor'><img src={image3} className='brand'/><h3 className='brandname'>Mountaineer Pub</h3></div>
         <div id='sponsor'><img src={eNe} className='brand'/><h3 className='brandname'>Enter & Exit</h3></div>
      <div id='sponsor2'><h3 className='brandname'>Johnathan Knight, Century 21</h3></div>
      <div id='sponsor2'><h3 className='brandname'>Lemon Enterprises, Inc.</h3></div>
      </header>
    </div>
  );
}

export default Home;
