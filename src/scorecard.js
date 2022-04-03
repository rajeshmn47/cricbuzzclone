import Footer from './footer'
import {useNavigate,useParams} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'

export const Scorecard=()=>{
const id=useParams()
const [scorecard,setScorecard]=useState()
console.log(id)
useEffect(()=>{
    const options = {
        method: 'GET',
        url: 'https://unofficial-cricbuzz.p.rapidapi.com/matches/get-scorecard',
        params: {matchId: id.id},
        headers: {
          'X-RapidAPI-Host': 'unofficial-cricbuzz.p.rapidapi.com',
          'X-RapidAPI-Key': '3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data.scorecard);
          setScorecard(response.data.scorecard)
      }).catch(function (error) {
          console.error(error);
      });
},[])
    return(
        <>
        <div className="batting">Batting</div>
        {scorecard?scorecard.map((s,index)=><>
        <div style={{padding:'1vmax'}}>{index===0?'Innings1':'Innings2'}</div>
            <table id='battingscorecard'>
            
            <tr>
                <th>
                    Player
                </th>
                <th>
                    R(B)
                </th>
                <th>
                    4s
                </th>
                <th>
                    6s
                </th>
                <th>
                    SR
                </th>
            </tr>
           {s?.batsman.map((b)=><>
            <tr>
            <td id='playername'>
                {b.name}
                </td>
                <td>
                    {b.runs}({b.balls})
                </td>
                <td>
                    {b.fours}
                </td>
                <td>
                {b.sixes}
                </td>
                <td>
                {b.strkRate}
                </td>
            </tr>
            <tr>
                <td>
                c Southee b Narine
                </td>
            </tr>
            </>)}
    </table>
    <div className="batting">Bowling</div>
        <table id='battingscorecard'>
            
            <tr>
                <th>
                    Bowler
                </th>
                <th>
                    O
                </th>
                <th>
                    E
                </th>
                <th>
                    R
                </th>
                <th>
                    W
                </th>
            </tr>
      
            {s.bowler.map((b)=><>
            <tr>
            <td id='playername'>
                {b.name}
                </td>
                <td>
                    {b.overs}
                </td>
                <td>
                    {b.economy}
                </td>
                <td>
            {b.runs}
                </td>
                <td>
                    {b.wickets}
                </td>
             
            </tr>
          </>)}
    </table>
    <div className="batting">Fall of Wickets</div>
        <table id='battingscorecard'>
            
            <tr>
              
                <th>
                 Wkt   
                </th>
                <th>
                  Runs  
                </th>
                <th>
                Ovs    
                </th>
                <th>
                  Player  
                </th>
            </tr>
      {s.fow[0].fow.map((f,index)=><>  <tr>
       
                <td>
                    {index}
                </td>
                <td>
                    {f.runs}
                </td>
                <td>
            {f.overNbr}
                </td>
                <td>
            {f.batsmanName}
                </td>
             
            </tr>
         
       </>)}
        
    </table>
        </>)
        :'loading'}
      



    <div className="batting">Match Info</div>
<div className="matchinfo">
    <div className="matchin">
<h1>PBKS playing</h1>
<p>rahesh(c),sachin,rahesh(c),sachin,rahesh(c),sachin</p>
    </div>
    <div className="matchin">
<h1>KKR playing</h1>
<p>rahesh(c),sachin,rahesh(c),sachin,rahesh(c),sachin</p>
    </div>
</div>
<Footer/>
        </>
    )
}

export default Scorecard