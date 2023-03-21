import flyer from './Field Equipment Flyer.PNG'
import Logo from './image0.png'
import './Sponsor.css'
import './Home.css'
import Intro from './SponsorIntro.jpg'
import Form from './SponsorFormm.jpg'
export default function Sponsor(){
    return(
    <div className='App'>
    <img src={Logo} className='logo' alt="logo" />
        <header className='App-header'>
            <h1>Sponsorships</h1>
            <img src={Intro} className='App-header2' />
            <a href="/SponsorIntro.pdf" download={'SponsorIntro.pdf'}><h3>Download</h3></a>
    <img src={flyer} className='App-header2'alt='flyer'/>
            <img src={Form} className='App-header2' />
            <a href='/SponsorFormm.pdf' download={'SponsorForm.pdf'}><h3>Download</h3></a>
        </header>

    </div>
)}