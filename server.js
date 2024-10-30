const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(morgan('dev')); // Re-added Morgan for better logging
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
    });
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/login/login.html');
});

app.get('/newsongorproject', (req, res) => {
    res.sendFile(__dirname + '/public/newsongorproject/newsongorproject.html');
});

app.get('/nameyourproject', (req, res) => {
    res.sendFile(__dirname + '/public/nameyourproject/nameyourproject.html');
});

app.get('/chooseyourtheme', (req, res) => {
    res.sendFile(__dirname + '/public/chooseyourtheme/chooseyourtheme.html');
});

app.get('/recordyouraudio', (req, res) => {
    res.sendFile(__dirname + '/public/recordyouraudio/recordyouraudio.html');
});

app.get('/setupyourproject', (req, res) => {
    res.sendFile(__dirname + '/public/setupyourproject/setupyourproject.html');
});

app.get('/generatedlyrics', (req, res) => {
    res.sendFile(__dirname + '/public/generatedlyrics/generatedlyrics.html');
});

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/public/projects/projects.html');
});

app.get('/settings', (req, res) => {
    res.sendFile(__dirname + '/public/settings/settings.html');
});

app.get('/help', (req, res) => {
    res.sendFile(__dirname + '/public/help/help.html');
});

// Example resource endpoint
app.get('/api/items', (req, res) => {
    res.json({
        status: 'success',
        data: [
            { id: 1, name: 'Item 1' },
            { id: 2, name: 'Item 2' }
        ]
    });
});

// POST example
app.post('/api/items', (req, res) => {
    const { name } = req.body;
    res.json({
        status: 'success',
        message: 'Item created',
        data: { id: 3, name }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});