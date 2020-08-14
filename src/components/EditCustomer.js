import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';


export default function EditCustomer(props){

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:'', trainings:''
    })
    


    const handleClickOpen = () => {
        
        setCustomer({firstname: props.customer.firstname, lastname: props.customer.lastname, streetaddress: props.customer.streetaddress,
       postcode: props.customer.postcode, city: props.customer.city, email: props.customer.email, phone: props.customer.phone, trainings: props.customer.trainings });
        setOpen(true);

        
    };
    const handleClose = () => {
        setOpen(false);

    }

const handleInputChange = (e) => {
    setCustomer({...customer, [e.target.name]: e.target.value })

}

const editCustomer = () => {

    props.updateCustomer(customer, props.customer.links[0].href);
    handleClose();
}



return(
<div>
        <Button style={{margin:10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Edit Customer
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Customer</DialogTitle>
        <DialogContent>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        name="firstname"
                        value={customer.firstname}
                        label="Firstname"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="lastname"
                        value={customer.lastname}
                        label="Lastname"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="streetaddress"
                        value={customer.streetaddress}
                        label="Street address"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="postcode"
                        value={customer.postcode}
                        label="Postcode"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="email"
                        value={customer.email}
                        label="Email"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="phone"
                        value={customer.phone}
                        label="Phone"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />

<TextField
                        
                        margin="dense"
                        name="trainings"
                        value={customer.trainings}
                        label="Trainings"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={editCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    );
}