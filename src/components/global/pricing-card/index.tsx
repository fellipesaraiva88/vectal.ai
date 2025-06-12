"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

interface PricingCardsProps {
  email?: string | null;
}

export const PricingCards = ({ email }: PricingCardsProps) => {
  return (
    <div className="flex flex-col items-center gap-10 min-h-screen mt-16">
      <h1 className="text-6xl font-extrabold text-white md:text-6xl">vectal.ai</h1>
      <h1 className="text-gray-400">Pricing</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-[1200px]">
        
        {/* Monthly Plan */}
        <Card className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] h-auto lg:h-[450px] bg-[#151515] border-0 transition-transform duration-200 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-2xl">Monthly</CardTitle>
            <div className="text-5xl font-bold sm:text-3xl">$30<span className="text-sm font-normal">/mo</span></div>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 text-lg sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Unlimited o3-mini</span>
              <span className="bg-blue-500 text-xs px-2 py-0.5 rounded">NEW</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Unlimited DeepSeek R1</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Automatic task sorting</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Direct access to David on Discord</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Cancel anytime</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full mt-6 bg-white text-black hover:bg-white hover:text-black sm:mt-0 lg:mt-11">
              <span className="text-md lg:transition-transform lg:duration-200 lg:hover:scale-105">Choose Monthly</span>
            </Button>
          </CardFooter>
        </Card>

        {/* Annual Plan */}
        <Card className="w-full sm:w-[350px] md:w-[400px] lg:w-[400px] h-auto lg:h-[450px] bg-[#151515] border-0 transition-transform duration-200 hover:scale-105">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-2xl">Annual</CardTitle>
            <div className="text-5xl font-bold sm:text-3xl">$270<span className="text-sm font-normal">/year</span></div>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 text-lg sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Unlimited o3-mini</span>
              <span className="bg-blue-500 text-xs px-2 py-0.5 rounded">NEW</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Unlimited DeepSeek R1</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Automatic task sorting</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Direct access to David on Discord</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-1">
              <CheckIcon className="text-green-500 size-5" />
              <span>Save $90 a year</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-black hover:bg-white hover:text-black">
              <span className="text-md lg:transition-transform lg:duration-200 lg:hover:scale-105">Choose Annual</span>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
