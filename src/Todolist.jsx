import React from 'react'


export const Todolist =()=>{
  const [val,setval] = React.useState("default")
  const [Todo,setTodo] = React.useState([]);
  const output =()=>{
    setTodo([...Todo,{
      id:Todo.length,
      text:val
    }])
    let val=""
  }
  const data = (e)=>{
    setval(e.target.value)
  }

  console.log(val)
  console.log(Todo)



  return (
    <div>Todolist

      <input type="text" value={val}  onChange={data} />
      <button onClick={output}>add</button>


      <div>
        {
          Todo.map((res)=>

          <div>
            
              {console.log("res",res)}
              <h1>{res.text}</h1>
            
          </div>)
        }
      </div>
    </div>
  )
}


 

