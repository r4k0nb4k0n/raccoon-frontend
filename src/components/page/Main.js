import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { Header } from '../UI';

const Main = () => {
	return (
		<React.Fragment>
			<Header />
			<Grid container spacing={3} className="main">
				<Grid item>
					<Link to={`/play/pin`}>
						<Button className="playButton" size="large">
							PLAY
						</Button>
					</Link>
				</Grid>
				<Grid item>
					<Link to={`/create`}>
						<Button className="createButton" size="large">
							HOST
						</Button>
					</Link>
				</Grid>
			</Grid>
		</React.Fragment>
	);
};

export default Main;
