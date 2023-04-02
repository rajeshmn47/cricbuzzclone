import Footer from "./footer";
import img from "./images/vision.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetMatchesQuery, useGetMatchDetailsQuery } from "./cricbuzzApi";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();
  const [matches, setMatches] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://unofficial-cricbuzz.p.rapidapi.com/matches/list`,
      params: { matchState: "live" },
      headers: {
        "X-RapidAPI-Host": "unofficial-cricbuzz.p.rapidapi.com",
        "X-RapidAPI-Key": "3ddef92f6emsh8301b1a8e1fd478p15bb8bjsnd0bb5446cadc",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMatches(response.data.typeMatches);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div className="home">
        <div className="topbar">cricbuzz</div>
        <div className="belowtopbar">
          <p style={{ color: "#2971B5", fontWeight: "600" }}>
            Indian Premier League 2022
          </p>
          <p style={{ opacity: "0.5", fontWeight: "600" }}>
            All the updates from IPL 2022
          </p>
        </div>
        <div className="matches">Matches</div>
        <div className="matchescontainer">
          {matches ? (
            <div>
              {matches.map((m, index) => (
                <>
                  <div
                    className="match"
                    onClick={() =>
                      navigate(
                        `/matchdetail/${m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo.matchId}`
                      )
                    }
                  >
                    <p>{m.seriesAdWrapper[0].seriesMatches.seriesName}</p>
                    <h1>
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .team1.teamName
                      }{" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team1Score?.inngs1?.runs
                      }
                      /
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team1Score?.inngs1?.wickets
                      }
                    </h1>
                    <h1>
                      {" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .team2.teamName
                      }{" "}
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team2Score?.inngs1?.runs
                      }
                      /
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchScore
                          ?.team2Score?.inngs1?.wickets
                      }
                    </h1>
                    <h2>
                      {
                        m.seriesAdWrapper[0].seriesMatches.matches[0].matchInfo
                          .status
                      }
                    </h2>
                  </div>
                </>
              ))}
              <button className="more">More Matches</button>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px 0",
              }}
            >
              <CircularProgress />
            </div>
          )}
        </div>
        <div className="matches">Cricket Videos</div>
        <div className="videoscontainer">
          <div className="video">
            <img src={img} alt="" width="80" />
            <h2>Abdevilliers Smashed a great knock</h2>
          </div>
          <div className="video">
            <img src={img} alt="" width="80" />
            <h2>Abdevilliers Smashed a great knock</h2>
          </div>
        </div>
        <button className="more">More Videos</button>
        <div className="matches">IPL 2022 Stats</div>
        <div style={{ display: "flex", padding: "1vmax" }}>
          <div style={{ width: "20%" }}>
            <h2 style={{ opacity: "0.5", fontSize: "16px" }}>Most Runs</h2>
            <h2 style={{ opacity: "0.5", fontSize: "16px" }}>Most Wickets</h2>
          </div>
          <div style={{ width: "29%" }}>
            <h2 style={{ fontSize: "16px", color: "#4A90E2" }}>
              Faf du plessis{" "}
              <span style={{ fontSize: "12px", color: "#113D59" }}>
                92 runs
              </span>
            </h2>
            <h2 style={{ fontSize: "16px", color: "#4A90E2" }}>
              Wanindhu Hasaranga{" "}
              <span style={{ fontSize: "12px", color: "#113D59" }}>
                5 Wickets
              </span>
            </h2>
          </div>
        </div>
        <div className="matches">Top Stories</div>
        <button className="more">More Stories</button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
