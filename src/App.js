import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  return (
    <div className='App'>
    <div className='container'>
      <div className='row'>
      <div className='col-lg-6'>
      <Form/>
      </div>
      <div className='col-lg-6'>
      <List/>
      </div>
      
      
      </div>
    </div>
    </div>
    
        
  );
}

export default App;
