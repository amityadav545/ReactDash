import React from 'react'
import '../New/new.scss'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Button from '@mui/material/Button';
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
                    <div className='right'>
                        <form>
                            <div className="formInput">
                                <label htmlFor='image'> <AddPhotoAlternateIcon className='iconimg' /></label>
                                <input type='file' id='image' style={{ display: 'none' }} />

                            </div>
                            <div className="formInput">
                                <label htmlFor='username'>User Name</label>
                                <input type='text' placeholder='@amit63' id='username' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='Fullname'>Full Name</label>
                                <input type='text' placeholder='enter full name' id='Fullname' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='mobile'>Mobile</label>
                                <input type='number' placeholder='enter mobile number' id='mobile' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='email'>Email</label>
                                <input type='email' placeholder='enter your email' id='email' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='age'>Age</label>
                                <input type='number' placeholder='Enter Age' id='age' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='address'>Address</label>
                                <input type='text' placeholder='Enter Address' id='address' />
                            </div>
                            <div className="formInput">
                                <label htmlFor='password'>Password</label>
                                <input type='text' placeholder='Enter Address' id='password' />
                            </div>



                        </form>

                        <Button className='buttomform' variant="contained">Send</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
