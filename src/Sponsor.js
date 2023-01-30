import flyer from './Field Equipment Flyer.PNG'
import Logo from './image0.png'
import './Sponsor.css'
import './Home.css'
import Form from './EPC Sponsor Donation.docx_page-0001.jpg'
export default function Sponsor(){
    return(
    <div className='App'>
    <img src={Logo} className='logo' alt="logo" />
        <header className='App-header'>
    <img src={flyer} className='App-header2'alt='flyer'/>
            <img src={Form} className='App-header2' />
            <a href='./EPC Sponsor Donation.docx.pdf' download={'EPC Sponsor Donation.docx.pdf'}>Download</a>
        </header>

    </div>
)}