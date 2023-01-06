import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../../Utils/format-date';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: 370 },
        height: 300,
        mt: 5,
        mr: { xs: 0, md: 3 },
        display: 'flex',
      }}
    >
      <CardContent>
        <Link to={`/note/${id}`}>
          <Typography
            variant="h5"
            color={'text.primary'}
            style={{
              textDecoration: 'underline',
            }}
          >
            {title}
          </Typography>
        </Link>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {showFormattedDate(createdAt)}
        </Typography>
        <Typography variant="body2" component="div">
          {parser(body)}
        </Typography>
      </CardContent>
    </Card>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default NoteItem;
