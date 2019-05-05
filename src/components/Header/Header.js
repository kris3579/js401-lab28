import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
    render() {
        const ulStyle = {
            listStyleType: 'none',
        };

        const liStyle = {
            display: 'inline-block',
            margin: '0 1vw 2vh 1vw'
        };

        return (
            <nav>
                <ul style={ulStyle}>
                    <li style={liStyle}><Link to='/'>Home</Link></li>
                    <li style={liStyle}><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </nav>
        )
    }
}