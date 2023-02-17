const double = (arr).map((val) => val * 2);

const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((n) => n ** 2);
    const evens = squares.filter((square) => square % 2 === 0);
    return evens;
    }