import classes from "./../styles/header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <img
          id={classes["header-image"]}
          src="./src/assets/images/njuskalo header image.jpeg"
          alt="njuskalo header image"
        />
        <input type="text" />
        <button>Traži</button>
      </header>
    </>
  );
};

export default Header;
