import React from 'react';
import PropTypes from 'prop-types';

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

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddNote(this.state);
        this.setState({
            title: '',
            content: '',
        });
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
                <button type='submit'>Create Note</button>
            </form>
        );
    }
}

NoteCreateForm.propTypes = {
    handleAddNote: PropTypes.func,
};