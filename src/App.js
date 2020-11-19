import React from 'react';
//Components
import MyNavBar from "./components/my-navbar/mynavbar.component";
import MyCarousal from "./components/my-carousel/my-carousel.component"
import TitleMessage from './components/title-message/title-message.component'

import './App.css';


const App = () => {
  return(<div>
    <MyNavBar/>
    <MyCarousal/>
    <TitleMessage/>
</div>)
  
  
}

export default App;
