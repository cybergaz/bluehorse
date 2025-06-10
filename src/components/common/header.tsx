"use client"

// components/Header.tsx
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart,
  LineChart,
  Menu,
  Cloud,
  GitBranch,
  Wallet,
  Megaphone,
  Building2,
  Quote,
  FolderOpen,
  Briefcase,
  BookOpenText
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Button } from "../ui/button";
import { NAVLINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe,
  smartphone: Smartphone,
  cloud: Cloud,
  "git-branch": GitBranch,
  wallet: Wallet,
  megaphone: Megaphone,
  "shopping-cart": ShoppingCart,
  "bar-chart-3": BarChart3,
  "building-2": Building2,
  quote: Quote,
  "folder-open": FolderOpen,
  briefcase: Briefcase,
  "book-open-text": BookOpenText
};

const colorMap = {
  cyan: "from-cyan-500/20 to-blue-600/20",
  indigo: "from-indigo-500/20 to-purple-600/20",
  sky: "from-sky-500/20 to-blue-600/20",
  violet: "from-violet-500/20 to-purple-600/20",
  green: "from-green-500/20 to-emerald-600/20",
  blue: "from-blue-500/20 to-violet-600/20",
  emerald: "from-emerald-500/20 to-teal-600/20",
  amber: "from-amber-500/20 to-orange-600/20",
};

const iconColorMap = {
  cyan: "text-cyan-400",
  indigo: "text-indigo-400",
  sky: "text-sky-400",
  violet: "text-violet-400",
  green: "text-green-400",
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
};

const Header = () => {
  return (
    <header className="max-w-screen w-full z-50 fixed top-0 text-white  border-b border-white/10 backdrop-blur-sm bg-black/20" >
      <nav className="max-w-[90rem] mx-auto">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center ">
              <Image src="/images/logo.png" alt="Logo" width={70} height={50} className="pb-1" />
              <Link href="/" className="flex flex-col ">
                <span className="text-sm font-semibold bg-gradient-to-r from-white to-[#00a8ff] bg-clip-text text-transparent">BLUEHORSE TECH SOLUTIONS</span>
                <span className="text-[11px] text-[#c2c9d4]">We Create Your Dreams</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-12">
              {NAVLINKS.map((link) => (
                link.hasDropdown ? (
                  <div key={link.title} className="relative group">
                    <button className="flex items-center gap-1 text-white group-hover:text-cyan-400 transition-colors">
                      {link.title}{" "}
                      <ChevronRight className="h-4 w-4 rotate-90 group-hover:rotate-0 transition-transform duration-300" />
                    </button>

                    <div className={cn("absolute left-0 top-full mt-2 w-[720px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-x-1/4 z-50")}>
                      <div className="backdrop-blur-xl bg-slate-900/90 rounded-xl border border-slate-700/50 p-6 shadow-2xl shadow-cyan-500/10 grid grid-cols-2 gap-8">
                        {link.categories?.map((category) => (
                          <div key={category.title} className="space-y-6">
                            <h3 className="text-sm font-medium text-white uppercase tracking-wider">{category.title}</h3>
                            {category.links.map((item) => {
                              const Icon = iconMap[item.icon as keyof typeof iconMap];
                              const bgColor = colorMap[item.color as keyof typeof colorMap];
                              const iconColor = iconColorMap[item.color as keyof typeof iconColorMap];

                              return (
                                <Link
                                  key={item.title}
                                  href={item.url}
                                  className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors group/item"
                                >
                                  <span className={`bg-gradient-to-br ${bgColor} p-2 rounded-lg group-hover/item:from-${item.color}-500/30 group-hover/item:to-${item.color}-600/30 transition-all`}>
                                    <Icon className={`h-5 w-5 ${iconColor}`} />
                                  </span>
                                  <div>
                                    <h4 className="font-medium mb-1 text-white">{item.title}</h4>
                                    <p className="text-sm text-slate-300">Learn more about {item.title.toLowerCase()}</p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      <div className="absolute -z-10 inset-0 blur-2xl">
                        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-cyan-500/30 rounded-full"></div>
                        <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-indigo-500/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.title}
                    href={link.url || "#"}
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                )
              ))}
            </div>

            <div className="hidden md:block">
              <Button className="bg-gradient-to-r from-[#0071bc] to-[#005a94] hover:from-[#005a94] hover:to-[#004a7a] text-white ml-40">
                Get Started
              </Button>
            </div>

            {/* Mobile Navigation Menu */}
            <Sheet>
              <SheetTrigger className="md:hidden p-2">
                <Menu className="h-6 w-6 text-white" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] h-full pt-10 bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 border-l border-white/5 overflow-y-scroll">
                <nav className="flex flex-col gap-4">
                  {NAVLINKS.map((link) => (
                    link.hasDropdown ? (
                      <Accordion key={link.title} type="single" collapsible className="w-full ml-[7px]">
                        <AccordionItem value={link.title} className="border-none">
                          <AccordionTrigger className="text-white hover:text-[#0071bc] py-2 hover:no-underline">
                            {link.title}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="pl-4 space-y-2">
                              {link.categories?.map((category) => (
                                <div key={category.title} className="space-y-2">
                                  <h3 className="text-sm font-medium text-white/70 uppercase tracking-wider">{category.title}</h3>
                                  {category.links.map((item) => {
                                    const Icon = iconMap[item.icon as keyof typeof iconMap];
                                    const bgColor = colorMap[item.color as keyof typeof colorMap];
                                    const iconColor = iconColorMap[item.color as keyof typeof iconColorMap];

                                    return (
                                      <SheetClose key={item.title} asChild>
                                        <Link
                                          href={item.url}
                                          className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors group/item"
                                        >
                                          <span className={`bg-gradient-to-br ${bgColor} p-2 rounded-lg`}>
                                            <Icon className={`h-4 w-4 ${iconColor}`} />
                                          </span>
                                          <div>
                                            <h4 className="font-medium text-white">{item.title}</h4>
                                            <p className="text-xs text-slate-300">Learn more about {item.title.toLowerCase()}</p>
                                          </div>
                                        </Link>
                                      </SheetClose>
                                    );
                                  })}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <SheetClose key={link.title} asChild>
                        <Link
                          href={link.url || "#"}
                          className="font-medium text-white hover:text-[#0071bc] hover:bg-white/5 rounded-md p-2 transition-colors"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    )
                  ))}

                  <SheetClose asChild>
                    <Button className="bg-gradient-to-r from-[#0071bc] to-[#0085d1] hover:from-[#005a94] hover:to-[#0071bc] text-white mt-4">
                      Get Started
                    </Button>
                  </SheetClose>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav >
    </header >
  );
};

export default Header;
