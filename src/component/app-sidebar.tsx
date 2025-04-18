import * as React from "react";
import { useLocation } from "react-router";
import {
    ChartNoAxesCombined,
    CreditCard,
    Gauge,
    IdCard,
    LucideIcon,
    ScanFace,
    UsersRound,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
    useSidebar,
} from "@/component/ui/sidebar";

import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

export type NavItem = {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }[];
};

const data = {
    user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
        {
            title: "Statistic",
            url: "/statistic",
            icon: ChartNoAxesCombined,
            isActive: true,
        },
        {
            title: "Client",
            url: "/client",
            icon: UsersRound,
            isActive: false,
        },
        {
            title: "Wings",
            url: "/wings",
            icon: Gauge,
            isActive: false,
        },
        {
            title: "Card",
            url: "",
            icon: CreditCard,
            isActive: false,
            items: [
                {
                    title: "Orders",
                    url: "/card/orders",
                    isActive: false,
                },
                {
                    title: "Style card",
                    url: "/card/style-card",
                    isActive: false,
                },
                {
                    title: "Order areas",
                    url: "/card/order-areas",
                    isActive: false,
                },
                {
                    title: "Delivery areas",
                    url: "/card/delivery-areas",
                    isActive: false,
                },
                {
                    title: "Order branches",
                    url: "/card/order-branches",
                    isActive: false,
                },
                {
                    title: "Prophylactic cards",
                    url: "/card/prophylactic-cards",
                    isActive: false,
                },
                {
                    title: "Available cards to order",
                    url: "/card/available-cards-to-order",
                    isActive: false,
                },
            ],
        },
        {
            title: "Momentum",
            url: "/momentum",
            icon: CreditCard,
            isActive: false,
        },
        {
            title: "OneId",
            url: "/oneid",
            icon: IdCard,
            isActive: false,
        },
        {
            title: "Identification",
            url: "/identification",
            icon: ScanFace,
            isActive: false,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const [activeItem, setActiveItem] = React.useState<NavItem>(
        data.navMain[0],
    );
    const { setOpen } = useSidebar();
    const { pathname } = useLocation();

    React.useEffect(() => {
        const current = data.navMain.find((item) => {
            return (
                item.url === pathname ||
                item.items?.some((sub) => sub.url === pathname)
            );
        });
        if (current) {
            setActiveItem(current);
        }
    }, [pathname]);

    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="border-b h-16">
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg border p-1">
                        <svg
                            width="50"
                            height="33"
                            fill="none"
                            viewBox="0 0 43 30"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="#0D6992"
                                d="M6.90965 7.9865L8.80311 9.90833L3.96099 14.8229L8.99875 19.936L6.90149 22.0047L0 14.9998L6.90965 7.9865ZM18.904 22.1232L20.6987 23.9447L14.7788 30L8.16405 23.2862L10.2318 21.1875L15.0288 26.0565L18.904 22.1232ZM22.1231 18.8558L23.9766 20.7371L29.6918 15.0568L14.7784 0L8.11941 6.75862L10.0129 8.68045L14.9165 3.70325L25.9843 14.9368L22.1231 18.8558Z"
                            />
                            <path
                                fill="#289842"
                                d="M35.6583 22.0134L33.7835 20.0916L38.578 15.1771L33.5898 10.0639L35.6664 7.99533L42.5003 15.0002L35.6583 22.0134ZM23.7816 7.87681L22.0046 6.05533L27.8664 0L34.4162 6.71386L32.3688 8.81245L27.6189 3.9436L23.7816 7.87681ZM20.594 11.1442L18.7588 9.26299L13.0996 14.9432L27.8668 30L34.4604 23.2413L32.5856 21.3195L27.7299 26.2967L16.7707 15.0632L20.594 11.1442Z"
                            />
                        </svg>
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                            Davr Bank
                        </span>
                        <span className="truncate text-xs">Admin Panel</span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent className="gap-0">
                <NavMain
                    setOpen={setOpen}
                    items={data.navMain}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
