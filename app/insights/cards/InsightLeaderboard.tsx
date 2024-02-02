import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { RecentSales } from "../components/recent-sales"

export default function InsightLeaderboard() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Events</CardTitle>
                <CardDescription>
                    What you've been up to!
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RecentSales />
            </CardContent>
        </Card>
    )
}