import { Check, Trash } from "lucide-react"
import { Label } from "../ui/label"
import { useEffect, useState } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDown, ChevronsDownIcon } from "lucide-react";

type ToDoContentProps = {
    completedList: {
        id: number,
        task: string,
    }[],
    handleDeleteTask: (id: number) => void,
}




export const ToDoHistory = ({completedList, handleDeleteTask}: ToDoContentProps) => {
    const [historyIndex, setHistoryIndex] = useState(0);

    useEffect( () => {
        setHistoryIndex(completedList.length);
    } ,[completedList])
    

    return (
        <div className="w-full">
            <Collapsible className="space-y-5 transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between gap-4 ">
                    <CollapsibleTrigger className="flex items-center space-x-3 cursor-pointer">
                            <h4 className="text-sm font-semibold">
                                History ({historyIndex})
                            </h4>
                            <ChevronsDownIcon />
                            <span className="sr-only">Toggle</span>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent >
                    <div className="flex flex-col space-y-4 w-full">
                        {completedList.map((item, id) => (
                            <div key={id} className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <Check id={`history-box-${id}`} className="text-blue-500"  />
                                    <Label className="" htmlFor={`history-box-${id}`}>
                                        {item.task}
                                    </Label>

                                </div>
                                <Trash color="red" onClick={() => handleDeleteTask(item.id)} size={20} className="cursor-pointer"/>
                            </div>
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>

        </div>
    )
}