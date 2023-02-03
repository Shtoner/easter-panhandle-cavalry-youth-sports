import {NavLink,Routes, Route} from 'react-router-dom'
import Home from './Home'
import FAQ from './FAQ'
import Forms from './Forms'
import Teams from './Teams'
import Gallery from './Gallery'
import Sponsor from './Sponsor'
import Contact from './Contact'
import Conference from './Conference'
import './App.css';


const Nav = () =>{
    return(
        <nav className='nav'>
            <ul>
            <li className='linav'><NavLink to = '/'>Home </NavLink></li>
            <li className='linav'><NavLink to = '/FAQs'>FAQs </NavLink></li>
            <li className='linav'><NavLink to = '/Gallery'>Gallery </NavLink></li>
            <li className='linav'><NavLink to = '/Teams'>Teams </NavLink></li>
            <li className='linav'><NavLink to = '/Contact'>Contact Us! </NavLink></li>
            <li className='linav'><NavLink to = '/Conference'>Our Conference </NavLink></li>
            <li className='linav'><NavLink to = '/Donations/Sponsorships'>Donations/Sponsorships </NavLink></li>


            </ul>
        </nav>
    )
}

const Main =()=>(
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    <Route path='/FAQs' element={<FAQ/>}></Route>
    <Route path='/Teams' element={<Teams/>}></Route>
    <Route path='/Gallery' element={<Gallery/>}></Route>
    <Route path='/Conference' element={<Conference/>}></Route>
    <Route path='/Donations/Sponsorships' element={<Sponsor/>}></Route>
    </Routes>
)
function App(){
    return(<>
        <Nav/>
        <Main/>
        </>
    )
}
export default App