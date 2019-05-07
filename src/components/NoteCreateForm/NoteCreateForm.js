import React from 'react';
import PropTypes from 'prop-types';

import './NoteCreateForm.scss';

export default class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleCreateSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNote(this.state);
        this.setState({
            title: '',
            content: '',
        });
    };

    handleUpdateSubmit = (event) => {
        event.preventDefault();
        let updatedNote = this.props.currentNote;
        updatedNote.title = this.state.title;
        updatedNote.content = this.state.content;
        this.props.handleUpdateNote(updatedNote);
    }

    render() {
        const titleInput = <input
                                type='text'
                                name='title'
                                placeholder='title'
                                value={this.state.title}
                                onChange={this.handleChange}
                            />;

        const contentInput = <input
                                type='text'
                                name='content'
                                placeholder='content'
                                value={this.state.content}
                                onChange={this.handleChange}
                            />

        const createForm = <form onSubmit={this.handleCreateSubmit}>
                                {titleInput}
                                {contentInput}
                                <button type='submit'>Create Note</button>
                            </form>

        const updateForm = <form onSubmit={this.handleUpdateSubmit}>
                                {titleInput}
                                {contentInput}
                                <button type='submit'>Edit Note</button>
                            </form>

        const renderedForm = this.props.updateing ? updateForm : createForm;
        return (
            <div>
                {renderedForm}
            </div>
        );
    }
}

NoteCreateForm.propTypes = {
    currentNote: PropTypes.object,
    handleAddNote: PropTypes.func,
    handleUpdateNote: PropTypes.func,
    updateing: PropTypes.bool,
};