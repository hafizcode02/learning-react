import { Link } from "react-router-dom";

interface NavButtonProps {
  className?: string;
  urlTo: string;
  placeholder: string;
  onclick?: () => void;
}

const NavButton = ({ className = "", urlTo, placeholder, onclick }: NavButtonProps) => {
  return (
    <button
      onClick={onclick}
      className={`px-4 py-2 mx-2 rounded-lg transition border-solid 
        border-2 border-black bg-gray-300 text-black 
        hover:bg-blue-500 hover:text-white ${className}`}
    >
      <Link to={urlTo}>{placeholder}</Link>
    </button>
  );
};

export default NavButton;
