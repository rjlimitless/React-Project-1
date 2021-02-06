import React from 'react'
import "../Playlist.css"

import HateHerFriends from "../songs/HateHerFriends.mp3"
import Triple9 from "../songs/Triple9.mp3"
import SorryMom from "../songs/SorryMom.mp3"
import Tempted from "../songs/Tempted.mp3"
import MrMiyagi from "../songs/MrMiyagi.mp3"
import PointGuard from "../songs/PointGuard.mp3"
import PurpleMoncler from "../songs/PurpleMoncler.mp3"
import Six from "../songs/6.mp3"
import Nine0210 from "../songs/90210.mp3"
import Amazing from "../songs/Amazing.mp3"






    function getTime(time) {
        if (!isNaN(time)) {
          return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
          );
        }
      }

    class FirePlaylist extends React.Component {

        state = {
            currentSong: null,
            music: "stopped",
            currentTime: null,
            duration: null
          };

        render() {
            const currentTime = getTime(this.state.currentTime);
            const duration = getTime(this.state.duration);
            const playlist = [
            {
                id: 1,
                title: "Hate Her Friends",
                url: ""
            },
            {
                id: 2,
                title: "Triple 9",
                url: ""
            
            },
            {
                id: 3,
                title: "Sorry Mom",
                url: ""
                
            },
            {
                id: 4,
                title: "Tempted",
                url: ""
            },
            {
                id: 5,
                title: "Mr Miyagi",
                url: ""
                
            },
            {
                id: 6,
                title: "Point Guard",
                url: ""
                
            },
            {
                id: 7,
                title: "Purple Moncler",
                url: ""
                
            },
            {
              id: 8,
              title: "Six",
              url: ""
            },
            {
              id: 9,
              title: "90210",
              url: ""
            },
            {
              id: 10,
              title: "Amazing",
              url: ""
            }
            ].map(item => {
            return (
                <div className="ui list">
                <div className="item">
                    <div className="content">
                    <li
                        className="title"
                        key={item.id}
                        onClick={() => this.setState({ currentSong: item.title })}
                    >
                        {item.title}
                    </li>
                    </div>
                </div>
                </div>
            );
            });
        
        



    return (
        <>

            {this.state.music === "playing" ? (
                    <div className="current-song2">
                    ~{this.state.currentSong}~
                    </div>) : null}
            

            <div className="header"></div>
                <div className="App">
                <div className="ui card main-container">
                    <div className="info-container">

                {this.state.music === "paused" ? (
                    <div className="current-song2">
                    </div>) : null}

                {this.state.music === "playing" ||
                this.state.music === "paused" ? (
                    <div className="song-time2">
                    {currentTime}
                    <br></br>
                    {duration}
                    </div>
                ) : ("")}

                <div className="button-container">

                {this.state.music === "paused" && (
                    <button
                    className="play-btn"
                    onClick={() => this.setState({ music: "playing" })}
                    >
                    </button>
                )}

                {this.state.music === "playing" && (
                    <button
                    className="pause-btn"
                    onClick={() => this.setState({ music: "paused" })}
                    >
                    </button>
                )}


                </div>

                </div>

            
                

                <div className="playlist">{playlist}</div>

                <audio ref={ref => (this.music = ref)} />
            </div>
            </div>
            </>
    );
}


componentDidUpdate(prevProps, prevState) {
    if (this.state.currentSong !== prevState.currentSong) {
      let track;
      switch (this.state.currentSong) {
        case "Hate Her Friends":
          track = HateHerFriends;
          break;
        case "Triple 9":
          track = Triple9;
          break;
        case "Sorry Mom":
          track = SorryMom;
          break;
        case "Tempted":
          track = Tempted;
          break;
        case "Mr Miyagi":
          track = MrMiyagi;
          break;
        case "Point Guard":
          track = PointGuard;
          break;
        case "Purple Moncler":
          track = PurpleMoncler;
          break;
        case "Six":
          track = Six;
          break;
        case "90210":
          track = Nine0210;
          break;
        case "Amazing":
          track = Nine0210;
          break;
        default:
          break;
      }

      if (track) {
        this.music.src = track;
        this.music.play();
        this.setState({
          music: "playing"
        });
      }
    }

    if (this.state.music !== prevState.music) {
      if (this.state.music === "paused") {
        this.music.pause();
      }
      if (this.state.music === "playing" && prevState.music === "paused") {
        this.music.play();
      }
      if (this.state.music === "stop") {
        this.music.pause();
        this.currentTime = 0;
        this.setState({
          currentSong: null
        });
      }
    }
  }

  componentDidMount() {
    this.music.addEventListener("timeupdate", e => {
      this.setState({
        currentTime: e.target.currentTime,
        duration: e.target.duration
      });
    });
  }

  componentWillUnmount() {
    this.music.removeEventListener("timeupdate", () => {});
  }
}

export default FirePlaylist