import { useState, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Card from './components/Card';
import dbzNameSrc from './assets/dragon-ball-z-name.png';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }

    return array;
}

function App() {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [choices, setChoices] = useState([]);

    function gameOver() {
        alert('Game over');
        if (score > bestScore) {
            setBestScore(score);
        }
        setChoices([]);
        setScore(0);
    }

    function checkUserChoice(id) {
        setData((d) => shuffle(d));

        if (choices.includes(id)) {
            gameOver();
            return;
        }

        setChoices((c) => [...c, id]);
        setScore((s) => s + 1);
    }

    const URL = 'https://dragonball-api.com/api/characters?page=1&limit=24';

    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                let response = await fetch(URL);
                let res = await response.json();
                setData(shuffle(res.items));
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);

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
                    <p className="score">Score: {score} / 12</p>
                    <p className="best-score">Best Score: {bestScore}</p>
                </div>
            </header>
            <main>
                <p>
                    Get points by clicking on an image but don't click on any
                    more than once!
                </p>
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
