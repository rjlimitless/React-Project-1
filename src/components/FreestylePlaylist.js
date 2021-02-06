import React from 'react'
import "../Playlist.css"

import Freestyle1 from "../songs/Freestyle1.mp3"
import Freestyle2 from "../songs/Freestyle2.mp3"
import Freestyle3 from "../songs/Freestyle3.mp3"
import Freestyle4 from "../songs/Freestyle4.mp3"
import Freestyle5 from "../songs/Freestyle5.mp3"
import Freestyle6 from "../songs/Freestyle6.mp3"
import Freestyle7 from "../songs/Freestyle7.mp3"
import Freestyle8 from "../songs/Freestyle8.mp3"




    function getTime(time) {
        if (!isNaN(time)) {
          return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
          );
        }
      }

    class FreestylePlaylist extends React.Component {

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
                title: "Freestyle 1",
                url: ""
            },
            {
                id: 2,
                title: "Freestyle 2",
                url: ""
            
            },
            {
                id: 3,
                title: "Freestyle 3",
                url: ""
                
            },
            {
                id: 4,
                title: "Freestyle 4",
                url: ""
            },
            {
                id: 5,
                title: "Freestyle 5",
                url: ""
                
            },
            {
                id: 6,
                title: "Freestyle 6",
                url: ""
                
            },
            {
                id: 7,
                title: "Freestyle 7",
                url: ""
                
            },
            {
              id: 8,
              title: "Freestyle 8",
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
        case "Freestyle 1":
          track = Freestyle1;
          break;
        case "Freestyle 2":
          track = Freestyle2;
          break;
        case "Freestyle 3":
          track = Freestyle3;
          break;
        case "Freestyle 4":
          track = Freestyle4;
          break;
        case "Freestyle 5":
          track = Freestyle5;
          break;
        case "Freestyle 6":
          track = Freestyle6;
          break;
        case "Freestyle 7":
          track = Freestyle7;
          break;
        case "Freestyle 8":
          track = Freestyle8;
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

export default FreestylePlaylist