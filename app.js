const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

// session configuration
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true
}));

// route
app.get('/', (req, res) => {
    res.render('stage1', { personalInfo: req.session.personalInfo || {} });
});

app.post('/stage2', (req, res) => {
    req.session.personalInfo = req.body;  // store personal info
    res.redirect('/stage2');
});

app.get('/stage2', (req, res) => {
    res.render('stage2', {
        personalInfo: req.session.personalInfo || {},
        travelPreferences: req.session.travelPreferences || {}
    });
});

app.post('/stage3', (req, res) => {
    req.session.travelPreferences = req.body;  // store travel info
    res.redirect('/stage3');
});

app.get('/stage3', (req, res) => {
    res.render('stage3', {
        personalInfo: req.session.personalInfo || {},
        travelPreferences: req.session.travelPreferences || {},
        healthInfo: req.session.healthInfo || {}
    });
});

app.post('/submit', (req, res) => {
    req.session.healthInfo = req.body;  // store health info

    // final data, can be stored into databases;
    console.log({
        personalInfo: req.session.personalInfo,
        travelPreferences: req.session.travelPreferences,
        healthInfo: req.session.healthInfo
    });

    req.session.destroy();

    res.render('success');
});

// running server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
