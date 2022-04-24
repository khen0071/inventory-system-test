import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';

import CentralPO from './screens/Central_PO';

import MondayPickers from './screens/pickers/Monday_pickers';
import TuesdayPickers from './screens/pickers/Tuesday_pickers';
import WednesdayPickers from './screens/pickers/Wednesday_pickers';
import ThursdayPickers from './screens/pickers/Thursday_pickers';
import FridayPickers from './screens/pickers/Friday_pickers';

const App = () => {
  return (
    <>
      <Router>
        <div>
          <div className='main-container'>
            {/* <SideNav /> */}
            <Header />

            <main>
              <Routes>
                {/* Product Routing */}

                <Route path='/' element={<CentralPO />} exact />

                <Route
                  path='/monday_pickers'
                  element={<MondayPickers />}
                  exact
                />
                <Route
                  path='/tuesday_pickers'
                  element={<TuesdayPickers />}
                  exact
                />
                <Route
                  path='/wednesday_pickers'
                  element={<WednesdayPickers />}
                  exact
                />
                <Route
                  path='/thursday_pickers'
                  element={<ThursdayPickers />}
                  exact
                />
                <Route
                  path='/friday_pickers'
                  element={<FridayPickers />}
                  exact
                />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
