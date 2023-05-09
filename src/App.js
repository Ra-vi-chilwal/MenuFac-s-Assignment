// import './App.css';
import { FilterData, GammaArray } from "./components/methodFormulae/Formulae";
import Table from "./components/tableComponents";
function App() {
  const Flavanoids1 = FilterData(1,"Flavanoids");
  const Flavanoids2 = FilterData(2,"Flavanoids");
  const Flavanoids3 = FilterData(3,"Flavanoids");
  const GammaVal1 = GammaArray(FilterData(1))
  const GammaVal2 = GammaArray(FilterData(2))
  const GammaVal3 = GammaArray(FilterData(3))

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
        data1={Flavanoids1}
        data2={Flavanoids2}
        data3={Flavanoids3}
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
        data1={GammaVal1}
        data2={GammaVal2}
        data3={GammaVal3}
        />
      </div>
    </div>
  );
}

export default App;
