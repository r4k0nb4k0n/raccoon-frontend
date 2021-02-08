import React from 'react';

function CreateCard() {
	return <div>createCard</div>;
}

function RaccoonCard() {
	return <div>RaccoonCard</div>;
}

function RaccoonListUi(props) {
	const RaccoonNum = props.RaccoonNum;
	if (RaccoonNum === 0) return <CreateCard />;
	else return <RaccoonCard />;
}

export default RaccoonListUi;
