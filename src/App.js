import './App.css';
import {Fragment} from 'react'
import {First} from './challenge_2.js'
import {Second} from './challenge_2.js'
import {Third} from './challenge_2.js'
import {Btn} from './challenge_2.js'


function App() {
  return (
    <Fragment>
      <First/>
      <Second/>
      <Third/>
      <Btn/>
    </Fragment>
    
  // <Fragment>
  //     <h1>I am heading one...from first component</h1>
  //     <h2>I am heading two...from second component</h2>
  //     <h3>I am heading three...from third component</h3>
  //     <button>Click me</button>
  // </Fragment>

  );
}

export default App;
