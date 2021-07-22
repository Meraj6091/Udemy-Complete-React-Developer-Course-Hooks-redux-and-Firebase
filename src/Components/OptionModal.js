import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => {
	return (
		<Modal
			isOpen={!!props.SelectedOption}
			contentLabel="Select Option"
			ariaHideApp={false}
			onRequestClose={props.handleCloseModal}
		>
			<h3>Selected Option</h3>
			{props.SelectedOption && <p>{props.SelectedOption}</p>}
			<button onClick={props.handleCloseModal}>OK</button>
		</Modal>
	);
};
export default OptionModal;
