import { Card, Accordion, Figure } from 'react-bootstrap';
function Kolkata() {

  return (

    <div>
      <Figure style={{ width: '1000px', height: '500px' }}>
        <Figure.Image
          width={1000}
          height={500}
          alt="171x180"
          src="https://scontent-maa2-1.xx.fbcdn.net/v/t1.18169-9/28871157_929341723907076_1241004735812739438_n.png?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=JGH9g2-b4VoAX9s4MiW&_nc_ht=scontent-maa2-1.xx&oh=1d3cb0c434322c88d0b2b09f630bdbf3&oe=60DB8BA6"
        />
      </Figure>

      <Accordion defaultActiveKey="0" style={{ width: '1000px' }}>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h5 style={{ fontFamily: "cursive" }}><i>Novotel Kolkata Hotel and Residences</i> </h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <img width='950' height='300' src='https://imgcld.yatra.com/ytimages/image/upload/t_hotel_yatra_details_desktop/v1519382711/Hotel/Kolkata/00019932/Cascades_roof_view_b7pvkD.jpg' />
              <p> Located on the main road connecting Netaji Subhash Chandra Bose International airport and the growing IT and commercial hub of Kolkata. Novotel Kolkata Hotel and Residences has 340 rooms with 12 suits and 48 service apartments. It also has an all day dining restaurant ‘The Square’, Sante the 24x7 bar, Blue Tokai Coffee Roasters, swimming pool, health club, spa. </p>
              <h4>Price for 1 day : 6,272 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h5 style={{ fontFamily: "cursive" }}><i>Polo Floatel Hotel</i> </h5>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body><img width='950' height='300' src='https://res.cloudinary.com/simplotel/image/upload/x_0,y_58,w_900,h_506,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/floatel-kolkata/Polo_Floatel_Calcutta_1_of_1_-20_i68bjc' />
              <p>We are an environment friendly hotel and it is our endeavor to conserve the environment in every way we can. As you have chosen Floatel for your stay, you have also committed yourself to help us save the environment. Together let us ensure a greener earth to ensure a better future.</p>
              <h4>Price for 1 day : 1,300 INR</h4>
            </Card.Body>
          </Accordion.Collapse>
        </Card>


      </Accordion></div>


  )
}

export default Kolkata;