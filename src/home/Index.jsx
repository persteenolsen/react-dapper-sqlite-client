import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>React - CRUD Example with React Hook Form</h2>
            <p>Last updated: 24-02-2026</p>
            <p>List, add, edit and delete user records with React and the React Hook Form library</p>
            <p><Link to="users">&gt;&gt; Manage Users</Link></p>
        </div>
    );
}

export { Home };