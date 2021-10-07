
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './HD4';
import Footer from './Footer';
import Heading from './Heading';
import Search2 from './SearchFromStore';
import Body from './BodyComponent';
import Store from './Store';


function App() {
  const reviewStore = new Store();
  return (
    <div >
      <div style={{width:'auto', margin:'auto'}} >

      <Heading />
        <Header store={reviewStore} />
        

        <div style={{width:'auto', margin:'auto',margin:'0 auto'}} ><Search2 store={reviewStore} /></div>
        <div  style={{paddingTop:'0px' ,paddingBottom:'0px',paddingLeft:'250px',paddingRight:'250px'}} ><Body  /></div>


        <div style={{ margin: '30px' }}> <Footer /></div>
      </div>
    </div>
  );
}

export default App;

