import { RotateCcw, Gem, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ToolTip } from "@/components/global/task-list/tooltip"
import { useClerk } from "@clerk/nextjs"

export const ChatInterfaceNavBar = ({onClearChat}: {onClearChat: () => void}) => {
    const { signOut, user } = useClerk()
    
    const handleLogout = async () => {
        await signOut()
        window.location.href = '/'
    }

    const handleUpgradeClick = () => {
        const email = user?.primaryEmailAddress?.emailAddress
        const url = `/pricing${email ? `?email=${encodeURIComponent(email)}` : ''}`
        window.open(url, '_blank')
    }

    return (
        <div className="p-5 gap-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="text-xs text-gray-600">v38</p>
                    <ToolTip name="Clear Chat">
                        <RotateCcw 
                            className="text-gray-600 size-4 hover:text-white cursor-pointer"
                            onClick={onClearChat}
                        />
                    </ToolTip>                
                </div>
                <Button 
                    className="bg-blue-600 hover:bg-blue-600 transition-transform duration-200 hover:scale-105"
                    onClick={handleUpgradeClick}
                >
                    <Gem className="text-white size-4 mr-2"/>
                    <span className="text-white text-sm">Upgrade to Pro</span>
                </Button>
                <ToolTip name="Logout">
                    <ArrowRight className="text-gray-600 size-4 hover:text-white cursor-pointer"
                        onClick={handleLogout}
                    />
                </ToolTip>
            </div>  
        </div>
    )
}