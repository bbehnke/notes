const express = require('express');
const bodyParser = require('body-parser');
const low = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync');

// Create server
const app = express();
app.use(bodyParser.json());

// Create database instance and start server
const adapter = new FileAsync('db.json');
low(adapter)
  .then((db) => {
    // Routes
    // GET /notes
    app.get('/api/notes', (req, res) => {
      const notes = db.get('notes').value();
      res.send(notes);
    });

    // POST /posts
    // app.post('/posts', (req, res) => {
    //   db.get('posts')
    //     .push(req.body)
    //     .last()
    //     .assign({ id: Date.now().toString() })
    //     .write()
    //     .then(post => res.send(post));
    // });

    // Set db default values
    return db.defaults({
      notes: [
        { id: '1', value: 'Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotesNotes notesnotes Notes notesnotes' },
        { id: '2', value: 'Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotesNotes notesnotes Notes notesnotesNotes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotesNotes notesnotes Notes notesnotesNotes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotesNotes notesnotes Notes notesnotesNotes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotes Notes notesnotesNotes notesnotes Notes notesnotes' }
      ]
    }).write();
  })
  .then(() => {
    app.listen(8080, () => console.log('listening on port 8080'));
  });
