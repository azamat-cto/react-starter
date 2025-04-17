import { createBrowserRouter } from "react-router";
import App from "@/App.tsx";

// LOGIN
import LoginPage from "@/page/login";
// STATISTIC
import StatisticPage from "@/page/statistic";
// CLIENT
import ClientPage from "@/page/client";
// WINGS
import WingsPage from "@/page/wings";
// CARD
import CardPage from "@/page/card";
import OrdersPage from "@/page/card/orders";
import StyleCardPage from "@/page/card/style-card";
import OrderAreasPage from "@/page/card/order-areas";
import DeliveryAreasPage from "@/page/card/delivery-areas";
import OrderBranchesPage from "@/page/card/order-branches";
import ProphylacticCardsPage from "@/page/card/prophylactic-cards";
import AvailableCardsToOrderPage from "@/page/card/available-cards-to-order";
// MOMENTUM
import MomentumPage from "@/page/momentum";
// ONEID
import OneIdPage from "@/page/oneid";
// IDENTIFICATION
import IdentificationPage from "@/page/identification";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "statistic",
                element: <StatisticPage />,
            },
            {
                path: "client",
                element: <ClientPage />,
            },
            {
                path: "wings",
                element: <WingsPage />,
            },
            {
                path: "card",
                element: <CardPage />,
                children: [
                    {
                        path: "orders",
                        element: <OrdersPage />,
                    },
                    {
                        path: "style-card",
                        element: <StyleCardPage />,
                    },
                    {
                        path: "order-areas",
                        element: <OrderAreasPage />,
                    },
                    {
                        path: "delivery-areas",
                        element: <DeliveryAreasPage />,
                    },
                    {
                        path: "order-branches",
                        element: <OrderBranchesPage />,
                    },
                    {
                        path: "prophylactic-cards",
                        element: <ProphylacticCardsPage />,
                    },
                    {
                        path: "available-cards-to-order",
                        element: <AvailableCardsToOrderPage />,
                    },
                ],
            },
            {
                path: "momentum",
                element: <MomentumPage />,
            },
            {
                path: "oneid",
                element: <OneIdPage />,
            },
            {
                path: "identification",
                element: <IdentificationPage />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
