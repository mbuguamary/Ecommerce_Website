
import './App.css';
import AppFooter from './Components/AppFooter';
import PageContent from './Components/PageContent';
import AppHeader from './Components/AppHeader';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppHeader />
      <PageContent />
      <AppFooter />
      </BrowserRouter>
    </div>
  );
}


export default App;
