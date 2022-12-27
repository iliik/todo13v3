import axios from "axios/index";

export const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "45e010e4-6515-4f44-948c-de88f0fc6daf"
    }
}
export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}

type ResponseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}


export const todolistAPI = {
    getTodolist() {
        const promise =
            axios.get<TodolistType[]>("https://social-network.samuraijs.com/api/1.0/todo-lists", settings)
        return promise
    },
    createTodolist(title: string) {
        const promise =
            axios.post<ResponseType<{ item: TodolistType }>>("https://social-network.samuraijs.com/api/1.0/todo-lists", {title: title}, settings)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise =
            axios.delete<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.0/todo-lists/${todolistId}`, settings)
        return promise
    },
    updateTodolist(id: string, title: string) {
        const promise =
            axios.put<ResponseType<{}>>(`https://social-network.samuraijs.com/api/1.0/todo-lists${id}`, {title: title}, settings)
        return promise
    }

}