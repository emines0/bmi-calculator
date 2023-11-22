import Hero from './components/Hero';
import { GlobalProvider } from './context/context';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Hero />
      </div>
    </GlobalProvider>
  );
}

export default App;
