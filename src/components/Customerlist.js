import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Trainingslist from './Trainingslist';
import { Link } from "react-router-dom";

/* Create pages to list customers and trainings

List pages should contain following features:

- Sorting

- Searching

Note! You can use moment.js library for date formatting */
export default function Customerlist(){

 const [customers, setCustomers] = useState([]);

const fetchData = () => {

    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
}

useEffect(() => {
	fetchData();
}, []);

    const columns = [
        {
        Header: 'Firstname',
        accessor: 'firstname',
        },  
    
    {
        Header: 'Lastname',
        accessor: 'lastname',
        
    },
    {
        Header: 'Street address',
        accessor: 'streetaddress',
        
    },
    {
        Header: 'Postcode',
        accessor: 'postcode',
        
    },
    {
        Header: 'City',
        accessor: 'city',
        
    },
    {
        Header: 'Email',
        accessor: 'email',
        
    },
    {
        Header: 'Phone',
        accessor: 'phone',
        
    },
     {
        sortable:true,
        filterable: true,
        width:100,
        
    } 
    ]

    return(
        
        <div>
            <h2>Customers</h2>
            <Link to="/trainings">
        <button variant="outlined" >
            Trainings
         </button>
</Link>
        < ReactTable filterable = {true} data={customers} columns = {columns} />            
        </div>
    );
}

