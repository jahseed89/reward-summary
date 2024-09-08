import { IoHomeOutline } from "react-icons/io5";
import { LuBadgeDollarSign } from "react-icons/lu";
import { GrTransaction } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import { CiBarcode } from "react-icons/ci";

export const routes = [

    {
        name: 'Dashboard',
        layout: '/',
        icon: <IoHomeOutline />,
    },
    {
        name: 'Earnings',
        layout: '/earning',
        icon: <LuBadgeDollarSign />,
    },
    {
        name: 'Transaction',
        layout: 'transaction',
        icon: <GrTransaction />,
    },
    {
        name: 'CashOut',
        layout: '/cashout',
        icon: <IoCashOutline />
    },
    {
        name: 'Promo Code',
        layout: '/promocode',
        icon: <CiBarcode />
    }
]