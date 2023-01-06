import { CssBaseline } from '@mui/material';
import React from 'react';
import { BoxStyled } from '../../Components/Box/Boxs';
import Navbar from '../../Components/Navbar/Navbar';
import AddNewPage from './form.AddNote';

const AddNote = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <BoxStyled>
        <AddNewPage />
      </BoxStyled>
    </>
  );
};

export default AddNote;
