import React from 'react'
import '../List/list.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import DataTable from '../../Components/DataTable/DataTable'
export default function List() {
    return (
        <div className='list'>
            <Sidebar />
            <div className="listcontainer">
                <Navbar />
                <div className='sectiondatatable' style={{ width: '100%', height: '100%' }}>
                    <div><span className='nametitle'>User Table</span></div>
                    <DataTable />
                </div>
            </div>
        </div>
    )
}
