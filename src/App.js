import Navbar from './Components/Navbar';
import MainSection from './Components/MainSection';
import RightSection from './Components/RightSection';
import './App.css';
import Data from './data';

function App() {

  // console.log(Data);

  return (
    <div className="App font-poppins flex justify-between max-w-[100vw]">
      <Navbar/>
      <MainSection Data={Data}/>
      <RightSection/>
    </div>
  );
}

export default App;
