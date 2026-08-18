import {
  BriefcaseBusiness,
  Boxes,
  Globe,
  Handshake,
} from "lucide-react";

import type { NavigationItem } from "@/types/navigation";

export const homeNavigationItems: NavigationItem[] = [
  { href: "/#top", label: "HOME" },
  { href: "/#company", label: "ABOUT US" },
  { href: "/#products", label: "WHAT WE TRADE" },
  { href: "/#services", label: "SERVICES" },
  { href: "/#markets", label: "GLOBAL REACH" },
  { href: "/#contact", label: "CONTACT US" },
];

export const statsItems = [
  {
    icon: Globe,
    label: "Markets Served",
    value: "12+",
  },
  {
    icon: Handshake,
    label: "Years of Experience",
    value: "8+",
  },
  {
    icon: Boxes,
    label: "Monthly Shipments",
    value: "40+",
  },
  {
    icon: BriefcaseBusiness,
    label: "Repeat Clients",
    value: "90%",
  },
] as const;
