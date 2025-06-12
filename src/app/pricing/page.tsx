
import { PricingCards } from "@/components/global/pricing-card";
// import { useSearchParams } from "next/navigation";
// import { useEffect, useState } from "react";

export default function PricingPage() {
  // const searchParams = useSearchParams();
  // const [email, setEmail] = useState<string | null>(null);

  // useEffect(() => {
  //   setEmail(searchParams.get("email"));
  // }, [searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#1a1a1a]">
      <PricingCards />
    </div>
  );
}
