import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showFormattedDate } from '../../Utils/format-date';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CssBaseline } from '@mui/material';
import ButtonArchive from '../Buttons/button.Archive';
import ButtonDelete from '../Buttons/button.Delete';
import ButtonUnarchive from '../Buttons/button.Unarchive';
import PropTypes from 'prop-types';
import {
  archiveNote,
  deleteNote,
  unarchiveNote,
} from '../../Services';

const NoteDetail = ({ id, title, body, createdAt, archived }) => {
  const navigate = useNavigate();
  const handleArchive = async () => {
    await archiveNote(id).then(() => {
      return navigate('/');
    });
  };
  const handleUnArchive = async () => {
    await unarchiveNote(id).then(() => {
      return navigate('/');
    });
  };
  const handleDelete = async () => {
    await deleteNote(id).then(() => {
      return navigate('/');
    });
  };
  return (
    <>
      <CssBaseline />
      <Box>
        <Typography variant="h3">{title}</Typography>
        <Typography sx={{ mb: 2.5 }} color="text.secondary">
          {showFormattedDate(createdAt)}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </Box>
      {archived ? (
        <Box onClick={() => handleUnArchive()}>
          <ButtonUnarchive />
        </Box>
      ) : (
        <Box onClick={() => handleArchive()}>
          <ButtonArchive />
        </Box>
      )}
      <Box onClick={() => handleDelete()}>
        <ButtonDelete />
      </Box>
    </>
  );
};
NoteDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};
export default NoteDetail;
