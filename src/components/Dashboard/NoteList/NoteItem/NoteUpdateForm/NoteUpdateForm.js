import React from 'react';
import PropTypes from 'prop-types';

export default class NoteUpdateForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.currentNote.title,
            content: this.props.currentNote.content,
        };
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let updatedNote = this.props.currentNote;
        updatedNote.title = this.state.title;
        updatedNote.content = this.state.content;
        this.props.handleUpdateNote(updatedNote);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    name='title'
                    placeholder='title'
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='content'
                    placeholder='content'
                    value={this.state.content}
                    onChange={this.handleChange}
                />
                <button type='submit'>Update Note</button>
            </form>
        )
    }
}

NoteUpdateForm.propTypes = {
    currentNote: PropTypes.object,
    handleUpdateNote: PropTypes.func,
}