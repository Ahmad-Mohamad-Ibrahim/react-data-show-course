import './App.css';
import Todos from './Components/Todos/Todos';
import StandardErrorBoundary from './Components/StandardErrorBoundary/StandardErrorBoundary';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
   <StandardErrorBoundary>
    <Todos />
   </StandardErrorBoundary>
  );
}

export default App;
