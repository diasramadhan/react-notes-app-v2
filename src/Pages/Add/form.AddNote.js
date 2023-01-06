import { Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BoxForm } from '../../Components/Box/Boxs';
import ButtonSave from '../../Components/Buttons/button.Save';
import Loading from '../../Components/Loading/loading';
import { addNote } from '../../Services';

const AddNewPage = () => {
  const [newNote, setNewNote] = useState({
    title: '',
    body: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const getDataInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'title') {
      setNewNote((prev) => ({ ...prev, title: value }));
    }
    if (name === 'body') {
      setNewNote((prev) => ({ ...prev, body: value }));
    }
  };
  const handleSave = async () => {
    setIsLoading(true);
    // if (newNote.title === '') {
    //   setIsLoading(false);
    //   return null;
    // }
    // if (newNote.body === '') {
    //   setIsLoading(false);
    //   return null;
    // }
    const response = await addNote(newNote)
      .then((res) => {
        return res;
      })
      .finally(() => setIsLoading(false));
    if (response.error === false) {
      return navigate('/');
    }
  };
  return (
    <BoxForm>
      <TextField
        fullWidth
        id="title"
        label="Catatan rahasia"
        type="text"
        variant="outlined"
        name="title"
        onChange={(e) => getDataInput(e)}
      />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Deskripsikan catatan anda ...."
        type="text"
        multiline
        rows={6}
        variant="outlined"
        name="body"
        onChange={(e) => getDataInput(e)}
      />
      <Box onClick={() => handleSave()}>
        <ButtonSave />
      </Box>
      {isLoading ? <Loading /> : null}
    </BoxForm>
  );
};

export default AddNewPage;
