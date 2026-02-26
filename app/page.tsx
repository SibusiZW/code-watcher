'use client';

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Check, Glasses } from "lucide-react";

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
              <Textarea placeholder="Drop your code here!" required/>
              <Button
                className="mt-2 w-full bg-blue-600 hover:bg-blue-500"
                type="submit"
              >
                <Glasses />
                Analyse Now
              </Button>
          </form>
        </div>

        <div className="flex mb-2 text-gray-500">
          <Check className="mr-2"/>
          Your review goes here
        </div>

        <div className="p-2 flex flex-col w-[450px]">
          <Textarea readOnly/>
        </div>
    </div>
  )
}