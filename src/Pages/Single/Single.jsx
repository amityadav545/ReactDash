import React from 'react'
import '../Single/single.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DataTable from '../../Components/DataTable/DataTable'
export default function Single() {
    return (
        <div className='single'>
            <Sidebar />
            <div className='singlecontainer'>
                <Navbar />
                <div className='userinformation'>
                    <div className='left'>
                        <p className='title1'>Edit</p>
                        <div className='information'>
                            <div >
                                <img className='userprofile' src='https://static.vecteezy.com/system/resources/previews/002/318/271/original/user-profile-icon-free-vector.jpg' alt='' />
                            </div>
                            <div className='details'><span className='title'>Name</span>
                                <span>Amit kumar yadav</span>
                            </div>
                            <div className='details'><span className='title'>Mobile</span>
                                <span>6388131984</span>
                            </div>
                            <div className='details'><span className='title'>Email</span>
                                <span>something@gmail.com</span>
                            </div>

                            <div className='details'><span className='title'>Address</span>
                                <span>lucknow</span>
                            </div>
                        </div>
                    </div>
                    <div className='right'>
                        <DataTable />

                    </div>
                </div>
            </div>

        </div>
    )
}
