const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/movies', (req, res) => {
    const queryText = `SELECT * FROM "movies";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in router.get', error);
        res.sendStatus(500);
    });
});

router.get('/details/:id', (req, res) => {
    const queryText = `SELECT "movie_id", "title", "poster", "description", "name" FROM "movie_genre"
    JOIN "movies" ON "movie_genre"."movie_id" = "movies"."id"
    JOIN "genres" ON "movie_genre"."genre_id" = "genres"."id"
    WHERE "movie_id" = $1`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in router.get', error);
        res.sendStatus(500);
    })
})

module.exports = router;