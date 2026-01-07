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

    function newCharacterList() {
        const newPageNumber = pageNumber > 3 ? 1 : pageNumber + 1;
        setPageNumber(newPageNumber);
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
                setData(shuffle(res.items));
            } catch (error) {
                setError(error);
            }
            setIsLoading(false);
        }

        fetchData();
    }, [pageNumber]);

    return {
        score,
        bestScore,
        numberOfCharacters,
        data,
        isloading,
        error,
        newCharacterList,
        checkUserChoice,
    };
}

export default useGameLogic;
