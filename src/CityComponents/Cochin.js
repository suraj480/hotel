import { Card, Button, Accordion, Figure } from 'react-bootstrap';

function Cochin() {

  return (
    <div>


      <Figure style={{ width: '1000px', height: '500px' }}>
        <Figure.Image
          width={1000}
          height={500}
          alt="171x180"
          src="https://thumbs.dreamstime.com/b/kochi-india-city-skyline-color-buildings-blue-sky-refl-reflections-vector-illustration-business-travel-tourism-concept-127439341.jpg"
        />
      </Figure>

      <Accordion defaultActiveKey="0" style={{ width: '1000px' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 style={{ fontFamily: "cursive" }}><i>  Grand Hyatt </i> </h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img width='950' height='300' src='https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/07/02/1033/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.jpg/Grand-Hyatt-Kochi-Bolgatty-P058-Hotel-Facade.16x9.jpg' />
              <p> Grand Hyatt Kochi is a Waterfront Urban Resort Overlooking the Backwaters of Vembanad Lake. We’re Committed to Enhanced Levels of Cleanliness To Ensure Your Safety & Wellbeing.</p>
              <h4>Price for 1 day : 7,000 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5 style={{ fontFamily: "cursive" }}><i>  Radisson Blu</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><img width='950' height='300' src='https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1451221585/Domestic%20Hotels/Hotels_Cochin/Radisson%20Blu%20Kochi/BAR_2.jpg' />
              <p> Featuring stylish interiors and a friendly staff committed to providing the best experience possible, the Radisson Blu Kochi stands out as one of the best upper upscale hotels in the city. The hotel is located in Kochi’s city center and within 100 meters of the Elamkulam Metro Station, making prominent businesses, transport stops, and prime shopping destinations like LuLu Mall and MG Road easily accessible. Just 10 minutes away, you can explore the city’s waterfront. Willingdon Island, housing the city’s port, naval base, and many businesses and attractions, is within a 20-minute drive.</p>
              <h4>Price for 1 day : 3,500 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion></div>



  )
}

export default Cochin;