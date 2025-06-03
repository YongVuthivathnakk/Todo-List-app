"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input";
import { ToDoContent } from "./todo-content";
import { ToDoHistory } from "./todo-history";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDown, ChevronsDownIcon } from "lucide-react";

export const ToDoCard = () => {

    const [todo, setTodo] = useState<string>("");
    const [list, setList] = useState<string[]>([]);

    const handleAddTodo = () => {
        if (todo.trim() !== "") {
            setList(prevList => [...prevList, todo]);
            setTodo(""); // Clear todo Input
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo();
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
                <ToDoContent list={list} />
            </CardContent>
            <CardFooter>
                <Collapsible>
                    <div className="flex items-center justify-between gap-4 px-4">
                        <h4 className="text-sm font-semibold">
                            @peduarte starred 3 repositories
                        </h4>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" className="size-8">
                                <ChevronsDownIcon />
                                <span className="sr-only">Toggle</span>
                            </Button>
                        </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent>
                        <ToDoHistory list={list} />
                    </CollapsibleContent>
                </Collapsible>
            </CardFooter>
        </Card>
    )
}