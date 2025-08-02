import { useState } from "react";
import ModuleItem from "@/components/LearningPath/ModuleItem";
import PathCard from "@/components/LearningPath/PathCard";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input"; // 

import modules from "../../assets/data/modules";
import paths from "../../assets/data/paths";

export default function Path() {
  const [moduleSearch, setModuleSearch] = useState("");
  const [pathSearch, setPathSearch] = useState("");

  const filteredModules = modules.filter((mod) =>
    mod.title.toLowerCase().includes(moduleSearch.toLowerCase())
  );

  const filteredPaths = paths.filter((path) =>
    path.title.toLowerCase().includes(pathSearch.toLowerCase())
  );

  return (
    <div className="px-6 py-10 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold">Learning Path</h1>
        <p className="text-muted-foreground">
          Gain the skills you need to do independent project.
        </p>
      </div>

      <Tabs defaultValue="modules" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="modules">Modules</TabsTrigger>
          <TabsTrigger value="paths">Paths</TabsTrigger>
        </TabsList>

        {/* MODULES */}
        <TabsContent value="modules" className="space-y-4">
          <div>
            <h2 className="text-xl font-bold mb-1">📚 MODULES</h2>
            <p className="text-sm text-muted-foreground mb-2 max-w-xl">
              We pare down complex topics to their key practical components...
              <a href="#" className="underline"> Learn more about courses.</a>
            </p>

            {/* 🔍 Search Bar */}
            <Input
              type="text"
              placeholder="Search modules..."
              value={moduleSearch}
              onChange={(e) => setModuleSearch(e.target.value)}
              className="mb-4 max-w-md"
            />

            {/* Filtered Modules */}
            <div className="space-y-2">
              {filteredModules.length > 0 ? (
                filteredModules.map((mod) => (
                  <ModuleItem key={mod.id} {...mod} />
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No matching modules.</p>
              )}
            </div>
          </div>
        </TabsContent>

        {/* PATHS */}
        <TabsContent value="paths" className="space-y-4">
          <h2 className="text-xl font-bold mb-2">🛣️ Paths</h2>

          {/* 🔍 Search Bar */}
          <Input
            type="text"
            placeholder="Search paths..."
            value={pathSearch}
            onChange={(e) => setPathSearch(e.target.value)}
            className="max-w-md"
          />

          {/* Filtered Paths in Grid */}
          <ScrollArea className="h-[70vh] pr-2">
            {filteredPaths.length > 0 ? (
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredPaths.map((path, i) => (
                  <PathCard key={i} {...path} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground p-2">
                No matching paths found.
              </p>
            )}
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}