import Header from "../components/Header";
import Entry from "../components/Entry";
import data from "./data"


export default function App (){

  const dataElements = data.map((entry)=>{
    return (<Entry  
    
                key={entry.id}
          
                {...entry}/>)
  })

  return(
    <div className="card">
          <Header />
          <main className="container">
          
            {dataElements}
          </main>
    </div>
  )
}