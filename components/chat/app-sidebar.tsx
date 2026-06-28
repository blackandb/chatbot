"use client";

import {
  Building2Icon,
  MessageSquareIcon,
  PanelLeftIcon,
  PenSquareIcon,
  ShieldIcon,
  TrashIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";
import { useState } from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";
import { unstable_serialize } from "swr/infinite";
import {
  getChatHistoryPaginationKey,
  SidebarHistory,
} from "@/components/chat/sidebar-history";
import { SidebarUserNav } from "@/components/chat/sidebar-user-nav";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../ui/alert-dialog";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export function AppSidebar({ user }: { user: User | undefined }) {
  const router = useRouter();
  const { setOpenMobile, toggleSidebar } = useSidebar();
  const { mutate } = useSWRConfig();
  const [showDeleteAllDialog, setShowDeleteAllDialog] = useState(false);

  const handleDeleteAll = () => {
    setShowDeleteAllDialog(false);
    router.replace("/");
    mutate(unstable_serialize(getChatHistoryPaginationKey), [], {
      revalidate: false,
    });

    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api/history`, {
      method: "DELETE",
    });

    toast.success("All chats deleted");
  };

  return (
    <>
      <Sidebar collapsible="icon" className="border-white/10 bg-black text-white">
        <SidebarHeader className="border-b border-white/10 pb-3 pt-3">
          <SidebarMenu>
            <SidebarMenuItem className="flex flex-row items-center justify-between">
              <div className="group/logo relative flex items-center justify-center">
                <SidebarMenuButton
                  asChild
                  className="size-8 !px-0 items-center justify-center rounded-lg text-white hover:bg-white/10 group-data-[collapsible=icon]:group-hover/logo:opacity-0"
                  tooltip="BLACK& Intelligence"
                >
                  <Link href="/" onClick={() => setOpenMobile(false)}>
                    <span className="text-sm font-bold tracking-[-0.04em]">
                      B&
                    </span>
                  </Link>
                </SidebarMenuButton>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <SidebarMenuButton
                      className="pointer-events-none absolute inset-0 size-8 rounded-lg text-white opacity-0 hover:bg-white/10 group-data-[collapsible=icon]:pointer-events-auto group-data-[collapsible=icon]:group-hover/logo:opacity-100"
                      onClick={() => toggleSidebar()}
                    >
                      <PanelLeftIcon className="size-4" />
                    </SidebarMenuButton>
                  </TooltipTrigger>
                  <TooltipContent className="hidden md:block" side="right">
                    Open sidebar
                  </TooltipContent>
                </Tooltip>
              </div>

              <div className="group-data-[collapsible=icon]:hidden">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-bold tracking-[-0.04em] text-white">
                      BLACK&
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      Intelligence
                    </div>
                  </div>

                  <SidebarTrigger className="ml-2 text-white/50 transition-colors duration-150 hover:text-white" />
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        <SidebarContent className="bg-black">
          <SidebarGroup className="pt-3">
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="h-9 rounded-lg border border-white/10 bg-white text-[13px] text-black transition-colors duration-150 hover:bg-white/90"
                    onClick={() => {
                      setOpenMobile(false);
                      router.push("/");
                    }}
                    tooltip="New Intelligence Chat"
                  >
                    <PenSquareIcon className="size-4" />
                    <span className="font-medium">New Intelligence Chat</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="mt-2 h-9 rounded-lg text-[13px] text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpenMobile(false);
                      router.push("/");
                    }}
                    tooltip="BLACK&"
                  >
                    <MessageSquareIcon className="size-4" />
                    <span>BLACK& Assistant</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="h-9 rounded-lg text-[13px] text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpenMobile(false);
                      router.push("/");
                    }}
                    tooltip="CAESAREA"
                  >
                    <ShieldIcon className="size-4" />
                    <span>CAESAREA</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="h-9 rounded-lg text-[13px] text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpenMobile(false);
                      router.push("/");
                    }}
                    tooltip="EEIL"
                  >
                    <ZapIcon className="size-4" />
                    <span>EEIL</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton
                    className="h-9 rounded-lg text-[13px] text-white/70 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                    onClick={() => {
                      setOpenMobile(false);
                      router.push("/");
                    }}
                    tooltip="MURABA"
                  >
                    <Building2Icon className="size-4" />
                    <span>MURABA</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {user && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className="mt-2 rounded-lg text-white/35 transition-colors duration-150 hover:bg-red-500/10 hover:text-red-400"
                      onClick={() => setShowDeleteAllDialog(true)}
                      tooltip="Delete All Chats"
                    >
                      <TrashIcon className="size-4" />
                      <span className="text-[13px]">Delete all</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <div className="px-2 pt-2 text-[10px] uppercase tracking-[0.18em] text-white/30 group-data-[collapsible=icon]:hidden">
            Conversations
          </div>

          <SidebarHistory user={user} />
        </SidebarContent>

        <SidebarFooter className="border-t border-white/10 bg-black pb-3 pt-2">
          {user && <SidebarUserNav user={user} />}
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>

      <AlertDialog
        onOpenChange={setShowDeleteAllDialog}
        open={showDeleteAllDialog}
      >
        <AlertDialogContent className="border-white/10 bg-black text-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete all conversations?</AlertDialogTitle>
            <AlertDialogDescription className="text-white/60">
              This action cannot be undone. This will permanently delete all
              your BLACK& Intelligence conversations and remove them from our
              servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="border-white/10 bg-transparent text-white hover:bg-white/10">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 text-white hover:bg-red-500/90"
              onClick={handleDeleteAll}
            >
              Delete All
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
