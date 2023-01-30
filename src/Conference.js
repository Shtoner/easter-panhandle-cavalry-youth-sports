import Logo from './image0.png'
import pic1 from './conference/1.PNG'
import pic2 from './conference/2.PNG'
import pic3 from './conference/3.PNG'
import pic4 from './conference/4.PNG'
import pic5 from './conference/5.PNG'
import pic6 from './conference/6.PNG'
import pic7 from './conference/7.PNG'
import pic8 from './conference/8.PNG'
import pic9 from './conference/9.PNG'
import pic10 from './conference/10.PNG'
import pic11 from './conference/11.PNG'





export default function Conference(){
    return(
        <div className='App'>
        <img src={Logo} className='logo' alt="logo" />

            <header className="App-header">
<img src={pic1} className='App-header2'/>
<h3 className='brandname'>Dmv Hammers-Aldie, VA</h3>
<img src={pic2} className='App-header2'/>
<h3 className='brandname'>Aim High Panthers-Centreville, VA</h3>
<img src={pic3} className='App-header2'/>
<h3 className='brandname'></h3>
<img src={pic4} className='App-header2'/>
<h3 className='brandname'>Virginia Knights-Stafford, VA</h3>
<img src={pic5} className='App-header2'/>
<h3 className='brandname'>Virginia Jags-Fredericksburg, VA</h3>
<img src={pic6} className='App-header2'/>
<h3 className='brandname'>Spotsy Cougars-Spotslyvania, VA</h3>
<img src={pic7} className='App-header2'/>
<h3 className='brandname'>South County Colts-Lorton, VA</h3>
<img src={pic8} className='App-header2'/>
<h3 className='brandname'>LoCo War Eagles-Purcelville,VA</h3>
<img src={pic9} className='App-header2'/>
<h3 className='brandname'>Common Wealth Warriors-Manasses, VA</h3>
<img src={pic10} className='App-header2'/>
<h3 className='brandname'>Alexandria Titans-Alexandria, VA</h3>
<img src={pic11} className='App-header2'/>
<h3 className='brandname'>703 United-Fairfax, VA</h3>
            </header>
        </div>
    )
}