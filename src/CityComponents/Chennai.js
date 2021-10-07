
import { Card, Accordion, Figure } from 'react-bootstrap';

function Chennai() {

  return (

    <div>
      <Figure style={{ width: '1000px', height: '500px' }}>
        <Figure.Image
          width={1000}
          height={300}
          alt="171x180"
          src="https://images.indianexpress.com/2021/02/chennai-central.jpg"
        />
      </Figure>

      <Accordion defaultActiveKey="0" style={{ width: '1000px' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 style={{ fontFamily: "cursive" }}><i>ibis Chennai City Centre Hotel</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img width='950' height='300' src='https://i.ytimg.com/vi/qFejGbjCEdo/maxresdefault.jpg' />
              <p> ibis, the international hotel brand of Accor and the worldwide reference in the economy sector in Chennai. The place to be in Chennai center on the Anna Salai or Mount Road. The hotel is at walking distance to US Consulate, Citibank, HDFC Bank, IOCL, Siemens, Apollo Hospital, Sankara Nethralaya, Spencers Plaza, Music Academy, Express Avenue and Greams Road. The hotel caters to business at Nungambakkam, RK Salai, Tidel Park, Taramani, Acsendas, OMR, Mylapore, Alwarpet, Adyar, Velachery, Guindy Industrial Estate, Chennai Trade Centre, Anna University and Ambattur Industrial Estate. </p>
              <h4>Price for 1 day : 2,500 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5 style={{ fontFamily: "cursive" }}><i>The Park Chennai</i></h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><img width='950' height='300' src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3f/86/84/the-park-chennai.jpg?w=900&h=-1&s=1' />
              <p>The Park Chennai is in the heart of the city’s vibrant business district. The hotel’s decor is influenced by the very foundation it stands on – the former premises of Gemini Film Studios, renowned for producing some of the most influential heroes and heroines the country has known. The dining and bar facilities at this hotel are amongst the best that the city offers.</p>
              <h4>Price for 1 day : 3,300 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion></div>


  )
}

export default Chennai;

