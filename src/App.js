import React from 'react';
import MainHeader from './components/layouts/MainHeader';
import Section1 from './components/section1/Section1';
import LogoSection1 from './components/section1/LogoSection1';
import Section2 from './components/section2/Section2';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section5 from './components/section5/Section5';
import Section6 from './components/section6/Section6';
import Footer from './components/layouts/Footer';


// App component represents the main entry point of the application
const App = () => {
  // Styling for the background image container
  const containerStyle = {
    background: "linear-gradient(to right, #b48afb ,#8945f0 50%, #d27e74)",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      {/* Main section with header and Section1 */}
      <div className="pl-14 pr-14" style={containerStyle}>
        <div className='w-full'>
          <MainHeader />
          <Section1 />
        </div>
      </div>
      {/* Section with LogoSection1 and Section2 */}
      <div className='pl-40 pr-40'>
        <LogoSection1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
      </div>
    </div>
  );
}

export default App;
