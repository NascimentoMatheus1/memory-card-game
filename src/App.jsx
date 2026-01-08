import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import Card from './components/Card';
import BackCard from './components/BackCard';
import useGameLogic from './hooks/useGameLogic';
import dbzNameSrc from './assets/images/dragon-ball-z-name.png';
import flipAudioSrc from './assets/audio/flipcard.mp3';
import soundtrackAudioSrc from './assets/audio/dbz-soundtrack.mp3';
import musicNoteSrc from './assets/svg/music-note.svg';
import musicNoteSlashSrc from './assets/svg/music-note-slash.svg';

function App() {
    const flipCardAudio = new Audio(flipAudioSrc);
    // const soundtrackAudio = new Audio(soundtrackAudioSrc);
    const [soundtrack, setSoundtrack] = useState(new Audio(soundtrackAudioSrc));
    const [isSoundtrackOn, setIsSoundTrackOn] = useState(false);

    const {
        data,
        isloading,
        error,
        score,
        bestScore,
        isFlipped,
        numberOfCharacters,
        checkUserChoice,
        newCharacterList,
    } = useGameLogic();

    if (isloading)
        return (
            <div className="loader-container">
                <ClipLoader
                    color="#36D7B7"
                    size={50}
                    aria-label="Loading Spinner"
                />
            </div>
        );

    if (error) {
        alert(error);
    }

    function playSoundtrack() {
        if (soundtrack.paused) {
            soundtrack.play();
            soundtrack.loop = true;
        } else {
            soundtrack.pause();
        }

        setIsSoundTrackOn(!isSoundtrackOn);
    }

    return (
        <>
            <header>
                <div>
                    <div className="game-title">
                        <img src={dbzNameSrc} alt="Dragon ball logo" />
                        <p>
                            <span className="game-title-yellow">Memory</span>{' '}
                            <span className="game-title-red">Game</span>
                        </p>
                    </div>
                </div>
                <div className="scores-container">
                    <p className="score">
                        Score: {score} / {numberOfCharacters}
                    </p>
                    <p className="best-score">Best Score: {bestScore}</p>
                </div>
            </header>
            <main>
                <div className="info-container">
                    <p>
                        Get points by clicking on an image but don't click on
                        any more than once!
                    </p>
                    <button onClick={newCharacterList}>New Characters</button>
                </div>

                <div className="board">
                    {data.map((item) => (
                        <div className="card-container">
                            <div
                                className={
                                    isFlipped ? 'card flip-animation' : 'card'
                                }
                            >
                                <BackCard />
                                <Card
                                    {...item}
                                    key={item.id}
                                    onClick={() => {
                                        flipCardAudio.play();
                                        checkUserChoice(item.id);
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <button className="soundtrack-btn" onClick={playSoundtrack}>
                <img
                    src={isSoundtrackOn ? musicNoteSrc : musicNoteSlashSrc}
                    alt="music note icon"
                />
            </button>
        </>
    );
}

export default App;
