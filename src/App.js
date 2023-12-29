import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthLayout } from './layouts/AuthLayout';
import { authRoutes, protectedRoutes } from './router/routes';
import { ProtectedLayout } from './layouts/ProtectedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthLayout/>}>
          {authRoutes.map((route,id)=>(
            <Route key={id} path={route.path} element={route.element}/>
          ))}
        </Route>
        <Route path='/' element={<ProtectedLayout/>}>
          {protectedRoutes.map((route,id)=>(
            <Route key={id} path={route.path} element={route.element}/>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
