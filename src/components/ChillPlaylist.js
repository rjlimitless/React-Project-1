import React from 'react'
import "../Playlist.css"


import TheLight from "../songs/TheLight.mp3"
import Starstruck from "../songs/Starstruck.mp3"
import RemindMeOfTheSummer from "../songs/RemindMeOfTheSummer.mp3"
import OnYourMind from "../songs/OnYourMind.mp3"
import CaliGirl from "../songs/CaliGirl.mp3"
import PlayForKeeps from "../songs/PlayForKeeps.mp3"
import Rental from "../songs/Rental.mp3"
import TwentyFour from "../songs/24.mp3"
import AnyOtherWay from "../songs/AnyOtherWay.mp3"




    function getTime(time) {
        if (!isNaN(time)) {
          return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
          );
        }
      }

    class ChillPlaylist extends React.Component {

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
                title: "The Light",
                url: ""
            },
            {
                id: 2,
                title: "Starstruck",
                url: ""
            
            },
            {
                id: 3,
                title: "On Your Mind",
                url: ""
            },
            {
                id: 4,
                title: "Cali Girl",
                url: ""
                
            },
            {
                id: 5,
                title: "Play For Keeps",
                url: ""
                
            },
            {
                id: 6,
                title: "Rental",
                url: ""
                
            },
            {
              id: 7,
              title: "Twenty Four",
              url: ""
            },
            {
              id: 8,
              title: "Any Other Way",
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
        case "The Light":
          track = TheLight;
          break;
        case "Starstruck":
          track = Starstruck;
          break;
        case "On Your Mind":
          track = OnYourMind;
          break;
        case "Cali Girl":
          track = CaliGirl;
          break;
        case "Play For Keeps":
          track = PlayForKeeps;
          break;
        case "Rental":
          track = Rental;
          break;
        case "Twenty Four":
          track = TwentyFour;
          break;
        case "Any Other Way":
          track = AnyOtherWay;
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

export default ChillPlaylist