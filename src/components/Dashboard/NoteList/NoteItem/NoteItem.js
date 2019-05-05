import React from 'react';
import PropTypes from 'prop-types';

import NoteUpdateForm from './NoteUpdateForm/NoteUpdateForm';

export default class NoteItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.currentNote.title}</h3>
                <p>{this.props.currentNote.content}</p>
                <NoteUpdateForm
                    currentNote={this.props.currentNote}
                    handleUpdateNote={this.props.handleUpdateNote}
                />
                <button onClick={this.props.handleRemoveNote.bind(null, this.props.currentNote)}>Delete Note</button>
            </div>
        );
    }
}

NoteItem.propTypes = {
    currentNote: PropTypes.object,
    handleRemoveNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
};