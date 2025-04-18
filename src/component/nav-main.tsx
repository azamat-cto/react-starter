import { useLocation } from "react-router";
import { ChevronRight } from "lucide-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/component/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/component/ui/sidebar";
import { Link } from "react-router";
import { NavItem } from "./app-sidebar";

type NavMainProps = {
    items: NavItem[];
    activeItem: NavItem;
    setActiveItem: React.Dispatch<React.SetStateAction<NavItem>>;
    setOpen: (open: boolean) => void;
};

export function NavMain({
    items,
    setOpen,
    activeItem,
    setActiveItem,
}: NavMainProps) {
    const { pathname } = useLocation();
    return (
        <SidebarGroup>
            <SidebarGroupLabel>Menus</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) =>
                    item.items && item.items.length > 0 ? (
                        <Collapsible
                            asChild
                            key={item.title}
                            className="group/collapsible"
                            defaultOpen={
                                item.url === pathname ||
                                item.items?.some((sub) => sub.url === pathname)
                            }
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton
                                        tooltip={item.title}
                                        onClick={() => setOpen(true)}
                                    >
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => {
                                            const isSubActive =
                                                pathname === subItem.url;
                                            return (
                                                <SidebarMenuSubItem
                                                    key={subItem.title}
                                                >
                                                    <SidebarMenuSubButton
                                                        asChild
                                                        isActive={isSubActive}
                                                        onClick={() => {
                                                            setActiveItem(
                                                                subItem,
                                                            );
                                                            setOpen(true);
                                                        }}
                                                    >
                                                        <Link to={subItem.url}>
                                                            <span>
                                                                {subItem.title}
                                                            </span>
                                                        </Link>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            );
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                onClick={() => {
                                    setActiveItem(item);
                                    setOpen(true);
                                }}
                                isActive={activeItem?.title === item.title}
                            >
                                <Link
                                    to={item.url}
                                    className="flex items-center gap-2 w-full"
                                >
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ),
                )}
            </SidebarMenu>
        </SidebarGroup>
    );
}
