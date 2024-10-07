import React from 'react';
// import { getAllNotes } from "../utils/local-data";
// import NoteList from "./NoteList";
import NoteInput from './NoteInput';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import NoteDetail from './NoteDetail';


function NoteApp() {
    return (
        <div className="app-container">
        <header>
        <h1>Note-App</h1>
        <Navigation />
        </header>
        <main>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/add' element={<AddPage />} />
            <Route path="/detail/:id" element={<NoteDetail />} />
        </Routes>
        </main>
    </div>
    )
}

export default NoteApp;