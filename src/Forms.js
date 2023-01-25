import Logo from './image0.png'
import Form from './EPC Sponsor Donation.docx_page-0001.jpg'

import './Home.css'
export default function Forms(){
    return(
    <div className='App'>
    <img src={Logo} className='logo' alt="logo" />
        <header className='App-header'>
            <h1>Forms</h1>
            <img src={Form} width='50%' />
            <a href='./EPC Sponsor Donation.docx.pdf' download={'EPC Sponsor Donation.docx.pdf'}>Download</a>
        </header>

    </div>
    )}