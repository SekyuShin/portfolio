import AppRoute from './utils/AppRoute';
// Layouts
import LayoutDefault from './layouts/LayoutDefault';
// Views 
import Home from './views/Home';


function App() {
  return (
    <AppRoute component={Home} layout={LayoutDefault} />
  );
}

export default App;
