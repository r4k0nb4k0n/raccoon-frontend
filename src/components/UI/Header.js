import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	bar: {
		backgroundColor: 'black', // 색상 팔레트가 만들어지면 수정해주세요!
		boxShadow: 'none',
		borderBottom: '0.2rem solid white', // 색상 팔레트가 만들어지면 수정해주세요!
	},
	left: {
		flexGrow: 1,
	},
	title: {
		letterSpacing: '.1rem',
		margin: theme.spacing(1),
		display: 'inline-block',
	},
}));

// props.left는 타이틀의 바로 왼쪽에 생성
// props.right는 bar의 오른쪽에 순서대로 생성됩니다.
function Header(props) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.bar}>
				<Toolbar color="inherit">
					<div className={classes.left}>
						<Typography variant="h4" className={classes.title}>
							RACCOON
						</Typography>
						{props.left}
					</div>
					<div className={classes.right}>{props.right}</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
