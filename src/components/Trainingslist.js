import React, {useState, useEffect} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import moment from 'moment';  
import { Link } from "react-router-dom";

export default function Trainingslist(){

    const [courses, setCourses] = useState([]);
   
   const fetchData = () => {
   
       fetch('https://customerrest.herokuapp.com/api/trainings')
       .then(response => response.json())
       .then(data => setCourses(data.content))
   }
   
   useEffect(() => {
       fetchData();
   }, []);

   const deleteTraining = (link) => {
    if(window.confirm('Are you sure?')){

    
    fetch(link, {method: 'DELETE'})
    .then(res => fetchData())
    .catch(err => console.error(err))
    }
}

   const columns = [
    {
    Header: 'Date',
    accessor: 'date',
  
    },  

{
    Header: 'Duration',
    accessor: 'duration',
    
},
{
    Header: 'Activity',
    accessor: 'activity',

},
{
        sortable: false,
        filterable: false,
        width: 100,
        accessor:'links[0].href',
        Cell: row => <Button size="small" color="default" onClick={() => deleteTraining(row.value)}>Delete</Button>

    } 
]

   return(
    <div>
        <h2>Trainings</h2>
           <Link to="/">
        <button variant="outlined" >
            Customers
         </button>
</Link>
    <ReactTable filterable = {true} data={courses} columns={columns}  />
    </div>
);
}


