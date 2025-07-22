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


// const modules = [
//   {
//     id: "python",
//     icon: "/icons/python.svg",
//     title: "Python",
//     description: "Learn the most important language for data science.",
//     progress: 60,
//     details:
//       "In this module, you’ll explore Python syntax, variables, loops, and basic data structures.",
//   },
//   {
//     id: "intro-ml",
//     icon: "/icons/ml.svg",
//     title: "Intro to Machine Learning",
//     description:
//       "Learn the core ideas in machine learning and build your first model.",
//     progress: 40,
//     details:
//       "This module covers supervised learning, classification, and model evaluation.",
//   },
//   {
//     id: "pandas",
//     icon: "/icons/pandas.svg",
//     title: "Pandas",
//     description:
//       "Solve short hands-on challenges to perfect your data manipulation skills.",
//     progress: 75,
//     details:
//       "Covers DataFrames, filtering, grouping, and reshaping data for analysis.",
//   },
// ];

// <main className="max-w-3xl mx-auto p-8 space-y-6">
//       <h1 className="text-3xl font-bold">Modules</h1>
//       <p className="text-muted-foreground text-sm">
//         Click to expand any module and see more info.
//       </p>

      
//       <div className="space-y-4">
//         {modules.map((mod) => (
//           <ModuleItem key={mod.id} {...mod} />
//         ))}
//       </div>
//     </main>