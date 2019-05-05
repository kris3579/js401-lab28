import React from 'react';

import NoteCreateForm from './NoteCreateForm/NoteCreateForm';
import NoteList from './NoteList/NoteList';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.notes = [];
    };

    handleAddNote = note => {
        note.id = Math.random();
        note.createdOn = new Date();

        this.setState((previousState) => {
            return {
                notes: [...previousState.notes, note],
            }
        });
    };

    handleRemoveNote = (noteToRemove) => {
        this.setState((previousState) => {
            return {
                notes: previousState.notes.filter(currentNote => currentNote.id !== noteToRemove.id)
            }
        });
    };

    handleUpdateNote = (updatedNote) => {
        this.setState((previousState) => {
            return {
                notes: [...previousState.notes.filter(currentNote => currentNote.id !== updatedNote.id), updatedNote],
            }
        });
    };

    render() {
        return (
            <div>
                <h2>Dashboard</h2>
                <NoteCreateForm
                    handleAddNote={this.handleAddNote}
                />
                <NoteList
                    notes={this.state.notes}
                    handleRemoveNote={this.handleRemoveNote}
                    handleUpdateNote={this.handleUpdateNote}
                />
            </div>
        );
    };
}
