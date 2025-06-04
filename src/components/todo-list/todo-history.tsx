import { Check } from "lucide-react"
import { Label } from "../ui/label"
import { useEffect, useState } from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsDown, ChevronsDownIcon } from "lucide-react";

type ToDoContentProps = {
    completedList: string[];
}




export const ToDoHistory = ({completedList}: ToDoContentProps) => {
    const [historyIndex, setHistoryIndex] = useState(0);

    useEffect( () => {
        setHistoryIndex(completedList.length);
        console.log(completedList);
    } ,[completedList])
    
    return (
        <div>
            <Collapsible>
                <div className="flex items-center justify-between gap-4">
                    <CollapsibleTrigger className="flex items-center">
                            <h4 className="text-sm font-semibold">
                                History ({historyIndex})
                            </h4>
                            <ChevronsDownIcon />
                            <span className="sr-only">Toggle</span>
                    </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                    <div className="flex flex-col space-y-4">
                        {completedList.map((item, id) => (
                            <div key={id} className="flex items-center space-x-4">
                                <Check id={`history-box-${id}`} />
                                <Label htmlFor={`history-box-${id}`}>
                                    {item}
                                </Label>
                            </div>
                        ))}
                    </div>
                </CollapsibleContent>
            </Collapsible>

        </div>
    )
}