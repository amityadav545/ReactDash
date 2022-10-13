import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Table/table.scss'
export default function Table1() {
    const rows = [
        {
            id: '1313',
            product: "xyz",
            img: 'chvnmb',
            customer: 'ppttyy',
            date: '11 / 12 / 15',
            amount: 2000,
            method: 'cash'
        },
        {
            id: '13134',
            product: "xyz",
            img: 'chvnmb',
            customer: 'ppttyy',
            date: '11 / 12 / 15',
            amount: 2000,
            method: 'cash'
        },
        {
            id: '13135',
            product: "xyz",
            img: 'chvnmb',
            customer: 'ppttyy',
            date: '11 / 12 / 15',
            amount: 2000,
            method: 'cash'
        },
        {
            id: '13136',
            product: "xyz",
            img: 'chvnmb',
            customer: 'ppttyy',
            date: '11 / 12 / 15',
            amount: 2000,
            method: 'cash'
        },
        {
            id: '13137',
            product: "xyz",
            img: 'chvnmb',
            customer: 'ppttyy',
            date: '11 / 12 / 15',
            amount: 2000,
            method: 'cash'
        }
    ];
    return (
        <div className='table'>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablecell'>ID</TableCell>
                            <TableCell className='tablecell'>PRODUCT</TableCell>
                            <TableCell className='tablecell'>IMG</TableCell>
                            <TableCell className='tablecell'>CUSTOMER</TableCell>
                            <TableCell className='tablecell'>AMOUNT</TableCell>
                            <TableCell className='tablecell'>DATE</TableCell>
                            <TableCell className='tablecell'>METHOD</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}

                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.product}</TableCell>
                                <TableCell >{row.img}</TableCell>
                                <TableCell>{row.customer}</TableCell>
                                <TableCell >{row.amount}</TableCell>
                                <TableCell >{row.date}</TableCell>
                                <TableCell >{row.method}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
