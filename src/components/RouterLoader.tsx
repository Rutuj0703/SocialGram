"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Loader2 } from "lucide-react";

export default function RouteLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simulate loading delay for visual feedback
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400); // adjust to your preference

    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading ? (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <Loader2 className="h-8 w-8 animate-spin text-white" />
    </div>
  ) : null;
}
