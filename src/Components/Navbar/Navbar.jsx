import React from 'react'
import '../Navbar/navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import avtar from '../Navbar/result.jpeg'
export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input type='text' placeholder='search......' />
                    <SearchOutlinedIcon className='icon' />
                </div>
                <div className='items'>
                    <div className="item">
                        <LanguageOutlinedIcon className='icon' />
                        English
                    </div>

                    <div className="item">
                        <DarkModeOutlinedIcon className='icon' />

                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">


                        <img src={avtar} alt='' className='avtar' />


                    </div>
                </div>
            </div>

        </div>
    )
}
