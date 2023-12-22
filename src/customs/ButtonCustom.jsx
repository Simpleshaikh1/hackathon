// eslint-disable-next-line react/prop-types
const ButtonCustom = ({ text, className, type }) => {
  return (
    <>
      <button type={type} className={`bg-gradient-to-r from-brightPurple to-lightBlue  py-3 px-8 text-white text-sm rounded-sm hover:bg-mainBlue hover:text-white ${className}`}>
        {text}
      </button>
    </>
  );
};

export default ButtonCustom;
