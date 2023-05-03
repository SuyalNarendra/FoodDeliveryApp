const Title = ()=>{
    return (
         <h1 id="title">
             <img src={require("../log.png")} className="img"/>
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

 export default Header;