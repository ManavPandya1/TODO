/*import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import TodoList from "./TodoList";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const handleLogout = () => {

    };
    return (
        <nav>
            <Router>
                <div className="app">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/TodoList">Todo List</Link>
                            </li>
                            {user ? (
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser}/>}/>
                    <Route path="/signup" element={<Signup setUser={setUser}/>}/>
                    <Route path="/todoList" element={<TodoList/>}/>
                </Routes>
            </Router>
        </nav>
    );
};

export default Navbar;*/

import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import TodoList from "./TodoList";
import FileUpload from "./FileUpload";

const Navbar = () => {
    const [user, setUser] = useState(null);
    const handleLogout = () => {
        // Add logout logic here
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('/api/upload', {
                    method: 'POST',
                    body: formData
                });
                // Handle response accordingly
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    return (
        <nav>
            <Router>
                <div className="app">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/Home">Home</Link>
                            </li>
                            <li>
                                <Link to="/TodoList">Todo List</Link>
                            </li>
                            <li>
                                <Link to="/upload">Upload File</Link>
                            </li>
                            {user ? (
                                <li>
                                    <button onClick={handleLogout}>Logout</button>
                                </li>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup">Signup</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/signup" element={<Signup setUser={setUser} />} />
                    <Route path="/todoList" element={<TodoList />} />
                    <Route path="/upload" element={<FileUpload/>} />
                </Routes>
            </Router>
        </nav>
    );
};

export default Navbar;
