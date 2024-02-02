"use client"


import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import { Dispatch, SetStateAction } from "react"
import { cn } from "@/lib/utils"


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
            "hover:bg-transparent hover:underline hover:text-neutral-500 justify-start"
          )}
        >
          {item.title}
        </button>
      ))}
    </nav>
  )
}