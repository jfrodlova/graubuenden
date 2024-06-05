import tabData from "./tabdata";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

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
              <Link to="/weather">
              <Button variant="warning">Check the weather</Button>
              </Link>
            </section>
          </Tab>;
        })}
      </Tabs>
    </Container>
  );
};

export default MyTabs;