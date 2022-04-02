import Footer from "./footer"
import img from './images/vision.png'


export const Home=()=>{
    return(
        <>
<div className='home'>
  <div className='topbar'>cricbuzz</div>
  <div className='belowtopbar'>
<p style={{color:'#2971B5',fontWeight:'600'}}>Indian Premier League 2022</p>
<p style={{opacity:'0.5',fontWeight:'600'}}>All the updates from IPL 2022</p>
  </div>
  <div className='matches'>
Matches
  </div>
  <div className='matchescontainer'>
<div className='match'>
  <p>7th match Indian Premier League 2022</p>
  <h1>LSG 211/4 (19.3)</h1>
  <h1>LSG 211/4 (19.3)</h1>
  <h2>Lucknow Super giants won by 6 wkts</h2>
</div>
  </div>
  <button className='more'>More Matches</button>
  <div className='matches'>
Cricket Videos
  </div>
  <div className='videoscontainer'>
  <div className='video'>
    <img src={img} alt='' width='80'/>
    <h2>Abdevilliers Smashed a great knock</h2>
  </div>
  <div className='video'>
    <img src={img} alt='' width='80'/>
    <h2>Abdevilliers Smashed a great knock</h2>
  </div>
  </div>
  <button className='more'>More Videos</button>
  <div className='matches'>
IPL 2022 Stats
  </div>
  <div style={{display:'flex',padding:'1vmax'}}>
    <div style={{width:'20%'}}>
<h2 style={{opacity:'0.5',fontSize:'16px'}}>Most Runs</h2>
<h2 style={{opacity:'0.5',fontSize:'16px'}}>Most Wickets</h2>
    </div>
    <div style={{width:'29%'}}>
    <h2 style={{fontSize:'16px',color:'#4A90E2'}}>Faf du plessis <span style={{fontSize:'12px',color:"#113D59"}}>92 runs</span></h2>
<h2 style={{fontSize:'16px',color:"#4A90E2"}}>Wanindhu Hasaranga <span style={{fontSize:'12px',color:"#113D59"}}>5 Wickets</span></h2>
    </div>
  </div>
  <div className='matches'>
Top Stories
  </div>
  <button className='more'>More Stories</button>
  </div>
  <Footer/>

        </>
    )
}

export default Home