import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete'



const Listings = (props) => {
    return (
        <Container maxWidth="lg" className="listings">
            <Table className="listing-table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Name</TableCell>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Address</TableCell>
                        <TableCell style={{ width: "15%", minWidth: "130px" }}>Hours</TableCell>
                        <TableCell style={{ width: "50%" }}>Description</TableCell>
                        {(props.user && props.user.isLoggedIn) || document.cookie ?
                            < TableCell style={{ width: "5%" }}>Delete</TableCell>
                            : ""
                        }
                    </TableRow>
                </TableHead>
            <TableBody>
                {props.listings.map((listing, index) => (
                    <TableRow key={index}>
                        <TableCell component="th" scope="row">
                            <Link to={`/details?id=${index + 1}`}>{listing.name}</Link>
                        </TableCell>
                        <TableCell>{listing["address"]}</TableCell>
                        <TableCell>{listing["hours"]}</TableCell>
                        <TableCell>{listing["description"]}</TableCell>
                        {(props.user && props.user.isLoggedIn) || document.cookie ?
                        <TableCell style={{textAlign:"center"}}>
                            <DeleteIcon 
                                onClick ={() => props.deleteListing(index)}
                                className="icon text-red" />
                        </TableCell>
                        : ""
                        }
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </Container >
    )
}

export default Listings