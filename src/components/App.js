import '../style/app.scss';
import Header from '../block/header';
import GreenBlock from '../block/greenBlock';
import MapBlock from '../block/mapBlock';
import YellowBlock from '../block/yellowBlock';
import UseCasesBlock from '../block/useCasesBlock';
import BlueBlock from '../block/blueBlock';
import MenBlock from '../block/menBlock';
import Activities from '../block/activities';
import CloverlyBlog from '../block/cloverlyBlog';
import Footer from '../block/footer';

const App = () => {
    return (
      <div className='App'>
        <Header/>
        <GreenBlock/>
        <MapBlock/>
        <YellowBlock/>
        <UseCasesBlock/>
        <BlueBlock/>
        <MenBlock/>
        <Activities/>
        <CloverlyBlog/>
        <Footer/>
      </div>
    );
  }
  
  export default App;