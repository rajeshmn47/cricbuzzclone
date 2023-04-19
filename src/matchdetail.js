import { useNavigate, useParams } from "react-router-dom";
import Footer from "./footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

export const Matchdetail = () => {
  const navigate = useNavigate();
  const [commentary, setCommentary] = useState();
  const id = useParams();
  useEffect(() => {
    console.log(id.id);
    const options = {
      method: "GET",
      url: "https://unofficial-cricbuzz.p.rapidapi.com/matches/get-commentaries",
      params: { matchId: id.id },
      headers: {
        "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
        "X-RapidAPI-Key": "3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCommentary(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [id]);
  return (
    <>
      {commentary ? (
        <div style={{ minHeight: "100px" }}>
          <div className="topbar">cricbuzz</div>
          <div className="matchheader">
            <h1>{commentary?.appIndex.seoTitle}</h1>
          </div>
          <div className="score">
            <h2>{commentary?.matchHeaders.status}</h2>
            <h1>
              {
                commentary?.miniscore.inningsScores[0].inningsScore[0]
                  ?.batTeamShortName
              }
              -{commentary?.miniscore.inningsScores[0].inningsScore[0]?.runs}/
              {commentary?.miniscore.inningsScores[0].inningsScore[0]?.wickets}(
              {commentary?.miniscore.inningsScores[0].inningsScore[0]?.overs})
            </h1>
            <h1>
              {
                commentary?.miniscore.inningsScores[0]?.inningsScore[1]
                  ?.batTeamShortName
              }
              -{commentary?.miniscore.inningsScores[0]?.inningsScore[1]?.runs}/
              {commentary?.miniscore.inningsScores[0]?.inningsScore[1]?.wickets}
              ({commentary?.miniscore.inningsScores[0]?.inningsScore[1]?.overs})
            </h1>
            <p>CRR: {commentary?.miniscore?.crr}</p>
            {commentary?.matchHeaders.momPlayers.player?.length > 0 ? (
              <>
                <h5>Player of the match</h5>
                <h2>{commentary?.matchHeaders.momPlayers.player[0].name}</h2>
              </>
            ) : null}
            <div className="box">
              <div
                className="smallbox"
                onClick={() => navigate(`/scorecard/${id.id}`)}
              >
                Scorecard
              </div>
              <div className="smallbox">Refresh</div>
            </div>
          </div>
          <div className="commentaryheader">
            <h1>Commentary</h1>
          </div>
          <div>
            {commentary?.commentaryLines?.map((c) => (
              <>
                <div className="commentary">
                  <p>
                    <span className="overnum">
                      <h2>
                        {c.commentary?.overNum ? c.commentary?.overNum : null}
                      </h2>
                    </span>
                    {c?.commentary?.commtxt.replace("$", "").replace("BO", "")}
                  </p>
                </div>
              </>
            ))}
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "10px 0",
            minHeight: "40vh",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Matchdetail;
