'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Glasses } from "lucide-react";
import { toast } from "sonner";

export default function HomePage() {
  return (
    <div className="min-h-space-y-8 flex flex-col items-center justify-center p-4">
        {/* User Input */}
        <div className="flex mb-2 text-gray-500">
          <Bug className="mr-2"/>
          Paste your buggy code here
        </div>

        <div className="p-2 w-[450px] flex flex-col">
          <form className="mb-6">
              <Textarea placeholder="Drop your code here!"/>
              <Button className="mt-2 w-full bg-blue-600 hover:bg-blue-500">
                <Glasses />
                Analyse Now
              </Button>
          </form>
        </div>
    </div>
  )
}