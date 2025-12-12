"use client";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { Box, Calendar, Home, Search, Settings, UserRound } from "lucide-react";
import { ModeToggle } from "./button-theme";

export default function AppSidebar() {

    const items = [
        {
            title: "Home",
            url: "#",
            icon: Home,
        },
        {
            title: "Users",
            url: "#",
            icon: UserRound,
        },
        {
            title: "Products",
            url: "#",
            icon: Box,
        },
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings,
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="w-full h-17">
                <div className="flex h-20 justify-between items-center">
                    <h2 className=" ml-2 font-bold">Dashboard</h2>
                    <ModeToggle />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};