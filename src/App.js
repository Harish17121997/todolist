
import {useState,useEffect} from 'react' 
import Item from './Item'
let App=()=>{
  let [data,setdata]=useState([])
  let [fdata,setfdata]=useState([])
  let fun=(e)=>{
    setfdata(data.filter((item)=>{
      if (item.userId==e.target.value)
      {
        return item
      }
    }))
  }
  useEffect(()=>{
    fetch("https://dummyjson.com/todos").
    then((res)=>{return res.json()}).then((data)=>{setdata([...data.todos])})
  })
  return(<div>
    <input type='text' onChange={fun}/>
    {fdata.map((item)=><Item data={item}/>)}
  </div>)
}
export default App