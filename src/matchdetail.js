import { useNavigate,useParams } from "react-router-dom"
import Footer from "./footer"
import { useState,useEffect } from "react"
import axios from 'axios'

export const Matchdetail=()=>{
    const navigate=useNavigate()
    const [commentary,setCommentary]=useState()
const id=useParams()
useEffect(()=>{
    console.log(id.id)
    const options = {
        method: 'GET',
        url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-commentaries',
        params: {matchId: id.id},
        headers: {
          'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
          'X-RapidAPI-Key': '3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
          setCommentary(response.data)
      }).catch(function (error) {
          console.error(error);
      });
},[id])
    return(
<>
<div className='topbar'>cricbuzz</div>
<div className="matchheader">
    <h1>{commentary?.appIndex.seoTitle}</h1>
</div>
<div className="score">
<h2>{commentary?.matchHeaders.status}</h2>
<h1>{commentary?.miniscore.inningsScores[0].inningsScore[0].batTeamShortName}-
{commentary?.miniscore.inningsScores[0].inningsScore[0].runs}/
{commentary?.miniscore.inningsScores[0].inningsScore[0].wickets}
({commentary?.miniscore.inningsScores[0].inningsScore[0].overs})
</h1>
<h1>{commentary?.miniscore.inningsScores[0].inningsScore[1].batTeamShortName}-
{commentary?.miniscore.inningsScores[0].inningsScore[1].runs}/
{commentary?.miniscore.inningsScores[0].inningsScore[1].wickets}
({commentary?.miniscore.inningsScores[0].inningsScore[1].overs})</h1>
<p>CRR: {commentary?.miniscore.crr}</p>
<h5>Player of the match</h5>
<h4>{commentary?.matchHeaders.momPlayers.player[0].name}</h4>
<div className="box">
<div className="smallbox" onClick={()=>navigate(`/scorecard/${id.id}`)}>Scorecard</div>
<div className="smallbox">Refresh</div>
</div>
</div>
<div className="commentaryheader">
<h1>Commentary</h1>

</div>
<Footer/>
</>

    )
}

export default Matchdetail