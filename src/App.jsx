import { ClipLoader } from 'react-spinners';
import Card from './components/Card';
import dbzNameSrc from './assets/dragon-ball-z-name.png';
import useGameLogic from './hooks/useGameLogic';

function App() {
    const {
        data,
        isloading,
        error,
        score,
        bestScore,
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
                        <Card
                            {...item}
                            key={item.id}
                            onClick={() => {
                                checkUserChoice(item.id);
                            }}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}

export default App;
