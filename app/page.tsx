'use client'

import { useRef, useState } from "react"

interface todo {
  id: string,
  text: string,
  completed: boolean,
}

export default function Home() {
  const [todos, setTodos] = useState<todo[]>([
    {
      id: Math.random().toString(),
      text: 'First Todo',
      completed: false
    },
    {
      id: Math.random().toString(),
      text: 'Second Todo',
      completed: true
    },
    {
      id: Math.random().toString(),
      text: 'Third Todo',
      completed: false
    }
  ])
  const [hideCompleted, setHideCompleted] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const todoDeleteHandler = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos([...updatedTodos])
  }

  const todoCompleteHandler = (id: string) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else return todo
    })
    setTodos([...updatedTodos])
  }

  return (
    <main className="mx-8 my-8 flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-3xl">TODO</h1>
        <button>D</button>
      </div>

      <form 
        className="bg-gray-800 p-4 rounded flex gap-4" 
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          if(inputRef.current) {
            const todo = inputRef.current.value
            setTodos(prev => [...prev, {
              id: Math.random().toString(),
              text: todo,
              completed: false,
            }])
            inputRef.current.value = '' 
          }
      }}>
        <button className="text-gray-500">C</button>  
        <input 
          ref={inputRef} 
          className="text-gray-500 bg-transparent" 
          type="text"
          placeholder="Create a new todo..."
        />
      </form>

      <div className="bg-gray-800 rounded overflow-hidden flex flex-col" >
        {todos
          .filter(todo => {
            if(!hideCompleted) {
              return true
            } else {
              return todo.completed
            }
          })
          .map(todo => {
            return (
              <div key={todo.id} className={`flex gap-4 p-6 border-b-2 border-b-slate-500`}>
                <button className={`bg-slate-700 ${todo.completed ? 'text-gray-500' : 'text-gray-200'}`} onClick={() => todoCompleteHandler(todo.id)}>Done</button>
                <div className="w-full flex justify-between">
                  <p className={`${todo.completed ? 'line-through text-gray-500' : 'no-underline text-gray-200'}`}>{todo.text}</p>
                  <button className={`bg-slate-700 ${todo.completed ? 'text-gray-500' : 'text-gray-200'}`} onClick={() => todoDeleteHandler(todo.id)}>Del</button>
                </div> 
              </div>)
          })
        }
        <div className="flex justify-between p-6">
          {todos.length > 0 
            ? <p>{`${todos.length} items left`}</p>
            : <p>Add Item</p>
          }
          <p>Clear Completed</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={() => setHideCompleted(false)} className="bg-slate-700">Show All</button>
        <button onClick={() => setHideCompleted(true)} className="bg-slate-700">Hide Completed</button>
      </div>
    </main>
  )
}
