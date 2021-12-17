import "./assets/css/master.css";
import SideBar from "./components/sideBar/sideBar";
import ContentWrapper from "./components/contentWrapper/contentWrapper";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <ContentWrapper />
    </div>
  );
}

export default App;
