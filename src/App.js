import './App.css';
import BannerPage from './components/BannerPage';
import BlueVioletTab from './components/BlueVioletTab';
import Footer from './components/Footer';
import GalaxyDevices from './components/GalaxyDevices';
import Header from './components/Header';
import ConnectToeverything from './components/ConnectToeverything'
import BlackSamsung from './components/BlackSamsung';
import GearIconX from './components/GearIconX';
import TabletMobilityTab from './components/TabletMobility';
import LastSlide from './components/LastSlide';

function App() {
  return (
    <div className="App">
      <Header/>
      <BannerPage/>
      <GalaxyDevices/>
      <BlueVioletTab/>
      <ConnectToeverything/>
      <BlackSamsung/>
      <GearIconX/>
      <TabletMobilityTab/>
      <LastSlide/>
      <Footer/>
    </div>
  );
}

export default App;
