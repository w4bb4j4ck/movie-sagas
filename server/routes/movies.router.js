const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/movies', (req, res) => {
    const queryText = `SELECT * FROM "movies" ORDER BY "title";`;
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

router.put('/details', (req, res) => {
    const queryText = `UPDATE "movies" SET "title" = $1, "poster" = $2, "description" = $3 WHERE "id" = $4;`;
    const queryValues = [
        req.body.title,
        req.body.poster,
        req.body.description,
        req.body.movie_id
    ];
    pool.query(queryText, queryValues)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in router.put.', error);
        res.sendStatus(500);
    })

})

router.get('/trending', (req, res) => {
    const queryText = `SELECT * FROM "trending";`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in router.get', error);
        res.sendStatus(500);
    });
});

module.exports = router;