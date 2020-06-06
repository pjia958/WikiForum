    import React from 'react';
    import Button from '@material-ui/core/Button';
    import Dialog from '@material-ui/core/Dialog';
    import DialogActions from '@material-ui/core/DialogActions';
    import DialogContent from '@material-ui/core/DialogContent';
    import DialogContentText from '@material-ui/core/DialogContentText';
    import DialogTitle from '@material-ui/core/DialogTitle';
    
    export default function LogoutPage() {
      const [open, setOpen] = React.useState(true);
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = (event) => {
        setOpen(false);
        //console.log(event.target.innerText);
        if(event.target.innerText === "YES" ){
            //log out
            localStorage.setItem('firstName','')
            localStorage.setItem('lastName','')
            localStorage.setItem('ifLogged', 'N')
            window.location = "http://localhost:3000/"
        } else {
            window.location = "http://localhost:3000/"
        }
        
      };
    
      return (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"From Wiki Forum"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you want to log out
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button id="N" onClick={handleClose} color="primary">
                No
              </Button>
              <Button id="Y" onClick={handleClose} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
    