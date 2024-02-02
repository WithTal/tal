import { Metadata } from "next"
import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "./SideBarNav"
import { Dispatch, SetStateAction } from "react"


const sidebarNavItems = [
  {
    title: "Intervention"
  },
  {
    title: "Notifications"
  },
  {
    title: "Clinical"
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode,
  setFormIndex: Dispatch<SetStateAction<number>>
}




export default function SettingsLayout({ setFormIndex, children }: SettingsLayoutProps) {
  return (

    <div className=" text-neutral-300 border-neutral-800 space-y-6 p-10 pb-16 md:block">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Set up your settings
        </p>
      </div>

      <Separator className="my-6" />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="-mx-4 lg:w-1/5">
          <SidebarNav setFormIndex={setFormIndex} items={sidebarNavItems} />
        </aside>
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    </div>

  )
}