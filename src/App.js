
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';

function App() {
  return (
    <div className="lg:mx-10 bg-base-200 ">


      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
