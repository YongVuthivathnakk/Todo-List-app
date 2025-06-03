import { Check } from "lucide-react"
import { Label } from "../ui/label"


type ToDoContentProps = {
    list: string[];
}

export const ToDoHistory = ({list}: ToDoContentProps) => {
    return (
        <div>
            <div className="flex flex-col space-y-4">
                {list.map((item, id) => (
                    <div key={id} className="flex items-center space-x-4">
                        <Check id={`history-box-${id}`} />
                        <Label htmlFor={`history-box-${id}`}>
                            {item}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    )
}