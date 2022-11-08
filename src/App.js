
import './App.css';
import Card from './NewComp/card/Card';
import Navbar from './NewComp/Navigation/Navbar';
import CardSlider from './NewComp/slider/CardSlider';
import Slider from './NewComp/slider/Slider';

// import Header from './components/header/Header';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../node_modules/bootstrap/dist/js/bootstrap'
// import { Route, Routes } from 'react-router-dom';
// import  Home from './component/Home'
// import  FAQS from './component/FAQS'
// import  MissionStatement from './component/MissionStatement'
// import  Activities from './component/Activities'
// import  Contact from './component/Contact'
// import  Navigation from './component/navigation'
// import Footer from './component/Footer';

function App() {
  return (
   < >
   <div className='bg-gradient-to-b from-slate-300 md:from-slate-300 to-slate-400 w-full h-screen bg-cover'>


  <Navbar />
  <Slider />
  <CardSlider />

  <Card />

   </div>
   {/* <Header /> */}
   {/* <div className="bg-slate-500">

    <Navigation />

    <Routes >
      <Route  exect path='/Home' element={<Home/>}/>
      <Route exect path='/Faqs' element={<FAQS />}/>
      <Route exect path='/MissionStatement' element={<MissionStatement/>}/>
      <Route exect path='/Activities' element={<Activities/>}/>
      <Route exect path='/Contact' element={<Contact/>}/>
    </Routes>
    
    <Footer/>
   </div> */}
   </>
  );
}

export default App;
