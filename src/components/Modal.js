import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../actions/productActions';
import { PRODUCT_CREATE_RESET } from '../constants/productContants';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  //   width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const productCreate = useSelector((state) => state.productCreate);
  const { loading, error, success: successCreate } = productCreate;

  useEffect(() => {
    if (successCreate) {
      dispatch({ type: PRODUCT_CREATE_RESET });
    } else {
      setId(0);
      setName('');
      setPrice(0);
    }
  }, [dispatch, successCreate]);

  const createProductHandler = (e) => {
    console.log('Create Product');
    e.preventDefault();

    dispatch(
      createProduct({
        id,
        name,
        price,
      })
    );
  };

  return (
    <div>
      <Button onClick={handleOpen} variant='contained'>
        Add Product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='parent-modal-title'
        aria-describedby='parent-modal-description'
      >
        <Box
          component='form'
          sx={{
            ...style,
            width: 400,
            // '& > :not(style)': { m: 1 },
          }}
        >
          <h2 id='parent-modal-title'>Input on fields to add product.</h2>
          <FormControl fullWidth={true}>
            <TextField
              id='outlined-basic'
              label='Id'
              variant='outlined'
              sx={{ my: 1 }}
              onChange={(e) => setId(e.target.value)}
            />
            <TextField
              id='outlined-basic'
              label='Name'
              variant='outlined'
              sx={{ my: 1 }}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id='outlined-basic'
              label='Price'
              variant='outlined'
              sx={{ my: 1 }}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Button variant='contained' onClick={createProductHandler}>
              Add
            </Button>
          </FormControl>
          {/* <ChildModal /> */}
        </Box>
      </Modal>
    </div>
  );
}
