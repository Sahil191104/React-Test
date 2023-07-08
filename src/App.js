import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Product from './Component/Product';
import Auth from './Component/Auth';
import { Container } from 'reactstrap';
import PrivateRoute from './Route/PrivateRoute';

function App() {
  return (
    <>
      <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Product />} />

            {/* <Route element={<PrivateRoute />}> */}
              <Route path='/auth' element={<Auth />} />
            {/* </Route> */}
          </Routes>
      </Container>
    </>
  );
}

export default App;