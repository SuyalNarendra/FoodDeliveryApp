import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const Title = ()=>{
   return (
        <h1 id="title">
            <img src={require("./log.png")} className="img"/>
        </h1>
    )
}
const Imga= ()=>{
    return (
        <h1 id="title2">
        THE OLD SPICES
    </h1>
    )
}

const Header = () => {
    return(<div className="header"> 
  <Title/>
  <Imga/>
  <div className="nav-item">
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </div>

</div> )}

const Body = ()=>{
    return <div>Body</div>
}

const Footer = ()=>{
    return <div>Footer</div>
}

const AppLayout =() => {
    return(
        <div>
        <Header/>
        <Body/>
        <Footer/>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);