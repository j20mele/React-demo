import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards.js';
import Footer from '../Footer';

function Home () {
return(
<>
    {/* Type Component Name and press enter for shortcut (with extension) to write import statement of Footer */}
    <HeroSection />
    <Cards />
    {/* Background of Footer is the same background as HeroSection, so you'll need to cover it with css */}
    <Footer />
</>

); 

}

{/* Don't forget to export default Home */}

export default Home;