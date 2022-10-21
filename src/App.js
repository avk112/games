import "./styles.css";
import Header from "./components/Header";
import MyRoutes from "./router/MyRoutes";
function App() {

  return (
    <div className="app">
      <Header/>
        <MyRoutes/>

    </div>
  );
}

export default App;
