import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { RecentSales } from "./recent-sales"

export default function AppInteractionCard({ values }: { values: string[] }) {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>App Interactions</CardTitle>
                <CardDescription>
                    Recent visits!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RecentSales values={values} />
            </CardContent>
        </Card>
    )
}