import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Dispatch, SetStateAction, useState } from "react"

export function WellnessEntry({ submit }: {
    submit: Dispatch<SetStateAction<boolean>>
}) {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();


        const target = event.target as HTMLFormElement; // Type assertion here
        const formData = new FormData(target);
        const happinessLevel = formData.get('happiness'); // 'happiness' is the name attribute of your input
        const tirednessLevel = formData.get('tiredness'); // 'tiredness' is the name attribute of your input
        const notes = formData.get('notes'); // 'notes' is the name attribute of your textarea

        console.log(`Happiness Level: ${happinessLevel}, Tiredness Level: ${tirednessLevel}, Notes: ${notes}`);
        submit(true)
        setOpen(false)

    }
    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {/* <button className=" "> */}




                <Button className="animate-bounce hover:underline" >
                    Today's entry!</Button>
                {/* <button className=" animate-bounce hover:underline">
                                                Today's entry!

                                            </button>

        <Button variant="outline">
            Edit Profile</Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>How are you today?</DialogTitle>
                    <DialogDescription>
                        It's a beautiful day. How are you feeling on a scale of 1-10?
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="happy levels" className="text-right">
                                Happiness
                            </Label>
                            <Input
                                required
                                min={0}
                                max={10}
                                placeholder="happy levels (1-10)"
                                id="happy levels"
                                type="number"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="tired levels" className="text-right">
                                Tiredness
                            </Label>
                            <Input
                                required
                                min={0}
                                max={10}
                                placeholder="tired levels (1-10)"
                                id="tired levels"
                                type="number"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="notes" className="text-right">
                                Notes
                            </Label>
                            <Textarea
                                id="notes"
                                // defaultValue="@peduarte"
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save Daily Update</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
