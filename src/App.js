// import './App.css';
import {  GammaArray ,sortSameTypeData} from "./components/methodFormulae/Formulae";
import Table from "./components/tableComponents";
function App() {
  const valueToCalc = sortSameTypeData("Flavanoids")
  const gammaOfAllClasses = GammaArray()

  return (
    <div className="App">
      <div>
        <p style={{display:"flex",justifyContent:"center", alignItems:"center", fontSize:30}}>
          Table for Flavanoids...
        </p>
        <Table
          method1={"Flavanoids Mean"}
          method2={"Flavanoids Median"}
          method3={"Flavanoids Mode"}
       arrayData={valueToCalc}
        />
      </div>
      <div>
      <p style={{display:"flex",justifyContent:"center", alignItems:"center", fontSize:30}}>
          Table for Gamma... 
        </p>
        
      <Table
          method1={"Gamma Mean"}
          method2={"Gamma Median"}
          method3={"Gamma Mode"}
        arrayData={gammaOfAllClasses}
        />
      </div>
    </div>
  );
}

export default App;
