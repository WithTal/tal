import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Overview } from "../components/overview"


export default function ConsumptionCard() {
    return (
        <Card className="col-span-4">
            <CardHeader className="">
                <CardTitle className="w-full flex justify-between">
                    <p>
                        Consumption (hours per day)
                    </p>
                </CardTitle>
            </CardHeader>
            <div className="w-full h-[400px]">
                <Overview />
            </div>
        </Card>
    )
}