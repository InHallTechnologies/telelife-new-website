import Navigation from './components/Navigation/Navigation.component';
import Styles from './page.module.css';
import Hero from './components/Hero/Hero.component';
import AboutTelelife from './components/AboutTelelife/About.component';
import MediaAwareness from './components/MediaAwareness/MediaAwareness.component';
import OurReach from './components/OurReach/OurReach.component';
import Blogs from './components/Blogs/Blogs.component';
import FooterSection from './components/Footer/Footer.component';

export default function Home(props) {


  return (
    <>
      <main className={Styles.mainContainer}>
        <title>Telelife Medicare | Swift, Reliable, Authentic</title>
        <Navigation />
        <Hero />
        <AboutTelelife />
        <MediaAwareness />
        <OurReach />
        <Blogs />
        <FooterSection />
      </main>
    </>

  )
}

// export async function getServerSideProps() {
//   
//   return { props: { data } }
// }

