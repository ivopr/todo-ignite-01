import { Trash } from "lucide-react"

interface ListItemProps {
  task: Task
  toggleIsCompleted: (_: Date) => void
  deleteTask: (_: Date) => void
}

export function ListItem({deleteTask, task, toggleIsCompleted}: ListItemProps) {
  return (
    <li class="bg-neutral-600 space-x-3 flex p-4 rounded-lg">
      <input
        className="h-5 w-5 rounded-full border-blue-500 bg-transparent focus:ring-1 focus:ring-blue-400 focus:ring-offset-neutral-600"
        id="isPublic"
        name="isPublic"
        onClick={() => toggleIsCompleted(task.createdAt)}
        value={task.isCompleted ? 1 : 0}
        type="checkbox"
      />

      <p class={`text-neutral-200 w-full ${task.isCompleted ? "line-through opacity-60" : ""}`}>{task.title}</p>

      <button onClick={() => deleteTask(task.createdAt)} class="text-neutral-300">
        <Trash />
      </button>
    </li>
  )
}