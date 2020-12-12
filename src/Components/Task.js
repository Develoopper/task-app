import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import {
	Delete as DeleteIcon,
	Edit as EditIcon
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
		maxWidth: 345,
		// backgroundColor: theme.palette.primary.main
	},
}));

export default function Task({title, content, handleDelete}) {
  const classes = useStyles();

  return (
		<Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
						{content}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<EditIcon />}
					>
						Edit
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className={classes.button}
						startIcon={<DeleteIcon />}
						onClick={() => handleDelete(title)}
					>
						Delete
					</Button>
				</CardActions>
			</Card>
		</Grid>	
  );
}
