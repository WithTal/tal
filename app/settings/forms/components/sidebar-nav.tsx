"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react"



interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    title: string
  }[],
  setFormIndex: Dispatch<SetStateAction<number>>
}

export function SidebarNav({ className, setFormIndex, items, ...props }: SidebarNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
        className
      )}
      {...props}
    >
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setFormIndex(index)}
          // href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            index === -1
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}