import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
import "./assets/css/app.css";
import SideBar from "./components/sideBar/sideBar";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
