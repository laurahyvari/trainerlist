import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Trainingslist from './Trainingslist';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer'
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

const saveCustomer = (customer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(customer)
  }  )
  .then(res => fetchData())
  .catch(err => console.error(err))
}

const deleteCustomer = (link) => {
    if(window.confirm('Are you sure?')){

    
    fetch(link, {method: 'DELETE'})
    .then(res => fetchData())
    .catch(err => console.error(err))
    }
}

const updateCustomer = (customer, link) =>{

    fetch(link,  {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },

    body: JSON.stringify(customer)
})
.then(res => fetchData())
.catch(err => console.error(err))
}


const getTrainings = (customer, link) =>{

    fetch(link, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    

        body: JSON.stringify(customer)

    }).then(res => fetchData())
    .catch(err => console.error(err))
    }


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
        Header: 'Trainings',
        accessor:'links[2].href', 

    },

     {
        sortable:false,
        filterable: false,
        width:100,

         Cell: row => <EditCustomer updateCustomer ={updateCustomer} customer={row.original} />

    },
    {
        sortable:false,
        filterable:false,
        width:100,
        accessor:'links[0].href',
        Cell: row => <Button size="small" color="default" onClick={() => deleteCustomer(row.value)}>Delete</Button>

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
        <AddCustomer saveCustomer={saveCustomer} />
        < ReactTable filterable = {true} data={customers} columns = {columns} />            
        </div>
    );
}

