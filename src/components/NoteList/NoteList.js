import React from 'react';
import PropTypes from 'prop-types';

import NoteItem from '../NoteItem/NoteItem';

export default class NoteList extends React.Component {
    render() {
        return (
            <div>
                <h3>Notes List</h3>
                <ul>
                    {
                        this.props.notes.map(currentNote => {
                            return (
                                <NoteItem
                                    currentNote={currentNote}
                                    key={currentNote.id}
                                    handleAddNote={this.props.handleAddNote}
                                    handleRemoveNote={this.props.handleRemoveNote}
                                    handleUpdateNote={this.props.handleUpdateNote}
                                />
                                )
                            })
                        }
                </ul>
            </div>
        );
    }
}

NoteList.propTypes = {
    notes: PropTypes.array,
    handleAddNote: PropTypes.func,
    handleRemoveNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
};