//import './Tabs.css'
import tabData from "./tabdata";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import MyTabContent from "./MyTabContent";

const TabsB = () => {

  return (
    <div style={{ display: "block", width: 700, padding: 30 }}>
      <h4>Activities you should try</h4>
      <Tabs defaultActiveKey="¨first">
        {tabData.map((oneTab) => {
          const { eventkey, title, description, image } = oneTab;
          return <Tab eventKey={eventkey} title={title}>
            <section>
              <p>{description}</p>
              <div>
                <img src={image} alt="" />
              </div>
            </section>
          </Tab>;
        })}
      </Tabs>
    </div>
  );
};

export default TabsB;

{
  /* <Tab eventKey="first" title="Dashboard"> */
}

{
  /* <MyTabContent>
              {tabData.map((oneTab) => {
                const { title, description, image } = oneTab;
                return (
                  <section>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div>
                      <img src={image} alt="" />
                    </div>
                  </section>
                );
              })}
            </MyTabContent> */
}
{
  /* </Tab> */
}

{
  /* <Tab eventKey="first" title="Dashboard">
          Hii, I am 1st tab content
        </Tab>

        <Tab eventKey="second" title="Setting">
          Hii, I am 2nd tab content
        </Tab>

        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs> */
}
