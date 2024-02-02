import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function RecentSales({ values }: { values: string[] }) {

  const descriptions = ["Was this worth it?", "Are you having fun?", "Cool website!", "Interesting"]
  return (
    <div className="space-y-8">
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/01.png" alt="Avatar" />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{values[0]}</p>
          <p className="text-sm text-muted-foreground">
            {descriptions[0]}
          </p>
        </div>
        <div className="ml-auto font-medium">22x today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="flex h-9 w-9 items-center justify-center space-y-0 border">
          <AvatarImage src="/avatars/02.png" alt="Avatar" />
          <AvatarFallback>JL</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{values[1]}</p>
          <p className="text-sm text-muted-foreground"> {descriptions[0]}</p>
        </div>
        <div className="ml-auto font-medium">5x today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/03.png" alt="Avatar" />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{values[2]}</p>
          <p className="text-sm text-muted-foreground">
            {descriptions[1]}
          </p>
        </div>
        <div className="ml-auto font-medium">1x today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/04.png" alt="Avatar" />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{values[3]}</p>
          <p className="text-sm text-muted-foreground">{descriptions[2]}</p>
        </div>
        <div className="ml-auto font-medium">24x today</div>
      </div>
      <div className="flex items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/avatars/05.png" alt="Avatar" />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{values[4]}</p>
          <p className="text-sm text-muted-foreground">{descriptions[3]}</p>
        </div>
        <div className="ml-auto font-medium">1x today</div>
      </div>
    </div>
  )
}
