import {
    MoveToInbox,
    MailOutline,
    SvgIconComponent
} from "@mui/icons-material";

type DrawerItem = {
    displayName: string;
    route: string;
    Icon: SvgIconComponent
}

const defaultDrawerItems: DrawerItem[] = [
    {
        displayName: 'Home',
        route: '/home',
        Icon: MailOutline
    },
    {
        displayName: 'Products Management',
        route: '/productmanagement',
        Icon: MoveToInbox
    },
    {
        displayName: 'Contacts',
        route: '/contacts',
        Icon: MoveToInbox
    },
    {
        displayName: 'Orders',
        route: '/orders',
        Icon: MoveToInbox
    }, {
        displayName: 'Reports',
        route: '/reports',
        Icon: MoveToInbox
    }, {
        displayName: 'API & Apps',
        route: '/apiandapps',
        Icon: MoveToInbox
    }, {
        displayName: 'Integrations',
        route: '/integrations',
        Icon: MoveToInbox
    },
]

export default defaultDrawerItems;