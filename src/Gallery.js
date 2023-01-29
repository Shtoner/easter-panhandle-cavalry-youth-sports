import Logo from './image0.png'
import One from './gallery/1.jpg'
import Two from './gallery/2.jpg'
import Three from './gallery/3.jpg'
import Four from './gallery/4.JPEG'
import Five from './gallery/5.jpg'
import Six from './gallery/6.JPEG'
import Seven from './gallery/6.jpg'
import Eight from './gallery/8.JPEG'
import Nine from './gallery/9.jpg'
import Ten from './gallery/10.jpg'
import Eleven from './gallery/11.jpg'
import Twelve from './gallery/12.jpg'
import Thirteen from './gallery/13.JPEG'
import Fourteen from './gallery/14.jpg'
import Fifteen from './gallery/15.jpg'
import Sixteen from './gallery/16.JPEG'
import Seventeen from './gallery/17.jpg'
import Eighteen from './gallery/18.jpg'
import Nineteen from './gallery/19.jpg'
import Twenty from './gallery/20.jpg'
import Twentyone from './gallery/21.jpg'
import Twenty2 from './gallery/22.jpg'
import Twenty3 from './gallery/23.JPEG'
import Twenty4 from './gallery/24.JPEG'
import Twenty5 from './gallery/25.JPEG'
import Twenty6 from './gallery/26.jpg'
import Twenty7 from './gallery/27.jpg'
import Twenty8 from './gallery/28.jpg'
import Twenty9 from './gallery/29.jpg'
import Thirty from './gallery/30.jpg'
import Thirty1 from './gallery/31.JPEG'
import Thirty2 from './gallery/32.jpg'
import Thirty3 from './gallery/33.jpg'
import Thirty4 from './gallery/34.jpg'
import Thirty5 from './gallery/35.jpg'
import Thirty6 from './gallery/36.jpg'
import Thirty7 from './gallery/37.jpg'
import Thirty8 from './gallery/38.jpg'
import vid1 from './gallery/vid1.MOV'
import vid2 from './gallery/vid2.MOV'

import './Gallery.css'
import { useState } from 'react'

export default function Gallery(){
const [isBig,setIsBig] = useState(false)
function fire(e){
    if (isBig) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitCancelFullscreen();
        }
    } else {
        if (e.target.requestFullscreen) {
            e.target.requestFullscreen();
        } else if (e.target.webkitRequestFullscreen) {
            e.target.webkitRequestFullscreen();
        }
    }
    setIsBig(!isBig)
}
    return(
        <div className='App'>
        <img src={Logo} className='logo' alt="logo" />
            <header className='App-header2'>
                
        <video className='App-logo3'src={vid2}controls></video>
        <video className='App-logo2' src={vid1}controls></video>

        <img onClick={fire}className='App-logo2' src={One}/>
        <img onMouseDown={fire}className='App-logo2'src={Two}/>
        <img onMouseDown={fire}className='App-logo2'src={Three}></img>
        <img onMouseDown={fire}className='App-logo2'src={Four}></img>
        <img onMouseDown={fire}src={Five} className='App-logo2'></img>
        <img onMouseDown={fire}src={Six} className='App-logo2'></img>
        <img onMouseDown={fire}src={Seven}className='App-logo2'></img>
        <img onMouseDown={fire}src={Eight}className='App-logo2'></img>
        <img onMouseDown={fire}className='App-logo2'src={Nine}></img>
        <img onMouseDown={fire}className='App-logo2'src={Ten}></img>
        <img onMouseDown={fire}className='App-logo2'src={Eleven}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twelve}></img>
        <img onMouseDown={fire}className='App-logo2'src={Thirteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Fourteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Fifteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Sixteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Seventeen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Eighteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Nineteen}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twentyone}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty2}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty3}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty4}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty5}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty6}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty7}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty8}></img>
        <img onMouseDown={fire}className='App-logo2'src={Twenty9}></img>
        <img onMouseDown={fire}className='App-logo2'src={Thirty}></img>
        <img onMouseDown={fire}className='App-logo2'src={Thirty1}></img>
        <img onMouseDown={fire}className='App-logo2'src={Thirty2}></img>
        <img onMouseDown={fire}className='App-logo2'src={Thirty3}></img>
        <img onClick={fire}className='App-logo2'src={Thirty4}></img>
        <img onClick={fire}className='App-logo2'src={Thirty5}></img>
        <img onClick={fire}className='App-logo2'src={Thirty6}></img>
        <img onClick={fire}className='App-logo2'src={Thirty7}></img>
        <img onClick={fire}className='App-logo2'src={Thirty8}></img>


            </header>
            </div>
    )}

