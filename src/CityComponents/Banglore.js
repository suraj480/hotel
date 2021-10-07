import { Card, Accordion, Figure } from 'react-bootstrap';
import '../App.css';

function Banglore() {

  return (
    <div>
      <Figure style={{ width: '1000px' }}>
        <Figure.Image
          width={1000}

          alt="171x180"
          src="https://roofandfloor.thehindu.com/real-estate-blog/wp-content/uploads/sites/14/2018/12/Bangalore-2018-WRAP-UP-840x480.jpg"
        />
      </Figure>

      <Accordion defaultActiveKey="0" style={{ width: '1000px' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 style={{ fontFamily: "cursive" }}><i> Vivanta</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img width='950' height='300' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/a5/cc/bd/exterior.jpg?w=900&h=-1&s=1' />
              <p> Located inside the International Tech Park in Bengaluru, 45 kilometres from the airport, Vivanta Bengaluru, Whitefield is a contemporary hotel that ushers global jet-setters into a dynamic lifestyle at the heart of India’s technology capital. The hotel is also close to other business parks and EPIP zone. Our multiple award-winning design is futuristic and playful, a seamless union of nature and technology that is immediately seen in the striking green-blue, steel-and-glass, chequered facade which ‘blinkers’ (changing colour and texture), literally and figuratively mirroring the digital universe that surrounds us. </p>
              <h4>Price for 1 day : 3,500 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5 style={{ fontFamily: "cursive" }}><i>Lemon Tree Hotel</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><img width='950' height='300' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/64/0b/30/lemon-tree-hotel-whitefield.jpg?w=900&h=-1&s=1' />
              <p> Lemon Tree Hotel, Whitefield, Bangalore, located in the heart of Bangalore's Whitefield - EPIP Zone, is in close proximity to Accenture, John F Welch Technology Centre (JFWTC), Hewlett Packard, I Gate, SAP Labs, Shell Technology Centre, Qualcomm and UL India. The hotel is only 18 minutes from Old Airport Road and 40 minutes from M.G. Road. The hotel is close to K.R. Puram station and ITPL.</p>
              <h4>Price for 1 day : 3,250 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion></div>

  )
}

export default Banglore;