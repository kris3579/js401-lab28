import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal/Modal'
import NoteCreateForm from '../NoteCreateForm/NoteCreateForm';

export default class NoteItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.updateing = false;
    }
    render() {
        const currentNote = this.props.currentNote;

        const showModal = () => this.props.handleUpdateNote({...currentNote, editing: true});
    
        const hideModal = () => this.props.handleUpdateNote({...currentNote, editing: false});
        
        return (
            <div>
                <h3>{this.props.currentNote.title}</h3>
                <p>{this.props.currentNote.content}</p>
                <button onClick={this.props.handleRemoveNote.bind(null, this.props.currentNote)}>Delete Note</button>
                <button onClick={showModal}>Edit Note</button>
                <Modal 
                    show={currentNote.editing}
                    hideModal={hideModal}
                >
                    <NoteCreateForm
                        currentNote={this.props.currentNote}
                        handleUpdateNote={this.props.handleUpdateNote}
                        updateing={true}
                    />
                </Modal>
            </div>
        );
    }
}

NoteItem.propTypes = {
    currentNote: PropTypes.object,
    handleAddNote: PropTypes.func,
    handleRemoveNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
};