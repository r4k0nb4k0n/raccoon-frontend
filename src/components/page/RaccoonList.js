import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDropDown } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	createBtn: {
		border: 'solid 1.5pt white',
	},
}));

const RaccoonList = () => {
	const classes = useStyles();
	return (
		<Grid container linespacing={2}>
			<Button
				variant="contained"
				color="primary"
				className={classes.createBtn}
				disableElevation
			>
				CREATE
			</Button>
			<Button
				variant="contained"
				color="default"
				startIcon={}
				endIcon={<ArrowDropDown fontSize="large" />}
			></Button>
		</Grid>
	);
};

export default RaccoonList;
