 
const style = {
    width:"90vw",
    height:'70vh',
    display:'flex',
    justifyContent:'space-around',
    marginTop:'10vh'
}

const leftArea = {
    width:'40%',
    margin:'0 auto',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    fontSize:"25px",
    textAlign:"right"
}

const rightArea = {
    borderRadius:'50%',
    opacity:'0.89',
}

const listLink = {
    listStyleType:"none",
    borderBottom:"1px solid black",
    color:'#ffa700',
    cursor:'pointer',
    padding:'0 0 2px 0'
}

const About = () => {
   return(
    <div style={style} className="aboutContainer">
        <div style={leftArea} className="leftArea"> 
         <h1 style={{textAlign:"center"}}>
            Sumit <span style={{color:'rgba(0,0,0,0.6)'}}>Bhardwaj</span> 
         </h1>
          <h4>
            <span style={{color:'rgba(0,0,0,0.6)'}}>I am a</span> React Developer. <span style={{color:'rgba(0,0,0,0.6)'}}> I am Open For Work. I just tried building it while learning in a bootcamp called Namaste React </span>
          </h4>
          <ul className="socialMedia" style={{display:'flex', gap:'20px'}}>
            <li style={listLink}><a href="https://www.linkedin.com/in/sumit-bhardwaz-53829117b/" target="new"> LinkedIn </a> </li>
            <li style={listLink}><a href="https://www.linkedin.com/in/sumit-bhardwaz-53829117b/" target="new"> Instagram </a> </li>
            <li style={listLink}><a href="https://www.linkedin.com/in/sumit-bhardwaz-53829117b/" target="new"> Github </a> </li>
          </ul>
        </div>
        <div className="rightArea">
         <img style={rightArea} src="https://avatars.githubusercontent.com/u/62645978?v=4?s=400"/>
        </div>
    </div>
   )
}
export default About