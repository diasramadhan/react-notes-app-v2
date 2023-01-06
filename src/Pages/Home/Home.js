import {
  Box,
  CssBaseline,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import ButtonAdd from '../../Components/Buttons/button.Add';
import Loading from '../../Components/Loading/loading';
import Navbar from '../../Components/Navbar/Navbar';
import NoteItem from '../../Components/Note/NoteItem';
import { TranslateCtx } from '../../Context/TranslateContext';
import { getActiveNotes } from '../../Services';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { lang } = useContext(TranslateCtx);
  const [langActive, setLangActive] = useState({
    head: '',
    search: '',
    none: '',
  });

  const text = {
    english: {
      head: 'Active Note',
      search: 'Search by title..',
      none: 'No Notes',
    },
    bahasa: {
      head: 'Catatan Aktif',
      search: 'Cari dengan judul..',
      none: 'Tidak ada catatan',
    },
  };
  const getActiveNotesFromAPI = async () => {
    setIsLoading(true);
    await getActiveNotes()
      .then((res) => {
        setNotes(res.data);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    let isChange = false;
    if (isChange === false) {
      getActiveNotesFromAPI();
      lang === 'id'
        ? setLangActive(text.bahasa)
        : setLangActive(text.english);
    }
    return () => {
      isChange = true;
    };
  }, [lang]);

  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box
        flex={1}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          minHeight: '100vh',
        }}
      >
        <Box
          sx={{
            width: '90%',
            display: 'flex',
            height: '200px',
            justifyContent: 'space-between',
            flexDirection: 'column',
            alignItems: 'flex-start',
            pt: 5,
          }}
        >
          <Typography variant="h3">{langActive.head}</Typography>
          <TextField
            fullWidth
            type={'text'}
            label={langActive.search}
            onChange={(e) =>
              setQuery((prev) => (prev = e.target.value))
            }
          />
        </Box>

        <Box
          flex={1}
          flexDirection="row"
          sx={{
            minWidth: '90%',
            maxWidth: '90%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {notes.length === 0 ? (
            <Box
              sx={{
                width: '100%',
                height: '100px',
                textAlign: 'center',
                marginTop: '100px',
              }}
            >
              {' '}
              {isLoading ? null : (
                <Typography variant="h6">
                  {langActive.none}
                </Typography>
              )}
            </Box>
          ) : (
            notes.map((note) => {
              let title = note.title;
              let titleLow = title.toLowerCase();
              if (titleLow.includes(query.toLowerCase())) {
                return <NoteItem key={note.id} {...note} />;
              }
            })
          )}
        </Box>
        <ButtonAdd />
        {isLoading ? <Loading /> : null}
      </Box>
    </>
  );
};

export default Home;
