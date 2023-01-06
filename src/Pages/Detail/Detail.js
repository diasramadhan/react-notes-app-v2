import React, { useEffect, useState } from 'react';
import { CssBaseline, Typography } from '@mui/material';
import NoteDetail from '../../Components/Note/NoteDetail';
import { getNote } from '../../Services';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { BoxDetail } from '../../Components/Box/Boxs';
import Loading from '../../Components/Loading/loading';

const Detail = () => {
  const [note, setNote] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getNoteFromAPI = async () => {
    setIsLoading(true);
    await getNote(id)
      .then((res) => {
        setNote(res.data);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      getNoteFromAPI();
    }
    return () => (isChange = true);
  }, []);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <BoxDetail>
        {note.length === 0 ? (
          <Typography>Note tidak ada..</Typography>
        ) : (
          <NoteDetail {...note} />
        )}
      </BoxDetail>
      {isLoading ? <Loading /> : null}
    </>
  );
};

export default Detail;
