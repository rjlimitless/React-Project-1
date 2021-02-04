import React, { useState } from 'react'
import '../App.css'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'

//import react-h5-audio-player
import 'react-h5-audio-player/lib/styles.css';

//Chill
import TheLight from "../songs/TheLight.mp3"
import RemindMeOfTheSummer from "../songs/RemindMeOfTheSummer.mp3"
import OnYourMind from "../songs/OnYourMind.mp3"
import CaliGirl from "../songs/CaliGirl.mp3"
import PlayForKeeps from "../songs/PlayForKeeps.mp3"
import Rental from "../songs/Rental.mp3"


//Sad
import FallInMyArms from "../songs/FallInMyArms.mp3"
import AllAlone from "../songs/AllAlone.mp3"
import Anxiety from "../songs/Anxiety.mp3"
import Burn from "../songs/Burn.mp3"
import Deprived from "../songs/Deprived.mp3"
import BlueShit from "../songs/BlueShit.mp3"
import ElectricChair from "../songs/ElectricChair.mp3"



//Fire
import HateHerFriends from "../songs/HateHerFriends.mp3"
import Triple9 from "../songs/Triple9.mp3"
import SorryMom from "../songs/SorryMom.mp3"
import Tempted from "../songs/Tempted.mp3"
import MrMiyagi from "../songs/MrMiyagi.mp3"
import PurpleMoncler from "../songs/PurpleMoncler.mp3"




//Freestyle
import Freestyle1 from "../songs/Freestyle1.mp3"
import Freestyle2 from "../songs/Freestyle2.mp3"
import Freestyle3 from "../songs/Freestyle3.mp3"
import Freestyle4 from "../songs/Freestyle4.mp3"
import Freestyle5 from "../songs/Freestyle5.mp3"
import Freestyle6 from "../songs/Freestyle6.mp3"
import Freestyle7 from "../songs/Freestyle7.mp3"
import Freestyle8 from "../songs/Freestyle8.mp3"













