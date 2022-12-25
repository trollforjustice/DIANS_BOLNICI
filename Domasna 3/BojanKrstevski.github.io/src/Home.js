const Home = ({lng}) => {
  return (
    <div className="home">
      <div className="main">
        <div className="kolona">
          <div className="mainText">
            {lng && <div><h1>Најди ја најблиската болница</h1>
            <p>Веб страна за помош при наоѓање болници</p></div>}
            {!lng && <div><h1>Find your nearest hospital</h1>
            <p>A website to help you locate your nearest</p></div>}
            
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
