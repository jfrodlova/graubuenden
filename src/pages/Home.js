import Header from "../components/Header"
import CardPanel from "../components/CardComponent/CardPanel"

import MyTabs from "../components/TabComponent/MyTabs"

const Home = () => {
  return <section>
    <Header />
    <CardPanel />
    <div className="flex-container">
      <MyTabs />
    </div>
    
      
  </section>
}

export default Home
