
import './App.css';
import Sidebar from '../src/components/Sidebar';
import { Chat} from '../src/components/Chat';

function App() {
  return (
    <div className="App">
       <div className="app_body">

     
      <Sidebar/>
      <Chat/>
       </div>
   
    </div>
  );
}

export default App;
