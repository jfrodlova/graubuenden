import Header from "../components/Header"
import MediaCard from "../components/CardComponent/Card"

import TabsB from "../components/TabComponent/Tabs"

const Home = () => {
  return <section>
    <Header />
    <div className="flex-container">
      <MediaCard className="card-item" />
      <MediaCard />
      <MediaCard />
      </div>
    <TabsB />
      
  </section>
}

export default Home
