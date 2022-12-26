import {useEffect, useState} from "react";
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "45e010e4-6515-4f44-948c-de88f0fc6daf"
    }
}

export const GetTodoList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.get("https://social-network.samuraijs.com/api/1.0/todo-lists", settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}


export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        axios.post("https://social-network.samuraijs.com/api/1.0/todo-lists", {title: "Ilya User"}, settings)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>( null)
    useEffect(()=>{
        axios.delete("https://social-network.samuraijs.com/api/1.0/todo-lists/b16c0788-25f7-4764-ab52-ea447b943539", settings)
            .then((res)=>{
                setState(res.data)
            })
    },[])
    return<div>{JSON.stringify(state)}</div>
}

export const UpdateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        axios.put("https://social-network.samuraijs.com/api/1.0/todo-lists", {title: "Ilya User"}, settings)
            .then((res)=>{
                setState(res.data)
            })
    },[])
    return<div>{JSON.stringify(state)}</div>
}