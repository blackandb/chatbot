"use client";

import { PanelLeftIcon } from "lucide-react";
import Link from "next/link";
import { memo } from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { VisibilitySelector, type VisibilityType } from "./visibility-selector";

function PureChatHeader({
  chatId,
  selectedVisibilityType,
  isReadonly,
}: {
  chatId: string;
  selectedVisibilityType: VisibilityType;
  isReadonly: boolean;
}) {
  const { state, toggleSidebar, isMobile } = useSidebar();

  if (state === "collapsed" && !isMobile) {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b border-white/10 bg-black px-3 text-white">
      <Button
        className="text-white hover:bg-white/10 md:hidden"
        onClick={toggleSidebar}
        size="icon-sm"
        variant="ghost"
      >
        <PanelLeftIcon className="size-4" />
      </Button>

      <Link
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-semibold tracking-[-0.02em] text-white transition hover:bg-white/10 md:hidden"
        href="/"
      >
        <span className="text-base font-bold tracking-[-0.04em]">BLACK&</span>
        <span className="hidden text-xs font-normal text-white/50 sm:inline">
          Intelligence
        </span>
      </Link>

      {!isReadonly && (
        <VisibilitySelector
          chatId={chatId}
          selectedVisibilityType={selectedVisibilityType}
        />
      )}

      <div className="ml-auto hidden items-center gap-3 md:flex">
        <div className="text-right">
          <div className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
            BLACK& Intelligence
          </div>
          <div className="text-sm font-medium text-white">
            Enterprise AI Assistant
          </div>
        </div>

        <Button
          asChild
          className="rounded-lg border border-white/10 bg-white px-4 text-black hover:bg-white/90"
        >
          <Link
            href="https://blackandi.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit BLACK&
          </Link>
        </Button>
      </div>
    </header>
  );
}

export const ChatHeader = memo(PureChatHeader, (prevProps, nextProps) => {
  return (
    prevProps.chatId === nextProps.chatId &&
    prevProps.selectedVisibilityType === nextProps.selectedVisibilityType &&
    prevProps.isReadonly === nextProps.isReadonly
  );
});
