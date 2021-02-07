import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { ArrowDropDown, AccountCircle } from '@material-ui/icons';
import Header from '../UI/Header';

const RaccoonList = () => {
	return (
		<>
			<Header
				right={
					<div>
						<Button
							variant="contained"
							color="primary"
							className={`${'NavBtn'} ${'createBtn'}`}
							disableElevation
						>
							CREATE
						</Button>
						<Button
							variant="contained"
							color="default"
							className="NavBtn"
							endIcon={<ArrowDropDown fontSize="large" />}
							size="small"
						>
							<AccountCircle />
						</Button>
					</div>
				}
			/>
			<Grid container linespacing={2}></Grid>
		</>
	);
};

export default RaccoonList;
