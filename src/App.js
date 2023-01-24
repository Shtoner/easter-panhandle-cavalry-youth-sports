import easterpanhancav from './easternpanhancav.jpg'
import eastercav from './easternpancav.jpg'
import './App.css';
import React,{useState} from 'react'



function App() {

  const {isBig, setisBig} = useState('true');
  function ToggleIsBig(){
    
    setisBig('false')
    console.log(isBig)
    }
  return (
    <div className="App">
        <img src={eastercav} className='logo' alt="logo" />
      <header className="App-header">
      <a href='https://www.facebook.com/groups/444599141095663'>
        <h2>Check out our Facebook page!</h2>
        </a>
        <div className='asd'>
          <h2>TRYOUTS!</h2>
        </div>
        <img onClick={ToggleIsBig}src={easterpanhancav} className="App-logo" alt="logo" />


        <div>
          <h2>FAQs</h2>
          -Eastern Panhandle Cavalry is a travel team competing in the American Youth Football league (AYF)  NOT RECREATION🚫⛔️
-Athlete must attend tryouts! (January 28, 2022) 10am/ location TBD
-ONLY 7U/8U SQUADS are participating in spring leagues. All recruitment is for 2023 Fall Season
-Whatever age the athlete is on July 31 will be the age group that athlete will play in.
-Away games are at least 1.5 hours up to 3 hours away from martinsburg. Playoffs travel distance is unlimited.
-Practice will be in Berkeley County/Martinsburg 
-unlimited weight limit league.
-our WEEKLY winter workouts are and always have been FREE!!! 
-No people are not just coming over and joining team, and staff. All parties are selected and chosen. 
-As we love to teach life lessons through football, WE the EP CAVALRY ARE ABSOLUTELY COMPETING TO WIN!
        </div>
        <div>
          <h2>Shout Out Our Sponsors!</h2>
    <ul>
      <li>Cardinal Realty Group Inc.</li>
      <li>Negley's Water and Well Drilling</li>
      <li>Johnathan Knight</li>
    </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
