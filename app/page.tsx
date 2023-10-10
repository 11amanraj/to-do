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
    }
  ])
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
    <main>
      <h1 className="text-3xl">To-Do App</h1>

      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
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
        <input ref={inputRef} className="text-blue-900" type="text"/>
      </form>

      <div>
        {todos.map(todo => {
          return (
            <div key={todo.id} className={`flex gap-4 ${todo.completed ? 'bg-red-800' : 'bg-slate-800'}`}>
              <p onClick={() => todoDeleteHandler(todo.id)}>Del</p>
              <p onClick={() => todoCompleteHandler(todo.id)}>Done</p>
              <p>{todo.text}</p>
            </div>)
        })}
      </div>
    </main>
  )
}
