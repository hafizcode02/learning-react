import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameButton from "../components/GameButton";

function Game() {
  const [squares, setSquares] = useState<Array<string | null>>(
    Array(9).fill(null)
  ); // 9 Square, null initialized.
  const [isXNext, setIsXNext] = useState(true); // Tracks current player (X or O)
  const winner = calculateWinner(squares); // Determine the winner
  const isDraw = squares.every((square) => square !== null) && !winner; // Check if the game is a draw

  const handleClick = (index: number) => {
    if (squares[index] || winner) return; // Prevent clicks if square is filled or game is over

    const nextSquares = squares.slice(); // Copy squares
    nextSquares[index] = isXNext ? "X" : "O"; // Mark "X" or "O"
    setSquares(nextSquares); // Update state
    setIsXNext(!isXNext); // Switch turn
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null)); // Clear the grid
    setIsXNext(true); // Reset to Player X's turn
  };

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold mb-4">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-2">
        {squares.map((square, index) => (
          <GameButton key={index} onClick={() => handleClick(index)}>
            {square}
          </GameButton>
        ))}
      </div>
      <div className="mt-4 text-xl">
        {winner && `Winner: ${winner}`}
        {isDraw && "It's a Draw!"}
        {!winner && !isDraw && `Next player: ${isXNext ? "X" : "O"}`}
      </div>
      <div className="flex">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 mr-3"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-blue-600"
          onClick={resetGame}
        >
          Reset Game
        </button>
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
  return null; // No winner
}

export default Game;
