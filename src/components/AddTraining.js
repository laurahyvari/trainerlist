import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';


export default function AddTraining(props){

    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
       date:'', duration:'', activity:'', 
    })
    const handleClickOpen = () => {

        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);

    }

const handleInputChange = (e) => {
    setTraining({...training, [e.target.name]: e.target.value })

}

const addTraining = () => {

    props.saveCustomer(training, props.customer.links[2].href);
    handleClose();
}
    return(

        <div>
        
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Training</DialogTitle>
        <DialogContent>
                    
                    <TextField
                        autoFocus
                        margin="dense"
                        name="Date"
                        value={training.date}
                        label="Date"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />

                    <TextField
                        
                        margin="dense"
                        name="duration"
                        value={training.duration}
                        label="Duration"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                    <TextField
                        
                        margin="dense"
                        name="activity"
                        value={training.activity}
                        label="Activity"
                        onChange={e => handleInputChange(e)}
                        fullWidth
                    />
                   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addTraining} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

        </div>
    );
}