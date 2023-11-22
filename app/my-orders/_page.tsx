'use client'
import { styles } from '@/utils/styles'
import { format } from "timeago.js"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/material'

type Props = {
    data: any
}

const UserAllOrders = ({ data }: Props) => {

    const columns = [
        { field: "id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Prompts Title", flex: 0.8 },
        { field: "price", headerName: "Prompts Price", flex: 0.5 },
        {
            field: "download", headerName: "Download Source Code", flex: 0.5, renderCell: (params: any) => {
                return (
                    <div className=''>

                    </div>
                )
            }
        },
        {
            field: "OrderedAt",
            headerName: "Ordered At",
            flex: 0.5,
        },
    ];

    const rows: any = [];

    data && data.forEach((item: any) => rows.push({
        id: item.id,
        name: item.prompt.name,
        price: "$US" + item.prompt.price,
        download: item.prompt.sourceCode,
        OrderedAt: format(item.createdAt)
    }))

    return (
        <div className='w-[90%] m-auto'>
            <h1 className={`${styles.heading} text-center py-5`}>
                All Orders
            </h1>
            <br />
            <br />
            <Box m="20px">
                        <Box
                            m="40px 0 0 0"
                            height={"80vh"}
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                    outline: "none",
                                },
                                "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
                                    color: "#fff",
                                },
                                "& .MuiDataGrid-sortIcon": {
                                    color: "#fff",
                                },
                                "& .MuiDataGrid-row": {
                                    color: "#fff",
                                    borderBottom: "1px solid #ffffff30!important",
                                },
                                "& .MuiTablePagination-root": {
                                    color: "#fff",
                                },
                                "& .MuiDataGrid-cell": {
                                    borderBottom: "none!important",
                                },
                                "& .name-column--cell": {
                                    color: "#fff",
                                },
                                "& .MuiDataGrid-columnHeaders": {
                                    backgroundColor: "#3e4396",
                                    borderBottom: "none",
                                    color: "#fff",
                                },
                                "& .MuiDataGrid-virtualScroller": {
                                    backgroundColor: "#1F2A40",
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    color: "dark",
                                    borderTop: "none",
                                    backgroundColor: "#3e4396",
                                },
                                "& .MuiCheckbox-root": {
                                    color: `#b7ebde !important`,
                                },
                                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                                    color: `#fff !important`,
                                },
                            }}
                        >
                            <DataGrid rows={rows} columns={columns} />
                        </Box>
                    </Box>
        </div>
    )
}

export default UserAllOrders