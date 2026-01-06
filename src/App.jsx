import Card from './components/Card';

function App() {
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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </main>
        </>
    );
}

export default App;
