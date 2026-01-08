import { useState, useEffect } from 'react';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const n = Math.floor(Math.random() * (i + 1));
        [array[i], array[n]] = [array[n], array[i]];
    }

    return array;
}

function useGameLogic() {
    const numberOfCharacters = 12;
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [choices, setChoices] = useState([]);
    const [isFlipped, setIsFlipped] = useState(false);

    function gameOver() {
        setTimeout(() => {
            alert('Game over');
            if (score > bestScore) {
                setBestScore(score);
            }
            setChoices([]);
            setScore(0);
        }, 1000);
    }

    function checkUserChoice(id) {
        setIsFlipped(true);
        setChoices((c) => [...c, id]);

        if (choices.includes(id)) {
            gameOver();
            return;
        }
        setScore((s) => s + 1);
    }

    function newCharacterList() {
        const newPageNumber = pageNumber > 3 ? 1 : pageNumber + 1;
        setPageNumber(newPageNumber);
        setChoices([]);
        setScore(0);
    }

    const [data, setData] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    useEffect(() => {
        async function fetchData() {
            const URL = `https://dragonball-api.com/api/characters?page=${pageNumber}&limit=${numberOfCharacters}`;

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
    }, [pageNumber]);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setData((d) => shuffle(d));
        }, 1000);

        return () => clearInterval(timerID);
    }, [score]);

    useEffect(() => {
        const timerID = setTimeout(() => {
            setIsFlipped(false);
        }, 1000);

        return () => clearInterval(timerID);
    }, [isFlipped]);

    return {
        score,
        bestScore,
        numberOfCharacters,
        data,
        isloading,
        error,
        isFlipped,
        newCharacterList,
        checkUserChoice,
    };
}

export default useGameLogic;
