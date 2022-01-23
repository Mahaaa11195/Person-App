import "./App.css";
import Card from "./components/Card";
import { useState} from "react";
import { details } from "./components/Sdata";
import Display from "./components/Display";

function App() {
  const [data, setdata] = useState({});

//   useEffect(() => {
//  console.log(data)
//   }, [data])
  return (
    
    <div style={{display:"flex",justifyContent:"space-between"}} className="App">
     
      <div className="per"
        style={{
          flexDirection: "column",
          display: "flex",
          padding: "100px",
          fontSize:"22px",
          color:"blue",
          border:'2px solid black'
        }}
      >
        {details.map((val, ind) => {
          return (

            <Card
              key={ind}
              name={val.name}
              age={val.age}
              img={val.img}
              ind={ind}
              onpress={(data) => {
                console.log(data)
                setdata({ name: data.name, age: data.age , img:data.img});
              }}
            />
          );
        })}
      </div> 
      { data.name ? 
        <Display  displays={data}  />  : null}
    </div>
  );
}

export default App;
