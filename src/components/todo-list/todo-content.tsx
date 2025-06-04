
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

type ToDoContentProps = {
    list: string[],
    handleCheckBox: (item: string) => void; 
}


export const ToDoContent = ({list, handleCheckBox}: ToDoContentProps) => {

    return (
        <div>
            <div className="flex flex-col space-y-4">
                {list.map((item, id) => (
                    <div key={id} className="flex items-center space-x-4">
                        <Checkbox onCheckedChange={() => handleCheckBox(item)} id={`box-${id}`} />
                        <Label htmlFor={`box-${id}`}>
                            {item}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    )
}