function Header({ Img, Price }) {
  return (
    <div className="card">
      <img src={Img} alt="Restaurant" className="img" />
      <div className="bottom-text">
        <p>{Price}</p>
      </div>
    </div>
  );
}

export default Header;
