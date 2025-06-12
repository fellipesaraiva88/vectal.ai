import { User2Icon } from "lucide-react";
import Image from "next/image";

export interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const MessageComponent: React.FC<{ message: Message }> = ({ message }) => (
  <div
    className={`flex ${
      message.sender === "user" ? "justify-end" : "justify-start"
    } mb-4`}
  >
    {message.sender === "ai" && (
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#282828] mr-2">
        <Image
          src="/vectal.svg"
          alt="AI logo"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </div>
    )}
    <div
      className={`max-w-[70%] rounded-lg p-3 ${
        message.sender === "user"
          ? "bg-[#282828] text-white"
          : "bg-[#282828] text-white"
      }`}
    >
      <p className="text-sm md:text-base whitespace-normal break-words">
        {message.text}
      </p>
    </div>
    {message.sender === "user" && (
      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-[#282828] ml-2">
        <User2Icon className="h-6 w-6" />
      </div>
    )}
  </div>
);

export default MessageComponent;
