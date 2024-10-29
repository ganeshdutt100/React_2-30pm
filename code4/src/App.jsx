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

function App() {
  let para1 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error sed cumque, quas vel soluta! Aliquam velit consectetur, iusto sed nam nihil perferendis vel amet id similique alias vitae nesciunt!";

  let para2 =
    "निबंध लेखन Essay Writing in Hindi – इस लेख में हम निबंध लेखन के बारे में जानेंगे। निबंध होता क्या है? निबंध के मुख्य अंग कौन-कौन से हैं? पाठ्यक्रम में निबन्ध-लेखन को क्यों जोड़ा गया है? निबंध कितनी प्रकार के होते हैं और उन्हें लिखते समय किन विभागों में बाँटना चाहिए जिससे उन्हें लिखने में आसानी हो? निबंध ";

  let para3 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione error sed cumque, quas vel soluta! Aliquam velit consectetur, iusto sed nam nihil perferendis vel amet id similique alias vitae nesciunt!";
  return (
    <>
      {/* <Demo /> */}
      <Navbar />
      <HeroSection />
      <div className="d-flex">
        <Card title="Card 1" description={para1} />
        <Card title="Card 2" description={para2} />
        <Card title="Card 3" description={para3} />

        {/* <Card /> */}
      </div>
      {/* <button></button> */}
      {/* <Button></Button> */}

      {/* win+alt+r */}
    </>
  );
}

export default App;
