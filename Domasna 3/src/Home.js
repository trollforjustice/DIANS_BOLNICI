const Home = () => {
  return (
    <div className="home">
      <div className="main">
        <div className="kolona">
          <div className="mainText">
            <h1>Најди ја најблиската болница</h1>
            <p>Веб страна за помош при наоѓање болници</p>
          </div>
        </div>
        <div className="kolona">
          <img src={require("./hospital.png")} alt="hospital" />
        </div>
      </div>
    </div>
  );
};

export default Home;
