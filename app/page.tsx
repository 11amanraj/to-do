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
          }
        }}>
        <input ref={inputRef} className="text-blue-900" type="text"/>
      </form>

      <div>
        {todos.map(todo => <p key={todo.id}>{todo.text}</p>)}
      </div>
    </main>
  )
}
