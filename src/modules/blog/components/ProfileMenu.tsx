"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Trophy, Clock, BarChart2, LogOut, Settings, User } from "lucide-react";
import Link from "next/link";

export function ProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="rounded-full focus-visible:ring-2 focus-visible:ring-[var(--pistachio)]">
        <Avatar className="h-9 w-9 ring-1 ring-zinc-200 dark:ring-zinc-800">
          <AvatarImage alt="You" src="/reza.jpg" />
          <AvatarFallback>YO</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64">
        <DropdownMenuLabel className="text-xs text-zinc-500">
          Quick stats
        </DropdownMenuLabel>
        <div className="grid grid-cols-3 gap-2 px-2 pb-2">
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-2 text-center">
            <Trophy className="mx-auto h-4 w-4" />
            <div className="text-xs">Trophies</div>
            <div className="text-sm font-semibold">12</div>
          </div>
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-2 text-center">
            <BarChart2 className="mx-auto h-4 w-4" />
            <div className="text-xs">Rank</div>
            <div className="text-sm font-semibold">#87</div>
          </div>
          <div className="rounded-xl bg-zinc-50 dark:bg-zinc-900 p-2 text-center">
            <Clock className="mx-auto h-4 w-4" />
            <div className="text-xs">Minutes</div>
            <div className="text-sm font-semibold">642</div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/profile" className="flex items-center gap-2">
            <User className="h-4 w-4" /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" /> Settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600">
          <LogOut className="mr-2 h-4 w-4" /> Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
