import React from 'react'
import '../Home/home.scss'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Navbar from '../../Components/Navbar/Navbar'
import Widgets from '../../Components/Widgets/Widgets'
import Chart from '../../Components/Chart/Chart'
import Table1 from '../../Components/Table/Table'
export default function Home() {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homecontainer">
                <Navbar />
                <div className="wiedgets">
                    <Widgets type='user' />
                    <Widgets type='order' />
                    <Widgets type='earning' />
                    <Widgets type='balance' />
                </div>
                <div className="chartcontainer">
                    <Chart />
                </div>
                <div className="listcontainer">
                    <div className="listtitle">Total Order</div>
                    <Table1 />
                </div>
            </div>

        </div>
    )
}
