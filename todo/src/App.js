import './App.css';
import { useState } from 'react'
import Swal from 'sweetalert2'
function App() {
  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const date = new Date()
  const today = days[date.getDay()]
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {today} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {
          if (toDo == '') {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Empty Fields!', 
            })

          } else {
            setTodos([...toDos, { text: toDo, status: false, id: Date.now() }])
          }
        }} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {
          toDos.map((obj) => {
            return (<div className="todo">
              <div className="left">
                <input onChange={(e) => {
                  // console.log("target", e.target.value); 
                  // console.log(obj); 
                  setTodos(toDos.filter(obj2 => {
                    if (obj2.id === obj.id) {
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }}
                  value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times" onClick={() => {
                  if (window.confirm('Are you sure to delete this')) {
                    setTodos(toDos.filter(obj2 => {
                      console.log("obj2", obj2.id);
                      console.log("obj", obj.id);
                      if (obj2.id !== obj.id) {
                        console.log(1);
                        return obj2
                      }
                      return null
                    }))
                  }
                }}></i> 
              </div>
            </div>
            )
          })
        }
        {
          toDos.map((e) => {
            if (e.status) {
              return <h1>{e.text}</h1>
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
