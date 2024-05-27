import tabData from "./tabdata";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container } from 'react-bootstrap';

const MyTabs = () => {

  return (
    <Container>
      <h2>Activities you should try</h2>
      <Tabs defaultActiveKey="first">
        {tabData.map((oneTab) => {
          const { eventkey, title, description, image } = oneTab;
          return <Tab  eventKey={eventkey} title={title}>
            <section className='flex-container flex-container-tab'> 
              <p className='flex-item flex-text'>{description}</p>
              {/* <div className='flex-item'>
                <img className= "tab-img" src={image} alt="" />
              </div> */}
            </section>
          </Tab>;
        })}
      </Tabs>
    </Container>
  );
};

export default MyTabs;