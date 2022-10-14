import React from 'react'
import '../List/list.scss'
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DataTable from '../../Components/DataTable/DataTable';
import PersonIcon from '@mui/icons-material/Person';
export default function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listcontainer">
                <Navbar />
                <div className='sectiondatatable' style={{ width: '100%', height: '100%' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <span className='nametitle'>User Table</span>
                        </div>
                        <Link to='/user/new' style={{ textDecoration: 'none', marginRight: '40px', marginTop: '10px' }}> <Button variant="outlined">Add New <PersonIcon /></Button></Link>
                    </div>
                    <DataTable />
                </div>
            </div>
        </div >
    )
}
