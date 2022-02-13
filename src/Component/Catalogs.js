import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Styles/Catalog.css"

const Catalogs = () => {
  const url = "https://thronesapi.com/api/v2/Characters"

  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    let cards = [];
    for(let i = 0; i <= 25; i++ ){
      cards.push(data[i])
    }
    setUserData(cards)
    console.log(cards)
    return cards      
  };

  useEffect(() => {
      fetchData();
  },[]);

  return (
    <div className="page-wrp">
      <div className="title">
        <h1> Catalogs of Characters </h1>
      </div>
      <div className="character-container">
        <section className="card-div">
        { userData.map((charac)=> {
          let linkPath = "/article/" + charac.id;
          return (
            <div className="card-wrp">
              <div className="img-wrp">
                <img src={charac.imageUrl} alt={charac.firstName} />
              </div>
              <div className="link-wrp">
                <Link className="link" key={charac.id} to={linkPath}> {charac.fullName}</Link> 
                <h3 className="chr-title">({charac.title})</h3> 
              </div>
            </div>
          )
        })}
        </section>
      </div>
    </div>
  );
    }

export default Catalogs;
