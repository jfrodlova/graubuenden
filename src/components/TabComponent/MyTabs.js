import './MyTabs.css'
import tabData from "./tabdata";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const MyTabs = () => {

  return (
    <div style={{ display: "block", width: 700, padding: 30, margin: 50 }}>
      <h2>Activities you should try</h2>
      <Tabs defaultActiveKey="¨first">
        {tabData.map((oneTab) => {
          const { eventkey, title, description, image } = oneTab;
          return <Tab eventKey={eventkey} title={title}>
            <section className='flex-container'> 
              <p>{description}</p>
              <div>
                <img  src={image} alt="" />
              </div>
            </section>
          </Tab>;
        })}
      </Tabs>
    </div>
  );
};

export default MyTabs;