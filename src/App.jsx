import { useState, useEffect } from 'react';
import Card from './components/Card';

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

    const URL = 'https://dragonball-api.com/api/characters?page=1&limit=15';

    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);

            try {
                let response = await fetch(URL);
                let res = await response.json();
                setData(res.items);
            } catch (error) {
                setError(error);
            }

            setIsLoading(false);
        }

        fetchData();
    }, []);

    if (isloading) return <p>Loading...</p>;

    if (error) {
        alert(error);
    }

    return (
        <>
            <header>
                <div>
                    <h1 className="game-title">Dragon Ball Z Memory Game</h1>
                </div>
                <div className="scores-container">
                    <p className="score">Score: {score}</p>
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
