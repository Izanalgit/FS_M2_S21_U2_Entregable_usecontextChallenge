import './App.css'; // Archivo de estilos CSS
import RoutesApp from './routes/RoutesApp';
import { ThemeProvaider } from './themes/ThemeContext';

const App = () => {
  return (
    <ThemeProvaider>
      <RoutesApp />
    </ThemeProvaider>
  );
};

export default App;
