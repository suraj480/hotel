import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
function Footer() {
  return (
    <div className="row">

      <div className='col-md-12' style={{ margin: 'auto', width: 'auto' }}>
        <head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"></link>
        </head>

        <div class="wrapper">
          <div class="icon facebook">
            <div class="tooltip">Facebook</div>
            <span><i class="fab fa-facebook-f"></i></span>
          </div>
          <div class="icon twitter">
            <div class="tooltip">Twitter</div>
            <span><i class="fab fa-twitter"></i></span>
          </div>
          <div class="icon instagram">
            <div class="tooltip">Instagram</div>
            <span><i class="fab fa-instagram"></i></span>
          </div>
          <div class="icon github">
            <div class="tooltip">Github</div>
            <span><i class="fab fa-github"></i></span>
          </div>
          <div class="icon youtube">
            <div class="tooltip">Youtube</div>
            <span><i class="fab fa-youtube"></i></span>
          </div>
        </div>

        <h6 style={{ margin: '5px', padding: '5px' }}> Copyright @ 2021 Searchie. All rights Reserved.</h6>

      </div>
    </div>
  );
}

export default Footer;
