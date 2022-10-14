import React from 'react'
import '../DataTable/datatable.scss'
import { Link } from "react-router-dom";

import { DataGrid } from '@mui/x-data-grid';
export default function DataTable() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70, },

        { field: 'fullName', headerName: 'Full Name', width: 130 },

        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 70,
        },
        {
            field: 'userName',
            headerName: 'UserName',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 100,
            valueGetter: (params) =>
                `${params.row.fullName || ''} ${params.row.mobile || ''}`,
        },

        { field: 'mobile', headerName: 'Mobile', width: 110 },
        { field: 'email', headerName: 'Email', width: 300 },
        { field: 'address', headerName: 'Address', width: 150 },

        {
            field: 'status', headerName: 'Status', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <div className={`status ${params.row.status}`}>{params.row.status}</div>
                    </>
                )
            }


        },


    ];

    const rows = [
        { id: 1, fullName: 'Snow Jon', age: 35, address: 'Lucknow', status: 'Active', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 2, fullName: 'Lannister Cersei', age: 42, address: 'Lucknow', status: 'Ofline', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 3, fullName: 'Lannister Jaime', age: 45, address: 'Lucknow', status: 'Active', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 4, fullName: 'Stark Arya', age: 16, address: 'Lucknow', status: 'Ofline', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 5, fullName: 'Targaryen Daenerys', age: null, address: 'Lucknow', status: 'Ofline', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 6, fullName: 'Melisandre', age: 150, address: 'Lucknow', status: 'Active', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 7, fullName: 'Clifford Ferrara', age: 44, address: 'Lucknow', status: 'Ofline', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 8, fullName: 'Frances Rossini', age: 36, address: 'Lucknow', status: 'Active', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },
        { id: 9, fullName: 'Roxie Harvey', age: 65, address: 'Lucknow', status: 'Ofline', email: 'yaduvanshiamit545@gmail.com', mobile: '6388131984' },

    ];

    const actionColumn = [{
        field: "action", headerName: 'Action', width: 200,
        renderCell: (params) => {
            return (<>
                <div className='cellAction'>
                    <div className='viewbutton'>
                        <Link to={`/user/ ${params.row.id}`} style={{ display: 'flex', textDecoration: 'none' }}>
                            View

                        </Link></div>
                    <div className='deletebutton'>Delete</div>
                </div>
            </>)
        }
    }]
    return (
        <>

            <div className='datatable'>

                <DataGrid

                    rows={rows}
                    columns={columns.concat(actionColumn)}
                    pageSize={6}
                    rowsPerPageOptions={[6]}
                    checkboxSelection
                />
            </div>

        </>
    )
}
