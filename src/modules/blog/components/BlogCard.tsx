"use client";

import { Blog } from "../types";
import { Bookmark, HandHeart, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { formatDateUTC } from "@/lib/date"; 

export function BlogCard({
  blog,
  onToggleBookmark,
}: {
  blog: Blog;
  onToggleBookmark: (id: string) => void;
}) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl transition-shadow hover:shadow-xl">
      <CardHeader className="space-y-2">
        <h3 className="text-lg font-semibold leading-tight tracking-tight">
          {blog.title}
        </h3>
        <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
          {blog.excerpt}
        </p>
      </CardHeader>
      <CardContent>
        <div className="mt-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[var(--olive-700)]/10 grid place-items-center text-[var(--olive-700)]">
              {blog.author.name.slice(0, 1)}
            </div>
            <div className="leading-tight">
              <div className="font-medium">{blog.author.name}</div>
              <div className="text-xs text-zinc-500">
                {formatDateUTC(blog.publishedAt, "en-US")} • {blog.readMinutes} min
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onToggleBookmark(blog.id)}
              className={cn(
                "rounded-full p-2 transition-colors",
                blog.bookmarked
                  ? "bg-[var(--pistachio)]/20 text-[var(--olive-700)]"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
              )}
              aria-label={blog.bookmarked ? "Remove bookmark" : "Bookmark"}
            >
              <Bookmark
                className={cn("h-5 w-5", blog.bookmarked && "fill-current")}
              />
            </button>
            <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
              <HandHeart className="h-4 w-4" />
              <span className="tabular-nums">{blog.claps}</span>
            </div>
            <div className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400">
              <Clock className="h-4 w-4" />
              <span className="tabular-nums">{blog.readMinutes}m</span>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[var(--olive-700)] via-[var(--pistachio)] to-[var(--periwinkle)] opacity-0 transition-opacity group-hover:opacity-100" />
      </CardContent>
    </Card>
  );
}
