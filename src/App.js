// // import logo from './logo.svg';
// // import './App.css';

// import React, { useState, useEffect, useCallback } from "react";
// import { debounce } from "lodash";




// function App() {
  
//   const [value,setNewValue]=useState('')
//   const [array,setNesetArraay]=useState([])
//   const handleSubmit=(e)=>{
//     e.preventDefault();
     
//      setNesetArraay([...array,value]);
     
//   }
//   console.log(array)
//   return (
//     <div style={{ display: 'flex', gap: '2rem' }}>
//     <form onSubmit={handleSubmit}>
//       <input type="text" value={value} onChange={(e)=>  setNewValue(e.target.value)} />
//       <button type="submit">Submit</button>
//       <div >
     
      
// </div>





//   </form>
//   <h4>Submitted Values:</h4>
//         <ul>
//         {array.map((item,index)=>(
//         <li key={index}>{item}</li>
//       ))}
//         </ul>
//   </div>

   
//   );

// //   const [query, setQuery] = useState("");

// //   useEffect(()=>{

// //     const bounce=setTimeout(()=>{
// //       console.log("ffff",query)
// //     },500)

// //     return()=>clearTimeout(bounce)

// //   },[query])

// //  return(

// //     <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
// //  )

// }

// export default App;


import { useState } from "react";

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <div className="ml-4 border-l pl-2">
      <div
        className="cursor-pointer font-bold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.title} {hasChildren && <span>{isOpen ? "-" : "+"}</span>}
      </div>

      {isOpen && hasChildren && (
        <div className="mt-2">
          {item.children.map((child, idx) => (
            <Accordion key={idx} item={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const data = [
    {
      title: "Level 1 - A",
      children: [
        {
          title: "Level 2 - A1",
          children: [
            { title: "Level 3 - A1.1" },
            { title: "Level 3 - A1.2" }
          ]
        },
        { title: "Level 2 - A2" }
      ]
    },
    {
      title: "Level 1 - B",
      children: [
        {
          title: "Level 2 - B1",
          children: [{ title: "Level 3 - B1.1" }]
        }
      ]
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Multi-Level Accordion</h2>
      {data.map((item, idx) => (
        <Accordion key={idx} item={item} />
      ))}
    </div>
  );
}


