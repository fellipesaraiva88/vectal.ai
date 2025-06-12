interface TooltipProps {
    name: string;
    children: React.ReactNode;
}

export const ToolTip = ({ name, children }: TooltipProps) => {
    return (
        <div className="relative group">
            {children}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 
                    bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                    after:content-[''] after:absolute after:top-full after:left-1/2 
                    after:-ml-1 after:border-4 after:border-transparent 
                    after:border-t-gray-800">
                {name}
            </span>
        </div>
    )
}