import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useEffect, useState } from "react";

export function RecentSales() {
  const [lastLoginDate, setLastLoginDate] = useState(new Date().toLocaleDateString());
  const [wellbeingLevel, setWellbeingLevel] = useState(Math.floor(Math.random() * 10) + 1);
  const [wellbeingChange, setWellbeingChange] = useState(Math.floor(Math.random() * 10) + 1);
  const [anxietyLevel, setAnxietyLevel] = useState(Math.floor(Math.random() * 10) + 1);
  const [anxietyChange, setAnxietyChange] = useState(Math.floor(Math.random() * 10) + 1);
  const [newsConsumption, setNewsConsumption] = useState(Math.floor(Math.random() * 10) + 1);
  const [newsConsumptionChange, setNewsConsumptionChange] = useState(Math.floor(Math.random() * 10) + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setWellbeingLevel(Math.floor(Math.random() * 10) + 1);
      setWellbeingChange(Math.floor(Math.random() * 10) + 1);
      setAnxietyLevel(Math.floor(Math.random() * 10) + 1);
      setAnxietyChange(Math.floor(Math.random() * 10) + 1);
      setNewsConsumption(Math.floor(Math.random() * 10) + 1);
      setNewsConsumptionChange(Math.floor(Math.random() * 10) + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="User Avatar" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">User ID: 12345</p>
          <p className="text-sm text-muted-foreground">
            Last Logged In: {lastLoginDate}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Wellbeing Level</p>
          <p className="text-sm text-muted-foreground">{wellbeingLevel}</p>
        </div>
        <div className="ml-auto font-medium">Change: {wellbeingChange}</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Anxiety Level</p>
          <p className="text-sm text-muted-foreground">{anxietyLevel}</p>
        </div>
        <div className="ml-auto font-medium">Change: {anxietyChange}</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">News Consumption</p>
          <p className="text-sm text-muted-foreground">{newsConsumption}</p>
        </div>
        <div className="ml-auto font-medium">Change: {newsConsumptionChange}</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Media (TV/Movies)</p>
          <p className="text-sm text-muted-foreground">{wellbeingLevel}</p>
        </div>
        <div className="ml-auto font-medium">Change: {wellbeingChange}</div>
      </div>
      <div className="flex items-center">
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">Responsiveness</p>
          <p className="text-sm text-muted-foreground">{anxietyLevel}</p>
        </div>
        <div className="ml-auto font-medium">Change: {anxietyChange}</div>
      </div>
    </div>
  )
}
