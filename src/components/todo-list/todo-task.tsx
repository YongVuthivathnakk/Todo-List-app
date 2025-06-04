
import { Checkbox } from "../ui/checkbox"
import { Label } from "../ui/label"

type ToDoContentProps = {
    list: {
        id: number,
        task: string
    }[],
    handleCheckBox: (id: number) => void; 
}


export const ToDoContent = ({list, handleCheckBox}: ToDoContentProps) => {

    return (
        <div>
            <div className="flex flex-col space-y-4">
                {list.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 rounded-md border px-4 py-3 text-sm hover:bg-gray-50">
                        <Checkbox onCheckedChange={() => handleCheckBox(item.id)} id={`box-${item.id}` } className="cursor-pointer"/>
                        <Label htmlFor={`box-${item.id}`}>
                            {item.task}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    )
}