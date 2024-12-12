interface OrdinaryButtonProps {
  onClick: () => void;
  count: number;
}

const CountButton = ({ onClick, count }: OrdinaryButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg transition ${
        count >= 20
          ? "bg-green-500 hover:bg-green-600"
          : count >= 10
          ? "bg-red-500 hover:bg-red-600"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white`}
    >
      Click Me
    </button>
  );
};

export default CountButton;
