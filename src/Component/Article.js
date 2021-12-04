import { useState,useEffect } from "react";



const Article = (props) => {
  const url = "https://thronesapi.com/api/v2/Characters"

  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    let cards = [];
    for(let i = 0; i <= 15; i++ ){
      cards.push(data[i])
    }
    setUserData(cards)
    console.log(cards)
    return cards      
  };

  useEffect(() => {
      fetchData();
  },[]);

  const id = props.match.params.id;
  console.log(userData)
  let post = userData.filter((charac) => charac.id == id);
  post = post[0]
  
  console.log(post)

  if (userData.length == 0){
    return <h1> Loading... </h1>
  } else {
    return (
      <>
      <div>
        <h1> Article </h1>
      </div>
  
      <div className="profile-card">
        <img src={post.imageUrl} alt={post.imgage} />
        <h2>{post.title}</h2>
        <h3>{post.fullName}</h3>
        <h3>{post.family}</h3>
        <section> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut temporibus nisi consequatur alias, nihil, reprehenderit iusto tempora atque ea commodi neque obcaecati vero quidem aspernatur! Rem quasi nihil maxime hic. 
        </section>
        <link to="/article/"/>
      </div>
      </>
    )
  };

  }

export default Article;

