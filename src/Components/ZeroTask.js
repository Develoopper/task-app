import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// TODO:
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import RedoIcon from '@material-ui/icons/Redo';

const useStyles = makeStyles((theme) => ({
  root: {
		maxWidth: 345,
		// TODO:
		height: 200,
		backgroundColor: theme.palette.primary.main,
		color: "white",
		display:"flex", 
		alignItems: "center", 
		justifyContent: "center",
		borderRadius: 15
	},
}));

export default function ZeroTask() {
  const classes = useStyles();

  return (
		<Grid item xs={12} sm={6} md={4} lg={3} spacing={3}>
			<Card className={classes.root}>
				{/* TODO: */}
				<Typography gutterBottom variant="h5" component="h2" align="center">
					Click on + {<br/>}
					to add a new task {<RedoIcon/>}
				</Typography>
			</Card>
		</Grid>	
  );
}
