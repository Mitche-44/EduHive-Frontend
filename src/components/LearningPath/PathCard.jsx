import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function PathCard({ title, image, author, progress = 0 }) {
  return (
    <Card className="w-full h-[220px] shadow-md hover:shadow-lg transition-all rounded-xl overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-[100px] object-cover"
      />
      <CardContent className="p-4 space-y-3">
        <Button variant="link" className="p-0 h-auto text-blue-600 text-sm">
          Explore more…
        </Button>

        <h3 className="text-md font-semibold leading-tight line-clamp-1">{title}</h3>

        <Progress value={progress} className="h-1 w-full rounded-full [&>div]:bg-[#007AFF]" />

        <div className="flex items-center gap-2 pt-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src={author.image} />
            <AvatarFallback>
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .slice(0, 2)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author.name}</p>
            <p className="text-xs text-muted-foreground">{author.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
