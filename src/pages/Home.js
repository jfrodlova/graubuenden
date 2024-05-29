import Header from "../components/Header"
import CardPanel from "../components/CardComponent/CardPanel"
import MyCarousel from "../components/MyCarousel"

import MyTabs from "../components/TabComponent/MyTabs"

const Home = () => {
  return <section>
    <Header />
    <CardPanel />
    <MyTabs />
    <MyCarousel />    
  </section>
}

export default Home
