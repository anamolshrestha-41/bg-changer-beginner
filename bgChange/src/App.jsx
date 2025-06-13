import { useState } from "react"


function App() {
  const [color, setColor]= useState("blue")
  return (
    <>
     <div className="h-screen flex items-center justify-center " style={{backgroundColor: color}}>
      <div className="flex items-center justify-center gap-20 mb-30 w-200 border-3 rounded h-10">
        <button type="button" className="bg-red-300 rounded cursor-pointer" onClick={()=>setColor("red")}>Red</button>
        <button type="button" className="bg-green-300 rounded cursor-pointer" onClick={()=>setColor("green")}>Green</button>
        <button type="button" className="bg-blue-300 rounded cursor-pointer" onClick={()=>setColor("blue")}>Blue</button>
      </div>
     </div>
    </>
  )
}

export default App
