import "./App.css";
import Demo from "./components/File";

// import "./bootstrap/dist/css/bootstrap.css";

{
  /* The following line can be included in your src/index.js or App.js file */
}
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { Card } from "./components/Card";
import NewCard from "./components/NewCard";
import NewFile from "./components/NewFile";

function App() {
  let para1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error sed cumque, quas vel soluta! Aliquam velit consectetur, iusto sed nam nihil perferendis vel amet id similique alias vitae nesciunt!";

  let para2 =
    "निबंध लेखन Essay Writing in Hindi – इस लेख में हम निबंध लेखन के बारे में जानेंगे। निबंध होता क्या है? निबंध के मुख्य अंग कौन-कौन से हैं? पाठ्यक्रम में निबन्ध-लेखन को क्यों जोड़ा गया है? निबंध कितनी प्रकार के होते हैं और उन्हें लिखते समय किन विभागों में बाँटना चाहिए जिससे उन्हें लिखने में आसानी हो? निबंध ";

  let para3 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error sed cumque, quas vel soluta! Aliquam velit consectetur, iusto sed nam nihil perferendis vel amet id similique alias vitae nesciunt!";

  let img1 =
    "https://img.freepik.com/premium-photo/woman-is-holding-camera-smiling_1217673-52700.jpg?uid=R168473893&ga=GA1.1.1872758581.1724841441&semt=ais_hybrid";
  let img2 =
    "https://img.freepik.com/free-photo/female-photographer-holding-camera-making-ok-sign_114579-47193.jpg?uid=R168473893&ga=GA1.1.1872758581.1724841441&semt=ais_hybrid";
  let img3 =
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg?uid=R168473893&ga=GA1.1.1872758581.1724841441&semt=ais_hybrid";
  return (
    <>
      {/* <Demo /> */}
      <Navbar />
      <HeroSection />
      <div className=" row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {/* col-1 */}
        <div className="col">
          <Card title="Card 1" description={para1} CardImage={img1} />
        </div>

        {/* col-2 */}
        <div className="col">
          <Card title="Card 2" description={para2} CardImage={img2} />
        </div>

        {/* col-3*/}
        <div className="col">
          <Card title="Card 3" description={para3} CardImage={img3} />
        </div>

        {/* <Card /> */}
      </div>

      <NewCard newPara={para2} />

      <NewFile />

      {/* <button></button> */}
      {/* <Button></Button> */}

      {/* win+alt+r */}
    </>
  );
}

export default App;
