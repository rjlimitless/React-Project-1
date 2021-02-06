import React from 'react'
import "../Playlist.css"

import FallInMyArms from "../songs/FallInMyArms.mp3"
import AllAlone from "../songs/AllAlone.mp3"
import PutMeDown from "../songs/PutMeDown.mp3"
import Anxiety from "../songs/Anxiety.mp3"
import Burn from "../songs/Burn.mp3"
import Deprived from "../songs/Deprived.mp3"
import Summer from "../songs/RemindMeOfTheSummer.mp3"
import ElectricChair from "../songs/ElectricChair.mp3"
import Abyss from "../songs/Abyss.mp3"
import AnotherWay from "../songs/AnotherWay.mp3"
import BadEnergy from "../songs/BadEnergy.mp3"
import BeenMyself from "../songs/BeenMyself.mp3"




    function getTime(time) {
        if (!isNaN(time)) {
          return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
          );
        }
      }

    class SadPlaylist extends React.Component {

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
                title: "Fall In My Arms",
                url: ""
            },
            {
                id: 2,
                title: "All Alone",
                url: ""
            
            },
            {
                id: 3,
                title: "Put Me Down",
                url: ""
                
            },
            {
                id: 4,
                title: "Anxiety",
                url: ""
            },
            {
                id: 5,
                title: "Burn",
                url: ""
                
            },
            {
                id: 6,
                title: "Deprived",
                url: ""
                
            },
            {
                id: 7,
                title: "Summer",
                url: ""
                
            },
            {
                id: 8,
                title: "Electric Chair",
                url: ""
                
            },
            {
                id: 9,
                title: "Abyss",
                url: ""
            },
            {
                id: 10,
                title: "Another Way",
                url: ""
            },
            {
              id: 11,
              title: "Bad Energy",
              url: ""
            },
            {
              id: 12,
              title: "Been Myself",
              url: ""
            }
            ].map(item => {
            return (
                <div className="ui list">
                <div className="item">
                    <div class="content">
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
                    <div className="current-song">
                    ~{this.state.currentSong}~
                    </div>) : null}
            

            <div className="header"></div>
                <div className="App">
                <div className="ui card main-container">
                    <div className="info-container">

                {this.state.music === "paused" ? (
                    <div className="current-song">
                    </div>) : null}

                {this.state.music === "playing" ||
                this.state.music === "paused" ? (
                    <div className="song-time">
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
        case "Fall In My Arms":
          track = FallInMyArms;
          break;
        case "All Alone":
          track = AllAlone;
          break;
        case "Put Me Down":
          track = PutMeDown;
          break;
        case "Anxiety":
          track = Anxiety;
          break;
        case "Burn":
          track = Burn;
          break;
        case "Deprived":
          track = Deprived;
          break;
        case "Summer":
          track = Summer;
          break;
        case "Electric Chair":
          track = ElectricChair;
          break;
        case "Abyss":
          track = Abyss;
          break;
        case "Another Way":
          track = AnotherWay;
          break;
        case "Bad Energy":
          track = BadEnergy;
          break;
        case "Been Myself":
          track = BeenMyself;
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

export default SadPlaylist