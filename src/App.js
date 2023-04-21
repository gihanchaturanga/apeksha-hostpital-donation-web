import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewSelect from './common/Select/NewSelect';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NewSelect label={'new label'} err></NewSelect>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
