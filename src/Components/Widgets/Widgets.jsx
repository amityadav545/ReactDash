import React from 'react'
import { Link } from "react-router-dom";
import '../Widgets/widgets.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
export default function Widgets({ type }) {
    let data;
    const amount = 100;
    const percentage = 20;
    switch (type) {
        case "user":
            data = {
                title: 'USER',
                ismoney: false,
                link: 'See All User',
                icon: (<GroupIcon className='icon' style={{ backgroundColor: 'crimson', color: 'white' }} />)


            }

            break;
        case "order":
            data = {
                title: 'ORDERS',
                ismoney: false,
                link: 'See All Orders',
                icon: (<ShoppingBagIcon className='icon' style={{ backgroundColor: 'green', color: 'white' }} />)


            }

            break;
        case "earning":
            data = {
                title: 'EARNING',
                ismoney: true,
                link: 'See Earning',
                icon: (<CurrencyRupeeIcon className='icon' style={{ backgroundColor: 'lightblue', color: 'green' }} />)


            }

            break;
        case "balance":
            data = {
                title: 'BALANCE',
                ismoney: true,
                link: 'See All transctions',
                icon: (<AccountBalanceIcon className='icon' style={{ backgroundColor: 'red', color: 'white' }} />)


            }

            break;

        default:
            break;
    }
    return (
        <div className='widget'>
            <div className="left">
                <span className='title'>{data.title}</span>
                <span className='counter'>{data.ismoney && "$"}{amount}</span>
                <Link to={data.title} style={{ textDecoration: 'none' }}>
                    <span className='link'>{data.link}</span></Link>
            </div>
            <div className="right">
                <div className='percentage positive'>
                    <KeyboardArrowUpIcon />
                    {percentage}%</div>
                {data.icon}
            </div>
        </div>
    )
}
