import './index.css';
import { useRoutes} from 'react-router-dom';
import New from './new';
import About from './About'
import Appindex from './Appindex';
import Documents from './Documents'
import Stat from './Stat';


function App() { 
  const route = useRoutes([
    {
      path: '/',
      element: <Appindex/> 
    },

    {path: '/about',
    element: <About/> },

    {path: '/documents',
    element: <Documents/> },

    {path: '/new',
    element: <New/> },

    {path: '/stat',
    element: <Stat/> },
  ]);

  return route; 
  
}

export default App
