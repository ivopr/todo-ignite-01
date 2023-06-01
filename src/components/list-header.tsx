interface ListHeaderProps {
  tasks: Task[]
}

export function ListHeader({tasks}: ListHeaderProps) {
  const completedTasksCount = tasks?.reduce((pval, task) => {
    if (task.isCompleted) {
      return pval + 1
    }
    return pval
  }, 0)

  return (
    <div class="flex justify-between">
      <h2 class="text-blue-400 font-bold">Tarefas criadas <span class="rounded-full px-2 bg-neutral-800 text-neutral-100">{tasks.length}</span></h2>
      <h2 class="text-violet-400 font-bold">Concluídas <span class="rounded-full px-2 bg-neutral-800 text-neutral-100">{completedTasksCount} de {tasks?.length}</span></h2>
    </div>
  )
}