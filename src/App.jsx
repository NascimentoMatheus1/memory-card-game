import { useState, useEffect } from 'react';
import Card from './components/Card';

function App() {
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
                    <p className="score">Score: 0</p>
                    <p className="best-score">Best Score: 0</p>
                </div>
            </header>
            <main>
                <p>
                    Get points by clicking on an image but don't click on any
                    more than once!
                </p>
                <div className="board">
                    {data.map((item) => (
                        <Card {...item} key={item.id} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default App;
