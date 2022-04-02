import Footer from './footer'

export const Scorecard=()=>{
    return(
        <>
        <div className="batting">Batting</div>
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
                <tr>
                <td id='playername'>
                        Mayank Agarwal
                    </td>
                    <td>
                        1(5)
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                    6
                    </td>
                    <td>
                        150.5
                    </td>
                </tr>
                <tr>
                    <td>
                    c Southee b Narine
                    </td>
                </tr>
                <tr>
                <td id='playername'>
                        Mayank Agarwal
                    </td>
                    <td>
                        1(5)
                    </td>
                    <td>
                        0
                    </td>
                    <td>
                    6
                    </td>
                    <td>
                        150.5
                    </td>
                </tr>
                <tr>
                    <td>
                    c Southee b Narine
                    </td>
                </tr>
            
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
                    M
                </th>
                <th>
                    R
                </th>
                <th>
                    W
                </th>
            </tr>
      
      
            <tr>
            <td id='playername'>
                    Mayank Agarwal
                </td>
                <td>
                    4
                </td>
                <td>
                    2
                </td>
                <td>
            23
                </td>
                <td>
                    4
                </td>
             
            </tr>
            <tr>
            <td id='playername'>
                    Mayank Agarwal
                </td>
                <td>
                    4
                </td>
                <td>
                    2
                </td>
                <td>
            23
                </td>
                <td>
                    4
                </td>
             
            </tr>
       
        
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
      
      
            <tr>
       
                <td>
                    1
                </td>
                <td>
                    2
                </td>
                <td>
            2.3
                </td>
                <td>
                    Sachin
                </td>
             
            </tr>
            <tr>
       
                <td>
                    2
                </td>
                <td>
                    5.3
                </td>
                <td>
            23
                </td>
                <td>
                    Sehwag
                </td>
             
            </tr>
       
        
    </table>
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