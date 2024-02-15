import './App.css'

import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import OneCard from './components/OneCard';
import backgroundImg from './assets/heroBanner.jpg';

function App() {

  return (
    <div className="flex flex-col items-center justify-center bg-transparent py-12 md:py-24 bg-blueblack" style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center 100%', backgroundRepeat: 'no-repeat', minHeight: '5vh' }} >
      <Navbar />
      <Header />
      <FeatureCard />
      <OneCard />
      <Footer />
    </div>
  )
}

export default App
