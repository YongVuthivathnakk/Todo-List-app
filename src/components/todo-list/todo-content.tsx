
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

type ToDoContentProps = {
    list: string[];
}


export const ToDoContent = ({list}: ToDoContentProps) => {

    return (
        <div>
            <div className="flex flex-col space-y-4">
                {list.map((item, id) => (
                    <div key={id} className="flex items-center space-x-4">
                        <Checkbox id={`box-${id}`} />
                        <Label htmlFor={`box-${id}`}>
                            {item}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    )
}