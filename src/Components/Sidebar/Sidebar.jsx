import React from 'react';
import { Link } from "react-router-dom";
import '../Sidebar/sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import logo from '../Sidebar/logo.jpg'
export default function Sidebar() {
    return (

        <div className="sidebar">
            <div className="top"><span ><img src={logo} alt={logo} className="logo" /></span></div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <Link to="/dashbord" style={{ display: 'flex', textDecoration: 'none' }}>
                            <DashboardIcon className='icon' />
                            <span>Dashbord</span>
                        </Link>
                    </li>

                    <p className="title">LIST</p>
                    <li>
                        <Link to="/user" style={{ display: 'flex', textDecoration: 'none' }}>
                            <PersonOutlineOutlinedIcon className='icon' />
                            <span>User </span>
                        </Link></li>

                    <li>
                        <Link to="/product" style={{ display: 'flex', textDecoration: 'none' }}>
                            <ProductionQuantityLimitsOutlinedIcon className='icon' />
                            <span>Product</span>
                        </Link></li>

                    <li>

                        <Link to="/user" style={{ display: 'flex', textDecoration: 'none' }}>
                            <ShoppingBagOutlinedIcon className='icon' />
                            <span>Order</span>
                        </Link></li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span></li>
                    <p className="title">SERVICES</p>


                    <li>
                        < AccountBoxOutlinedIcon className='icon' />
                        <span>Profile</span></li>
                    <li>
                        <FavoriteBorderOutlinedIcon className='icon' />
                        <span>System.health</span></li>

                    <li>
                        <Link to='/' style={{ display: 'flex', textDecoration: 'none' }}>
                            <ExitToAppOutlinedIcon className='icon' />
                            <span>Logout</span></Link></li>
                </ul>
            </div>

        </div >
    )
}
