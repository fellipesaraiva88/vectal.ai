"use client"

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import { ToolTip } from "./tooltip"
import { Circle, Cone } from "lucide-react"
import { useState, useEffect } from "react"
import UserContextForm from "./user-context-form"

export const UserContextComponent = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const hasSeen = localStorage.getItem("hasSeenContext")
    if (!hasSeen) {
      setOpen(true)
      localStorage.setItem("hasSeenContext", "true")
    }
  }, [])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => setOpen(true)}
        >
          <ToolTip name="User Context">
            <Cone className="text-black size-5" />
          </ToolTip>
        </button>
      </AlertDialogTrigger>

      <AlertDialogContent className="bg-[#262626] w-full max-w-3xl">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <p>User Context</p>
                <Cone className="text-white size-5" />
              </div>
              <div
                className="cursor-pointer text-white"
                onClick={() => setOpen(false)}
              >
                ✕
              </div>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div className="flex items-center gap-2">
              <Circle className="text-green-500 fill-green-500 size-1.5" />
              <p className="text-sm text-gray-400">
                The more context you provide, the more our AI Agents can help
                you.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <UserContextForm setShowComponent={setOpen} />
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default UserContextComponent