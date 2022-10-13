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
                <DataTable />
            </div>
        </div>
    )
}
