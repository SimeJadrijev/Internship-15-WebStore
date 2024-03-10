import classes from "./../styles/header.module.css";

const Header = ({ onSearchChange, handleClick }) => {
  return (
    <>
      <header>
        <img
          id={classes["header-image"]}
          src="https://turizam.njuskalo.hr/storage/app/uploads/public/628/ce2/edc/628ce2edc0400343308751.jpeg"
          alt="njuskalo header image"
        />
        <input type="text" onChange={onSearchChange} />
        <button onClick={handleClick}>Traži</button>
      </header>
    </>
  );
};

export default Header;
