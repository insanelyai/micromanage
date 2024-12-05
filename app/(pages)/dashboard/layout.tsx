import Breadcrumbs from "@/components/Breadcrumbs";
import { DashboardSidebarMenu } from "@/components/DashboardSidebarMenu";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const breadcrumbs = [
    {label: "Dashboard", href: "/dashboard"}
]

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DashboardSidebarMenu />
      <main className="min-h-screen w-screen overflow-x-hidden">
        <div className="flex items-center justify-normal gap-2">
        <SidebarTrigger className="w-10 h-10" />
        <Breadcrumbs breadcrumbItems={breadcrumbs} className="text-md" />
        </div>
        {children}
      </main>
    </SidebarProvider>
  );
}
