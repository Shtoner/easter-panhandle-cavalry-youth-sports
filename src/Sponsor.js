import flyer from './Field Equipment Flyer.PNG'
import Logo from './image0.png'
import './Sponsor.css'
import './Home.css'
export default function Sponsor(){
    return(
    <div className='App'>
    <img src={Logo} className='logo' alt="logo" />
        <header className='App-header'>
    <img src={flyer} className='flyer'alt='flyer'/>
        </header>

    </div>
)}