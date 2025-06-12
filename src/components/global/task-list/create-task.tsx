import { Plus } from "lucide-react"
import { ToolTip } from "./tooltip"
import { 
    AlertDialog, 
    AlertDialogTrigger, 
    } from "@/components/ui/alert-dialog"
import { useState } from "react";
import AddItemsComponent from "@/components/global/add-item";
export const CreateTaskComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
            <button className="text-black font-bold text-2xl" onClick={() => setIsOpen(true)}>
            <ToolTip name="Create Task">
                <Plus className='text-black size-5'/>
            </ToolTip>
        </button>
            </AlertDialogTrigger>
            <AddItemsComponent onClose={() => setIsOpen(false)} onSubmit={() => setIsOpen(false)}/>
        </AlertDialog>
        
    )
}
