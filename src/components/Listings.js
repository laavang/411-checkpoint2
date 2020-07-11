import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import listings from '../listings.json'
import { Link } from 'react-router-dom'

const Listings = () => {
    return (
        <Container maxWidth="lg" className="listings">
            <Table className="listing-table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Name</TableCell>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Address</TableCell>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Hours</TableCell>
                        <TableCell style={{ width: "55%" }}>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listings.map((listing, id) => (
                        <TableRow key={id}>
                            <TableCell component="th" scope="row">
                            <Link to={`/details?id=${listing.id}`}>{listing.name}</Link>
                            </TableCell>
                            <TableCell>{listing["address"]}</TableCell>
                            <TableCell>{listing["hours"]}</TableCell>
                            <TableCell>{listing["description"]}</TableCell>
                            {/* <TableCell>
                            <DeleteIcon
                                // add onClick method here
                                onClick ={() => props.removeCar(idx)}
                                className="icon text-red" />
                        </TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listings