import styles from './style'

import Navbar from "./components/Navbar";
import Billing from "./components/Billing";
import CardDeal from "./components/CardDeal";
import Business from "./components/Business";
import Clients from "./components/Clients";
import CTA from "./components/CTA";
import Stats from "./components/Stats";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Hero from "./components/Hero";




 
const App = () => (
    <div className="bg-primary w-full overflow-hidden select-none">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className="{`${styles.boxWidth}`}">
        </div>
        <Navbar />

      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> 
          <Business /> 
          <Billing /> 
          <CardDeal /> 
          <Testimonials /> 
          <Clients /> 
          <CTA /> 
         < Footer />
        </div>
      </div>

    </div>
  );

export default App;
