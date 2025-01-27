
import App from './App';
import Tech from './technologies';

function Main() {
  return (
    <div className="w-screen overflow-y-auto overflow-hidden">
      {/* Primeira Parte */}
      <App />
      
      {/* Segunda Parte */}
      <Tech />
    </div>
  );
}

export default Main;
