import { useEffect, useState } from 'preact/hooks'
import { TargetedEvent } from "preact/compat"
import logo from "./assets/logo.svg"
import './index.css'
import { ListHeader } from './components/list-header'
import { ListItem } from './components/list-item'
import { CreateTaskForm } from './components/create-task-form'
import { ListEmpty } from './components/list-empty'
import cookie from "js-cookie"

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const taskCookieKey = "todo_items"

  useEffect(() => {
    const cookieData = cookie.get(taskCookieKey)
    if (tasks.length === 0 && cookieData) {
      setTasks(JSON.parse(cookieData))
    }
  }, [])

  function handleCreateTask(event: TargetedEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const title = formData.get('taskTitle') as string

    if (!title) {
      return
    }

    const newTask: Task = {
      title,
      isCompleted: false,
      createdAt: new Date()
    }

    const titleInput = document.getElementById('taskTitle')

    if (titleInput) {
      // @ts-ignore
      titleInput.value=""
    }

    const newTasks = [...tasks, newTask]

    setTasks(newTasks)

    cookie.set(taskCookieKey, JSON.stringify(newTasks), {path: "/", expires: 60 * 60 * 24 * 30 * 12})

  }

  function toggleIsCompleted(taskDate: Date) {
    const newTasks = [...tasks]

    const task = newTasks.find(t => t.createdAt === taskDate)

    if (!task) {
      return
    }

    task.isCompleted = !task.isCompleted

    setTasks(newTasks)
  }

  function deleteTask(taskDate: Date) {
    const newTasks = tasks.filter(t => t.createdAt !== taskDate)

    setTasks(newTasks)

    cookie.set(taskCookieKey, JSON.stringify(newTasks), {path: "/", expires: 60 * 60 * 24 * 30 * 12})
  }

  return (
    <div class="h-screen flex flex-col bg-neutral-900 overflow-hidden">
      <div class="bg-neutral-950 h-52 items-center justify-center flex">
        <img src={logo} alt="ToDo" />
      </div>

      <CreateTaskForm handleCreateTask={handleCreateTask} />

      <div class="max-w-3xl flex flex-col px-4 lg:px-0 flex-1 lg:mt-10 w-full mx-auto space-y-6">
        <ListHeader tasks={tasks} />

        {tasks.length > 0 ? (
          <ul class="overflow-y-auto space-y-2">
            {tasks.map(task => (
              <ListItem
                key={task.createdAt}
                deleteTask={deleteTask}
                toggleIsCompleted={toggleIsCompleted}
                task={task} 
              />
            ))}
          </ul>
        ) : (
          <ListEmpty />
        )}
      </div>
    </div>
  )
}
