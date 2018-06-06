const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('GET all route');
    if (req.isAuthenticated()) {
        let queryText = `SELECT * FROM "ride"`;
        pool.query(queryText)
            .then((result) => {
                res.send(result.rows);
            }).catch((error) => {
                console.log('error on item GET: ', error);
                res.sendStatus(500);
            })
    } else {
        res.sendStatus(403);
    }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log('POST route');
    if (req.isAuthenticated()) {
        let queryText = `INSERT INTO "ride" ("date", "terrain", "address", "start_time", "length", "person_id")
                            VALUES ($1, $2, $3, $4, $5, $6)`;
        pool.query(queryText, [req.body.date, req.body.terrain, req.body.address, req.body.start_time, req.body.length, req.user.id])
            .then((result) => {
                res.sendStatus(201);
            })
            .catch((error) => {
                res.sendStatus(500);
                console.log('error on POST: ', error)
            })
    } else {
        res.sendStatus(403);
    }

});

module.exports = router;