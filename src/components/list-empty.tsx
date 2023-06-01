import {ClipboardList} from "lucide-react"

export function ListEmpty() {
  return (
    <div class="flex flex-1 border-t rounded-lg border-neutral-800 flex-col gap-y-4 items-center justify-center">
      {/* @ts-ignore */}
      <ClipboardList className="text-neutral-600 w-14 h-14" />
      <div>
        <p class="font-bold text-neutral-100">Você ainda não tem tarefas cadastradas<br/> <span class="font-normal">Crie tarefas e organize seus itens a fazer</span></p>
      </div>
    </div>
  )
}