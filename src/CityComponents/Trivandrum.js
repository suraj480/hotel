import { Card, Button, Accordion, Figure } from 'react-bootstrap';

function Trivandrum() {

  return (
    <div>
      <Figure style={{ width: '1000px' }}>
        <Figure.Image
          width={1000}

          alt="171x180"
          src="https://entecity.com/news/files/2017/11/stadium-trivandrum-sports-hub-greenfield-international.jpg"
        />
      </Figure>

      <Accordion defaultActiveKey="0" style={{ width: '1000px' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 style={{ fontFamily: "cursive" }}><i>Taj Green Cove Resort and Spa Kovalam</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img width='950' height='300' src='https://www.tajhotels.com/content/dam/luxury/hotels/Taj_GreenCove_Kovalam_06Feb2016/images/gallery/Bait_Restaurant_Feast_for_Web_3x2-04.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg' />
              <p> The 16 acre Taj Green Cove, our 5 star resort in Kovalam, has a kilometer of coastline, Balinese style villas nestled on a hillock overlooking the Ocean with a lagoon in between. Ayurveda and Jiva spa lead by a Naturopathy Doctor. Wellness Spa therapies as well as A holistic Wellness Routine is crafted on request by our Wellness Doctor.</p>
              <h4>Price for 1 day : 4,000 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5 style={{ fontFamily: "cursive" }}><i>Hilton Garden Inn Trivandrum</i> </h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><img width='950' height='300' src='https://content3.jdmagicbox.com/comp/thiruvananthapuram/d5/0471px471.x471.140227172830.b7d5/catalogue/hilton-garden-inn-punnen-road-thiruvananthapuram-review-restaurants-76s52pk1vm.jpg' />
              <p> Location This hotel is located 7 minutes from the local railway station and a stone's throw from MG Road's prime shopping area in Trivandrum. The hotel is just 10 km from Trivandrum Airport. Facilities The hotel was built in 2000. Guests are welcomed at the accommodation, which has a total of 57 rooms. A lobby and a reception are available to travellers. The upper floors of the establishment can be accessed by lift. Amenities include a cloakroom and a currency exchange service. Wireless internet access in public areas allows guests to stay connected. Among the culinary options available at the hotel are a restaurant, a café and a bar. Those arriving in their own vehicles can leave them in the car park of the accommodation. Additional services include medical assistance, room service and a laundry service</p>
              <h4>Price for 1 day : 3,000 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion></div>



  )
}

export default Trivandrum;

