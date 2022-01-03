import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardView = (props) => {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" align="left">
          Name: {props.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary" align="left">
          Brewery Type: {props.brewery_type}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.primary" align="left">
          City: {props.city}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'center' }}>
        <Link to={`/${props.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained">View Detail</Button>
        </Link>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default CardView;
