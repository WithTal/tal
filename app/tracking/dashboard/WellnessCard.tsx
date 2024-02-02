import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { WellnessEntry } from "../WellnessEntry";
import { Dispatch, SetStateAction } from "react";
import { Overview } from "./Overview";

export default function WellnessCard({ wellnessSubmitted, setWellnessSubmitted }: {
    wellnessSubmitted: boolean, setWellnessSubmitted: Dispatch<SetStateAction<boolean>>
}) {
    return (<Card className="col-span-4">
        <CardHeader className="">
            <CardTitle className="w-full flex justify-between">
                <p>
                    Wellnesss
                </p>
                {!wellnessSubmitted ? <WellnessEntry submit={setWellnessSubmitted} />
                    :
                    <p>
                        Submitted!
                    </p>
                }
            </CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
            <Overview />
        </CardContent>
    </Card>)
}