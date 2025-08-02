import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";

export default function ModuleItem({
  id,
  icon,
  title,
  description,
  progress = 0,
  details,
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={id}>
        <AccordionTrigger className="py-4 border-b no-underline hover:no-underline">
          <div className="flex items-start space-x-4 w-full text-left">
            {/* Icon */}
            <div className="w-10 h-10 shrink-0">
              {typeof icon === "string" ? (
                <img
                  src={icon}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              ) : (
                icon
              )}
            </div>

            {/* Text content */}
            <div className="flex flex-col w-full">
              <h3 className="font-semibold text-base">{title}</h3>
              <p className="text-sm text-muted-foreground">{description}</p>

              <div className="mt-2 w-1/2"> {/* Or use w-1/3, w-[120px], etc. */}
  <Progress
    value={progress}
    className="h-1 rounded-full [&>div]:bg-[#007AFF]"
  />
</div>
            </div>
          </div>
        </AccordionTrigger>

        <AccordionContent className="text-sm text-muted-foreground px-2 pb-4">
          {details || "More info will be available soon."}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}


