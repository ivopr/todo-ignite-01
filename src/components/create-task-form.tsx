import {PlusCircle} from "lucide-react"
import { TargetedEvent } from "preact/compat"

interface CreateTaskFormProps {
  handleCreateTask: (_: TargetedEvent<HTMLFormElement>) => void
}

export function CreateTaskForm({handleCreateTask}: CreateTaskFormProps) {
  return (
    <form onSubmit={handleCreateTask} class="px-4 lg:px-0 mx-auto h-14 flex gap-x-2 max-w-3xl w-full -translate-y-1/2">
      <input id="taskTitle" name="taskTitle" class="h-full text-neutral-50 outline-none placeholder:text-neutral-300 w-full rounded-lg p-4 bg-neutral-700" placeholder="Adicione uma nova tarefa" />
      <button type="submit" class="flex gap-x-2 rounded-lg p-4 text-white font-bold bg-blue-600 h-full items-center justify-center">
        Criar <PlusCircle />
      </button>
    </form>
  )
}