/* eslint-disable react/prop-types */

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={` bg-[#4F43B1]   font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
