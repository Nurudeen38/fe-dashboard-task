// components/sidebar.tsx
"use client"; // This component has interactive elements

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Home,
  BarChart2,
  Settings,
  Users,
  LifeBuoy,
  Building2,
  Mail,
  Monitor,
  Wrench,
  Search,
  ChevronDown,
  RefreshCw,
  DollarSign,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { NavLink, AccordionLink } from "@/types";

/**
 * Helper function to check if a path is active
 * @param pathname - Current pathname
 * @param href - Link href to check
 * @returns True if the path is active
 */
const isActive = (pathname: string, href: string): boolean => pathname === href;

/**
 * Navigation links configuration
 */
const navLinks: NavLink[] = [
  { href: "/dashboard/admin", label: "Admin", icon: LifeBuoy, hasDropdown: true },
  { href: "/", label: "Home", icon: Home },
  { href: "/dashboard/reports", label: "Reports", icon: BarChart2 },
];

/**
 * Accordion navigation links configuration
 */
const accordionLinks: AccordionLink[] = [
  {
    value: "restaurant",
    label: "Restaurant",
    icon: Building2,
    sublinks: [
      { href: "/dashboard/restaurant/menu", label: "Menu", icon: Home },
      { href: "/dashboard/restaurant/orders", label: "Orders", icon: Home },
      { href: "/dashboard/restaurant/analytics", label: "Analytics", icon: BarChart2 },
    ],
  },
  {
    value: "marketing",
    label: "Marketing",
    icon: Mail,
    sublinks: [
      { href: "/dashboard/marketing/campaigns", label: "Campaigns", icon: Home },
      { href: "/dashboard/marketing/email", label: "Email", icon: Mail },
      { href: "/dashboard/marketing/sms", label: "SMS", icon: Home },
    ],
  },
  {
    value: "website",
    label: "Website",
    icon: Monitor,
    sublinks: [
      { href: "/dashboard/website/design", label: "Design", icon: Home },
      { href: "/dashboard/website/content", label: "Content", icon: Home },
      { href: "/dashboard/website/analytics", label: "Analytics", icon: BarChart2 },
    ],
  },
  {
    value: "customers",
    label: "Customers",
    icon: Users,
    sublinks: [
      { href: "/dashboard/customers/list", label: "Customer List", icon: Users },
      { href: "/dashboard/customers/segments", label: "Segments", icon: Users },
      { href: "/dashboard/customers/feedback", label: "Feedback", icon: Home },
    ],
  },
  {
    value: "tools",
    label: "Tools",
    icon: Wrench,
    sublinks: [
      { href: "/dashboard/tools/integrations", label: "Integrations", icon: Wrench },
      { href: "/dashboard/tools/automation", label: "Automation", icon: Wrench },
      { href: "/dashboard/tools/backup", label: "Backup", icon: Wrench },
    ],
  },
];

/**
 * Bottom navigation links configuration
 */
const bottomLinks: NavLink[] = [
  { href: "/dashboard/seo", label: "SEO", icon: Search, hasDropdown: true },
];

/**
 * Sidebar component for navigation
 * @returns JSX element
 */
export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-white md:block w-64">
      <div className="flex h-full max-h-screen flex-col">
        {/* Brand Logo Section */}
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-900 text-sm">Mark & Monica's</span>
              <span className="text-xs text-gray-500">Meats</span>
            </div>
          </Link>
        </div>

        {/* Utility Icons Row */}
        <div className="px-6 pb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:bg-gray-100">
              <Monitor className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:bg-gray-100">
              <DollarSign className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:bg-gray-100">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-600 hover:bg-gray-100">
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Account Selector */}
        <div className="px-6 pb-6">
          <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            <span className="text-sm font-medium text-gray-900">Mark & Monica's Family...</span>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="flex-1 overflow-auto px-4">
          <nav className="space-y-1">
            {/* Standard Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-700",
                  isActive(pathname, link.href) && "bg-blue-100 text-blue-700"
                )}
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </div>
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}

            {/* Accordion Nav Links */}
            <Accordion type="single" collapsible className="w-full">
              {accordionLinks.map((item) => (
                <AccordionItem key={item.value} value={item.value} className="border-b-0">
                  <AccordionTrigger
                    className={cn(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-700 hover:no-underline",
                      item.sublinks.some(s => isActive(pathname, s.href)) && "text-blue-700"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-6">
                    {item.sublinks.map((sublink) => (
                      <Link
                        key={sublink.href}
                        href={sublink.href}
                        className={cn(
                          "mt-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-gray-600 transition-all hover:bg-blue-50 hover:text-blue-700",
                          isActive(pathname, sublink.href) && "text-blue-700 bg-blue-50"
                        )}
                      >
                        {sublink.label}
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            {/* Bottom Links */}
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 transition-all hover:bg-blue-50 hover:text-blue-700",
                  isActive(pathname, link.href) && "bg-blue-100 text-blue-700"
                )}
              >
                <div className="flex items-center gap-3">
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </div>
                {link.hasDropdown && <ChevronDown className="h-4 w-4" />}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}