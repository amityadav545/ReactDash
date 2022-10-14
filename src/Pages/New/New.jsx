import React from 'react'
import '../New/new.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
export default function New() {
    return (
        <div className='new'>
            <Sidebar />
            <div className="newcontainer">
                <Navbar />
                <div className='addnewtitle'>
                    <h1>Add new</h1>
                </div>
                <div className='addnew'>
                    <div className='left'>
                        <div className='newimage'>
                            <img className='newimages' src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg' alt='' />
                        </div>
                    </div>
                    <div className='right'>right</div>
                </div>
            </div>
        </div>
    )
}
