
import './App.css';
import RestCountries from "./page/RestCountries";
import {ProviderTheme} from "./Context/ContextTheme";

function App() {

  return (
    <>
      <ProviderTheme>
          <RestCountries/>
      </ProviderTheme>
    </>
  )
}

export default App
