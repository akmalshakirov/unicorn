import {
    CreditCard,
    HomeIcon,
    Package,
    RefreshCcw,
    ShoppingBag,
    ShoppingCartIcon,
    Users,
} from "lucide-react";

export const SIDEBAR_DATA = [
    {
        id: 1,
        label: "Home",
        icon: HomeIcon,
        to: "/",
    },
    {
        id: 2,
        label: "Members",
        icon: Users,
        to: "/members",
    },
    {
        id: 3,
        label: "POS",
        icon: ShoppingCartIcon,
        to: "/pos",
    },
    {
        id: 4,
        label: "Inventory",
        icon: ShoppingBag,
        to: "/inventory",
    },
    {
        id: 5,
        label: "Products",
        icon: Package,
        to: "/products",
    },
    {
        id: 6,
        label: "Visit history",
        icon: RefreshCcw,
        to: "/history",
    },
    {
        id: 7,
        label: "Payments",
        icon: CreditCard,
        to: "/payments",
    },
];

export const MEMBERS_TABLE_COLUMNS = [
    {
        key: "name",
        header: "Name",
    },
    {
        key: "phoneNumber",
        header: "Phone",
    },
    {
        key: "status",
        header: "Status",
    },
    {
        key: "type",
        header: "Type",
    },
    {
        key: "expireTime",
        header: "Expire Time",
    },
];
