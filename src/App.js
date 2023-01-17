import React, { useState,  useEffect} from 'react'
import axios from 'axios'; 



// const App = () => {

//      const [mssg, setMssg] = useState('');
//      const [input, setInput] = useState('');

//      useEffect(() => {
//         if (input != "") {
//           axios.get('http://127.0.0.1:8000/api/searchstagiaire/' + input).then((res) => {
//             setMssg(res.data);
//             console.log(res);
//           });
//         }
//       }, [input]);

//       const handleInput = (e) => {
//         setInput(e.target.value);
//       }

//   return (
//     <div>
//         <input type="text" onChange={handleInput} placeholder="search "  value={input}/>
//         <p>{mssg}</p>
//     </div>
//   )
// }


const App = () => {

  const [result, setResult] = useState([]);
  const [input, setInput] = useState('');
  const [data,setData] =useState('');

 
  const additem = (id) => {
    axios.get('http://127.0.0.1:8000/api/update/' + id ).then((response) => {
      // console.log(response.data);
      setData(response.data.name);

   })

   let myList = {result};
    const Element = Array.from(myList).indexOf(2)
    console.log(Element);
    Array.from(myList).splice(Element,0);
  
  }

  function deleteitem(){
    setData('');
  }

  useEffect(() => {

    if (input) {
           axios.get('http://127.0.0.1:8000/api/searchstagiaire/' + input).then((response) => {
            setResult(response.data);     
      });
    }
    else{
           setResult([])
    }
  }, [input]
  
  );
  const handlechange = (e) => {
    setInput(e.target.value);
    
  }

  return (
    <div>
      <input type="text" onChange={handlechange} value={input} />
      <ul>
        {result.map((item)=>{
          return <li>
          {item.name} 
          <button onClick={()=>additem(item.id)}  href="#" role="button">+</button>
          </li>
        })}
      </ul>

      <table>
        <tbody>
          <tr>
            <td>{data} <button onClick={()=>deleteitem()}>-</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}



 export default App



