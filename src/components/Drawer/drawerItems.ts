import {
    MoveToInbox,
    Mail,
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
        route: '/',
        Icon: Mail
    },
    {
        displayName: 'Contacts',
        route: '/contacts',
        Icon: MoveToInbox
    }
]

export default defaultDrawerItems;