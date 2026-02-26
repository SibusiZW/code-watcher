'use client';

import generateResponse from "@/components/server/gemini";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Bug, Check, Loader2 } from "lucide-react";
import React, { useState } from "react";

export default function HomePage() {

  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [prompt, setPrompt] = useState('');

  function handleClear() {
    setResponse("");
    setPrompt("");
  }

  async function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    setLoading(true);

    const res = await generateResponse(prompt);
    if (res) setResponse(res);
    else setResponse("error");

    setLoading(false);

  }

  return (
    <div className="min-h-space-y-8 flex flex-col items-center justify-center p-4">
        {/* User Input */}
        <div className="flex mb-2 text-gray-500">
          <Bug className="mr-2"/>
          Paste your buggy code here
        </div>

        <div className="p-2 w-[450px] flex flex-col">
          <form onSubmit={handleSubmit} className="mb-6">
              <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Drop your code here!" required/>
              <Button
                className="mt-2 mb-2 w-full bg-blue-600 hover:bg-blue-500"
                type="submit"
              >
                
                {(loading) ?  <Loader2 className="animate-spin"/>: "Analyse Now"}
              </Button>
          </form>

          <Button onClick={() => handleClear()} variant={'destructive'} className="w-full">
            Clear fields
          </Button>
        </div>

        <div className="flex mb-2 text-gray-500">
          <Check className="mr-2"/>
          Your review goes here
        </div>

        <div className="p-2 flex flex-col w-[450px]">
          <div className="w-full h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative">
            <span>{response}</span>
          </div>
        </div>
    </div>
  )
}