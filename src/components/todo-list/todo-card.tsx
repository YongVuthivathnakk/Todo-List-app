"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input";
import { ToDoContent } from "./todo-content";
import { ToDoHistory } from "./todo-history";
import { Heading3 } from "lucide-react";


export const ToDoCard = () => {

    const [todo, setTodo] = useState<string>("");
    const [list, setList] = useState<string[]>([]);
    const [completedList, setCompletdList] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo();
    }
    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setList(prevList => [...prevList, todo]);
            setTodo(""); // Clear todo Input
        }
    }


    const handleCheckBox = (item: string) => {
        if(!completedList.includes(item)) {
            setCompletdList((prevList => [...prevList, item]));
            setList(prevList => prevList.filter(todo => todo !== item))
        }
    }


    return (
        <Card className="w-150">
            <CardHeader className="flex flex-col">
                <CardTitle className="text-2xl" >
                    Todo List
                </CardTitle>
                <CardDescription className="mb-4">
                    Your Current to do task
                </CardDescription>
                <CardAction className="self-center">
                    <form onSubmit={handleSubmit} className="flex space-x-3">
                        <Input onChange={e => setTodo(e.target.value)} placeholder="Enter your task" />
                        <Button type="submit">
                            Add
                        </Button>
                    </form>
                </CardAction>
            </CardHeader>
            <div className="h-[1px] bg-gray-200 mx-6" />
            <CardContent>

                { list.length > 0 ? <ToDoContent list={list} handleCheckBox={handleCheckBox} /> : <h3 className="text-gray-500 opacity-50">No task available</h3>}
                {/* TODO: fix the check box and the histroy + the bug when cheking the task that have the same name */}
            </CardContent>
            <CardFooter>
                <ToDoHistory completedList={completedList} />
            </CardFooter>
        </Card>
    )
}