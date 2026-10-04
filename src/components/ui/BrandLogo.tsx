import Image from "next/image";

import { assetPath } from "@/lib/paths";
import { cn } from "@/utils/cn";

export function BrandLogo({ className }: { className?: string }) {
  return (
    <span className={cn("relative block h-6 w-28 shrink-0 overflow-hidden sm:w-32", className)}>
      <Image
        src={assetPath("/images/logo.png")}
        alt="Rong Xing Trading Co., Ltd."
        fill
        sizes="(min-width: 640px) 144px, 112px"
        className="object-cover"
      />
    </span>
  );
}
