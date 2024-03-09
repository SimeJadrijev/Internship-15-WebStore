import classes from "./../styles/header.module.css";

const Header = ({ onSearchChange }) => {
  return (
    <>
      <header>
        <img
          id={classes["header-image"]}
          src="./src/assets/images/njuskalo header image.jpeg"
          alt="njuskalo header image"
        />
        <input type="text" onChange={onSearchChange} />
        <button>Traži</button>
      </header>
    </>
  );
};

export default Header;
