import {
    Card,
    CardContent,

    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "lucide-react"
import MuscleIcon from "../Icons/MuscleIcon"
import OnIcon from "../Icons/OnIcon"



export default function WearablesCard() {
    return (
        <div className="w-full grid gap-4 md:grid-cols-3">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Fitbit Integration <Badge className="ml-2 bg-green-700" >Enabled!</Badge>
                    </CardTitle>

                    <MuscleIcon />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12,000 Steps</div>
                    <p className="text-xs text-muted-foreground">
                        +20.1% from last month
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Aid Sleep <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                    </CardTitle>

                    <OnIcon />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                    <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Cronometer  <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                    </CardTitle>

                    <OnIcon />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                    <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Tings <Badge className="ml-2 bg-red-700" >Not enabled</Badge>
                    </CardTitle>

                    <OnIcon />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl  w-[70%] h-6 bg-black animate-pulse mb-4 font-bold"></div>
                    <p className="text-xs w-[40%] h-4 bg-muted-foreground animate-pulse">

                    </p>
                </CardContent>
            </Card>
        </div>

    )
}