export default function Albums() {

    const [isPlaylist1open, setPlaylist1open] = useState(false)
    const [isPlaylist2open, setPlaylist2open] = useState(false)
    const [isPlaylist3open, setPlaylist3open] = useState(false)
    const [isPlaylist4open, setPlaylist4open] = useState(false)
    
    return (

<> 

{/* Chill Playlist */}

            <div className= {isPlaylist1open ? 'showplaylist1' : ''}>

                <button id='playlist-btn' className={isPlaylist1open ? '' : 'hide'}
                                onClick={() => setPlaylist1open(!isPlaylist1open)}>
                                X</button>

                   <li className={isPlaylist1open ? '' : 'hide'}>










                    <ul><div id={'audioplayer1'}>
                            <AudioPlayer

                                src={TheLight}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                      <div>The Light</div>, 
                                      RHAP_UI.ADDITIONAL_CONTROLS,
                                      RHAP_UI.MAIN_CONTROLS,
                                      RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>






                    <ul><div className={'audioplayer'}>
                            <AudioPlayer

                                src={RemindMeOfTheSummer}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                      <div>Remind Me Of The Summer</div>, 

                                      RHAP_UI.ADDITIONAL_CONTROLS,
                                      RHAP_UI.MAIN_CONTROLS,
                                      RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>






                    <ul><div className={'audioplayer'}>
                            <AudioPlayer

                                src={OnYourMind}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                    <div>On Your Mind</div>, 

                                    RHAP_UI.ADDITIONAL_CONTROLS,
                                    RHAP_UI.MAIN_CONTROLS,
                                    RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>




                    <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={CaliGirl}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                    <div>Cali Girl</div>, 

                                    RHAP_UI.ADDITIONAL_CONTROLS,
                                    RHAP_UI.MAIN_CONTROLS,
                                    RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>






                    <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={PlayForKeeps}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                    <div>Play For Keeps</div>, 

                                    RHAP_UI.ADDITIONAL_CONTROLS,
                                    RHAP_UI.MAIN_CONTROLS,
                                    RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>







                    <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={Rental}

                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}

                                customControlsSection={
                                    [
                                    <div>Rental</div>, 

                                    RHAP_UI.ADDITIONAL_CONTROLS,
                                    RHAP_UI.MAIN_CONTROLS,
                                    RHAP_UI.VOLUME_CONTROLS,
                                    ]
                                }
                                />
                        </div>
                        </ul>







                    </li>
                    </div>








{/* Sad Playlist */}

                <div className={isPlaylist2open ? 'showplaylist2' : ''}>

                    <button id='playlist-btn2' className={isPlaylist2open ? '' : 'hide'}
                        onClick={() => setPlaylist2open(!isPlaylist2open)}>
                        X</button>

                        <li className={isPlaylist2open ? '' : 'hide'}>





                            <ul><div id={'audioplayer2'}>
                                <AudioPlayer

                                src={FallInMyArms}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Fall In My Arms</div>, 
                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>




                            <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={AllAlone}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>All Alone</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>

                        


                            <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={Anxiety}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Anxiety</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>






                            <ul><div className={'audioplayer'}>              
                                <AudioPlayer

                                src={Burn}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Burn</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>







                            <ul><div className={'audioplayer'}>              
                                <AudioPlayer

                                src={Deprived}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Deprived</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>




                        

                            <ul><div className={'audioplayer'}>
                                <AudioPlayer

                                src={BlueShit}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Blue Shit</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>




                            <ul><div className={'audioplayer'}>              
                                <AudioPlayer

                                src={ElectricChair}
                                autoPlay={false}
                                layout="horizontal"
                                showJumpControls={false}
                                customVolumeControls={[]}
                                customAdditionalControls={[]}
                                showFilledProgress={false}
                                customControlsSection={
                                        [
                                        <div>Electric Chair</div>, 

                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                        RHAP_UI.MAIN_CONTROLS,
                                        RHAP_UI.VOLUME_CONTROLS,
                                        ]
                                    }
                                />
                            </div>
                            </ul>








                        </li>   
                        </div>

                <div className='btn-container'>
                <button 
                    className="btn album-cover-1"
                    onClick={() => setPlaylist1open(!isPlaylist1open)}
                    
                    >Chill
                </button>
                
                <button 
                    className="btn album-cover-2"
                    onClick={() => setPlaylist2open(!isPlaylist2open)}
                        
                    >Sad
                </button>
            </div>






































































{/* Fire Playlist */}


                                    <div className= {isPlaylist3open ? 'showplaylist3' : ''}>

                                    <button id='playlist-btn3' className={isPlaylist3open ? '' : 'hide'}
                                                    onClick={() => setPlaylist3open(!isPlaylist3open)}>
                                                    X</button>

                                    <li className={isPlaylist3open ? '' : 'hide'}>







                                        <ul><div id={'audioplayer3'}>
                                                <AudioPlayer

                                                    src={HateHerFriends}

                                                    autoPlay={false}
                                                    layout="horizontal"
                                                    showJumpControls={false}
                                                    customVolumeControls={[]}
                                                    customAdditionalControls={[]}
                                                    showFilledProgress={false}

                                                    customControlsSection={
                                                        [
                                                        <div>Hate Her Friends</div>, 
                                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                                        RHAP_UI.MAIN_CONTROLS,
                                                        RHAP_UI.VOLUME_CONTROLS,
                                                        ]
                                                    }
                                                    />
                                            </div>
                                            </ul>






                                        <ul><div className={'audioplayer'}>
                                                <AudioPlayer
                                                    src={Triple9}

                                                    autoPlay={false}
                                                    layout="horizontal"
                                                    showJumpControls={false}
                                                    customVolumeControls={[]}
                                                    customAdditionalControls={[]}
                                                    showFilledProgress={false}

                                                    customControlsSection={
                                                        [
                                                        <div>Triple 9</div>, 

                                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                                        RHAP_UI.MAIN_CONTROLS,
                                                        RHAP_UI.VOLUME_CONTROLS,
                                                        ]
                                                    }
                                                    />
                                                </div>
                                                </ul>








                                        <ul><div className={'audioplayer'}>
                                                <AudioPlayer

                                                    src={Tempted}

                                                    autoPlay={false}
                                                    layout="horizontal"
                                                    showJumpControls={false}
                                                    customVolumeControls={[]}
                                                    customAdditionalControls={[]}
                                                    showFilledProgress={false}

                                                    customControlsSection={
                                                        [
                                                        <div>Tempted</div>, 

                                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                                        RHAP_UI.MAIN_CONTROLS,
                                                        RHAP_UI.VOLUME_CONTROLS,
                                                        ]
                                                    }
                                                    />
                                            </div>
                                            </ul>








                                        <ul><div className={'audioplayer'}>
                                                    <AudioPlayer

                                                    src={SorryMom}

                                                    autoPlay={false}
                                                    layout="horizontal"
                                                    showJumpControls={false}
                                                    customVolumeControls={[]}
                                                    customAdditionalControls={[]}
                                                    showFilledProgress={false}

                                                    customControlsSection={
                                                        [
                                                        <div>Sorry Mom</div>, 

                                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                                        RHAP_UI.MAIN_CONTROLS,
                                                        RHAP_UI.VOLUME_CONTROLS,
                                                        ]
                                                    }
                                                    />

                                            </div>
                                            </ul>










                                            <ul><div className={'audioplayer'}>
                                                    <AudioPlayer

                                                    src={MrMiyagi}

                                                    autoPlay={false}
                                                    layout="horizontal"
                                                    showJumpControls={false}
                                                    customVolumeControls={[]}
                                                    customAdditionalControls={[]}
                                                    showFilledProgress={false}

                                                    customControlsSection={
                                                        [
                                                        <div>Mr Miyagi</div>, 

                                                        RHAP_UI.ADDITIONAL_CONTROLS,
                                                        RHAP_UI.MAIN_CONTROLS,
                                                        RHAP_UI.VOLUME_CONTROLS,
                                                        ]
                                                    }
                                                    />

                                            </div>
                                            </ul>










                                            <ul><div className={'audioplayer'}>
                                            
                                            <AudioPlayer

                                            src={PurpleMoncler}

                                            autoPlay={false}
                                            layout="horizontal"
                                            showJumpControls={false}
                                            customVolumeControls={[]}
                                            customAdditionalControls={[]}
                                            showFilledProgress={false}

                                            customControlsSection={
                                                [
                                                <div>Purple Moncler</div>, 

                                                RHAP_UI.ADDITIONAL_CONTROLS,
                                                RHAP_UI.MAIN_CONTROLS,
                                                RHAP_UI.VOLUME_CONTROLS,
                                                ]
                                            }
                                            />
                                        </div>
                                        </ul>




    </li>
    
</div>








{/* Freestyle Playlist */}

<div className={isPlaylist4open ? 'showplaylist4' : ''}>

    <button id='playlist-btn4' className={isPlaylist4open ? '' : 'hide'}
        onClick={() => setPlaylist4open(!isPlaylist4open)}>
        X</button>

        <li className={isPlaylist4open ? '' : 'hide'}>








            <ul><div id={'audioplayer4'}>
                <AudioPlayer

                src={Freestyle1}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 1</div>, 
                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
        </div>
        </ul>









            <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle2}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 2</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />

            </div>
            </ul>







            <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle3}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 3</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />

            </div>
            </ul>









            <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle4}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 4</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
                </div>
                </ul>







                <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle5}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 5</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
                </div>
                </ul>
                            






                
                <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle6}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 6</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
                </div>
                </ul>
        






                <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle7}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 7</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
                </div>
                </ul>










                <ul><div className={'audioplayer'}>
                <AudioPlayer

                src={Freestyle8}
                autoPlay={false}
                layout="horizontal"
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                showFilledProgress={false}
                customControlsSection={
                        [
                        <div>Freestyle 8</div>, 

                        RHAP_UI.ADDITIONAL_CONTROLS,
                        RHAP_UI.MAIN_CONTROLS,
                        RHAP_UI.VOLUME_CONTROLS,
                        ]
                    }
                />
                </div>
                </ul>



        </li>   
</div>






            <div className='btn-container'>
                <button className="btn album-cover-3"
                        onClick={() => setPlaylist3open(!isPlaylist3open)}
                        >Fire</button>

                <button className="btn album-cover-4"
                        onClick={() => setPlaylist4open(!isPlaylist4open)}
                        >Freestyle</button>
            </div>
    
    
    
    
    
    
    
    
    
    

</>
    )
}
