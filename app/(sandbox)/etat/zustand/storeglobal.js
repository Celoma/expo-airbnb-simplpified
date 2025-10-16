import { create } from 'zustand'

export const useTaskStore = create((set) => ({
    tasks: [],
    addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
    removeTask: (task) => set((state) => ({ tasks: state.tasks.filter(t => t !== task) })),
    removeAll: () => set({ tasks: [] }),
}))