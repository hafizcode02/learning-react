import React, { useState } from "react";

const Square = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="w-16 h-16 shadow-md rounded-lg transition bg-gray-300 flex items-center justify-center text-2xl font-bold"
      {...props} // Destructuring the given proops.
    >
      {props.children}
    </button>
  );
};

function Game() {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  ); // 9 squares, initially empty
  const [isXNext, setIsXNext] = useState(true); // Determines if it's X's turn
  const winner = calculateWinner(squares); // Check if there's a winner

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // Prevent further moves if square is filled or game is over

    const nextSquares = squares.slice(); // Create a copy of the squares
    nextSquares[index] = isXNext ? "X" : "O"; // Update the clicked square
    setSquares(nextSquares); // Update state
    setIsXNext(!isXNext); // Switch turns
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, index) => (
          <Square key={index} onClick={() => handleClick(index)}>
            {square}
          </Square>
        ))}
      </div>
      <div className="mt-4 text-xl">
        {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? "X" : "O"}`}
      </div>
    </div>
  );
}

function calculateWinner(squares: Array<string | null>) {
  const lines = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6], // Diagonal top-right to bottom-left
  ];

  for (const line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // Return the winner (X or O)
    }
  }
  return null; // No winner yet
}

export default Game;
