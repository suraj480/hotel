

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';

import { ButtonGroup, Button } from 'react-bootstrap'
import Banglore from './CityComponents/Banglore';
import Chennai from './CityComponents/Chennai';
import Kolkata from './CityComponents/Kolkata';
import Cochin from './CityComponents/Cochin';
import Home from './Home';
import Trivandrum from './CityComponents/Trivandrum';


function Body() {
  return (


    <div  >
      <Router>
        <div  >

          <div  >
            <ButtonGroup aria-label="Basic example"  style={{width:'auto', margin:'auto'}}>

              <Link to="/Banglore"><Button className="btns" variant="secondary">BANGALORE</Button></Link>
              <Link to="/Chennai"><Button className="btns" variant="secondary">CHENNAI</Button></Link>
              <Link to="/Kolkata"><Button className="btns" variant="secondary">KOLKATA</Button></Link>
              <Link to="/Cochin"> <Button className="btns" variant="secondary">COCHIN</Button></Link>
              <Link to="/Trivandrum"> <Button className="btns" variant="secondary">TRIVANDRUM</Button></Link>
            </ButtonGroup>
          </div>
        </div>
        <div class='box'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Banglore" >
              <Banglore />

            </Route>
            <Route exact path="/Chennai" >
              <Chennai />


            </Route>
            <Route exact path="/Kolkata" >
              <Kolkata />

            </Route>
            <Route exact path="/Cochin" >
              <Cochin />
            </Route>
            <Route exact path="/Trivandrum" >
              <Trivandrum />
            </Route>
          </Switch>
        </div>



      </Router>
    </div>

  );
}

export default Body;
