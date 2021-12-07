import "./Styles/Home.css"
import { useEffect } from "react";





const Home = (props) => {

// const handleImage = () => {


// }
useEffect(()=>{

})
  return <>  
  <h1 className="home-text"> Home </h1> 
    <main className="page-wrp">
         <section className="hero">
         <div className="hero-img"> </div>
        </section>
        <div className="htxt-wrp">
        <h2 className="heading-txt"> Welcome To *Insert Your Company* </h2>
        </div>
        <div className="par-wrp">
          <p className="pee-txt"> Vestibulum venenatis nulla et nunc dignissim malesuada. Suspendisse aliquet, velit ac fermentum egestas, mauris est congue arcu, in tincidunt diam magna vel magna. Sed pellentesque, dui a cursus faucibus, turpis leo luctus tortor, vel gravida neque enim id neque. Sed rutrum congue nulla et convallis. Proin commodo hendrerit augue a faucibus. Donec sollicitudin lacinia dictum. Donec vestibulum facilisis tellus at porttitor. Duis ut vehicula metus, eu consequat purus. Donec nec gravida dolor. Aliquam neque tortor, iaculis id massa et, tincidunt consectetur mauris. Vestibulum tristique rutrum felis in euismod. Pellentesque tincidunt vulputate neque. Quisque quam risus, semper nec tellus vel, placerat iaculis ex.
           </p>
        </div>
        <section className="sec-wrp">
        <div className="img-wrp"> 
          <div className="h-img-div"> </div>
          <div className="h-img-div"> </div>
          <div className="h-img-div"> </div>
          <div className="h-img-div"> </div>
        </div>
        <div className="pee-wrp">
          <div>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis nec dolor tristique sodales ac eget erat. Nulla pulvinar blandit nunc, ut tempor ipsum vulputate non. Pellentesque aliquam imperdiet varius. Integer eros urna, eleifend a orci vel, feugiat efficitur diam. Etiam consectetur nisi urna, non faucibus purus placerat in. Quisque condimentum blandit quam sed interdum. In tempor mauris nisl, porta scelerisque neque iaculis vitae. Etiam luctus tristique purus nec imperdiet. Praesent iaculis est tempus fermentum lacinia. Praesent faucibus accumsan purus vel tincidunt. Integer eget velit at sapien consectetur rhoncus. Nullam nulla nunc, condimentum non molestie ac, ultrices convallis justo. Donec odio dolor, euismod porta posuere a, placerat sed libero. Aenean finibus tellus non egestas elementum. Sed at purus volutpat, aliquet sem non, rhoncus neque. </p>
            </div>
            <div>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed turpis nec dolor tristique sodales ac eget erat. Nulla pulvinar blandit nunc, ut tempor ipsum vulputate non. Pellentesque aliquam imperdiet varius. Integer eros urna, eleifend a orci vel, feugiat efficitur diam. Etiam consectetur nisi urna, non faucibus purus placerat in. Quisque condimentum blandit quam sed interdum. In tempor mauris nisl, porta scelerisque neque iaculis vitae. Etiam luctus tristique purus nec imperdiet. Praesent iaculis est tempus fermentum lacinia. Praesent faucibus accumsan purus vel tincidunt. Integer eget velit at sapien consectetur rhoncus. Nullam nulla nunc, condimentum non molestie ac, ultrices convallis justo. Donec odio dolor, euismod porta posuere a, placerat sed libero. Aenean finibus tellus non egestas elementum. Sed at purus volutpat, aliquet sem non, rhoncus neque.</p>
              </div>
        </div>
        <div className="card-sec">
          <div className="card1">
               <div className="h-img-div"></div>
            <div className="info-wrp">
                <h4> {props.card1Name} </h4>
               <h5> {props.card1Title} </h5>
               </div>
          </div>
          <div className="card2">
               <div className="h-img-div"></div>
               <div className="info-wrp">
                 <h4>{props.card2Name}</h4>
                 <h5> {props.card2Title} </h5>
                 </div>
          </div>
        </div>
      </section>
  </main>

  </>

  
};

export default Home;
