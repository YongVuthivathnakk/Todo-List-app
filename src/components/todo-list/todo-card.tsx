"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input";
import { ToDoContent } from "./todo-task";
import { ToDoHistory } from "./todo-history";
import { Heading3 } from "lucide-react";


export const ToDoCard = () => {

    const [todo, setTodo] = useState("");
    const [list, setList] = useState<{id: number, task: string}[]>([]);
    const [completedList, setCompletedList] = useState<{id: number, task: string}[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo();
    }
    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setList(prevList => [...prevList,
                {id: Date.now() + Math.random(), task: todo}
            ]);
            setTodo(""); // Clear todo Input
        }
    }


    const handleCheckBox = (id: number) => {
        const item = list.find(todo => todo.id === id);
        if(item && !completedList.some(t => t.id === id)) {
            setCompletedList((prevList => [...prevList, item]));
            setList(prevList => prevList.filter(todo => todo.id !== id))
        }
    }

    const handleDeleteTask = (id: number) => {
        setCompletedList(prev => prev.filter(item => item.id !== id))
    }

    return (
        <Card className="w-60 sm:w-100 lg:w-150">
            <CardHeader className="flex flex-col">
                <CardTitle className="text-2xl" >
                    Todo List
                </CardTitle>
                <CardDescription className="mb-4">
                    My task
                </CardDescription>
                <CardAction className="self-center">
                    <form onSubmit={handleSubmit} className="flex space-x-3">
                        <Input
                            type="text"
                            onChange={e => setTodo(e.target.value)}
                            placeholder="Enter your task"
                            value={todo}
                        />
                        <Button type="submit">
                            Add
                        </Button>
                    </form>
                </CardAction>
            </CardHeader>
            <div className="h-[1px] bg-gray-200 mx-6" />
            <CardContent>

                { list.length > 0 ? 
                
                <ToDoContent list={list} handleCheckBox={handleCheckBox} /> : 
                <div className="flex flex-col justify-center items-center">
                    <h3>You Completed all your task</h3>
                    <p className="text-gray-500 opacity-50">Great Job</p>
                </div>}
            </CardContent>
            <CardFooter>
                {completedList.length > 0 && <ToDoHistory completedList={completedList} handleDeleteTask={handleDeleteTask} />}
            </CardFooter>
        </Card>
    )
}