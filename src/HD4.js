import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './images/bgimge141.jpg';
import './Header.css'


function Header(props) {
  return (

    <div className="row">

      <div className='col-md-12'>
        <nav class="navbar navbar-light bg-dark " style={{ height: '180px', backgroundImage: `url(${pic})` }}>
          <div class="container-fluid">
            <a class="navbar-brand" ></a>
            <form class="d-flex"  >
              <input name="review" id="val" class="form-control me-2" type="search" placeholder="Search by City" style={{ width: '500px' }} aria-label="Search" onChange={event => { props.store.searchitem(event.target.value) }} />

            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
