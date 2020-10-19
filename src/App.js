import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Card from './components/Card/Card';
import Data from './components/Card/Data';


 function App(){
    return(
    
    <>
   <div className="header">
  <a href="/" className="logo">React HelpDesk</a>
  <ul className="menu">
    <li><a href="/"><span>Home</span></a></li>
    <li><a href="/"><span>Tutorials</span></a></li>
    <li><a href="/"><span>Articles</span></a></li>
    <li><a href="/"><span>About me</span></a></li>
    <li><a href="/"><span>Contact</span></a></li>
  </ul>
</div>

    
    <Card
        img={Data[0].img}
        name={Data[0].name}
        link={Data[0].link}
    
    />
    <Card
         img={Data[1].img}
         name={Data[1].name}
         link={Data[1].link}
    
    />
    <Card
    img={Data[2].img}
    name={Data[2].name}
    link={Data[2].link}/>
    
    <Card
    img={Data[3].img}
    name={Data[3].name}
    link={Data[3].link}/>

<Card
    img={Data[4].img}
    name={Data[4].name}
    link={Data[4].link}/>
    
    
    
    
    
    
    
    
    </>
        
        ); 

    }


export default App;