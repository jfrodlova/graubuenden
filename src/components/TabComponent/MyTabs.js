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
        {tabData.map((oneTab, index) => {
          const { eventkey, title, description} = oneTab;
          return <Tab key={index}  eventKey={eventkey} title={title}>
            <section className='flex-container flex-container-tab'> 
              <p >{description}</p>
            </section>
          </Tab>;
        })}
      </Tabs>
    </Container>
  );
};

export default MyTabs;