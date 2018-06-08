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

router.get('/created', (req, res) => {
    console.log('GET created rides route');
    if(req.isAuthenticated()) {
        let queryText = `SELECT "person"."id", "person"."username", "ride"."date", "ride"."terrain", "ride"."address", "ride"."length", "ride"."start_time", "ride"."id"
        FROM "person"
        JOIN "ride" ON "person"."id" = "ride"."person_id"
        ORDER BY "ride"."date"`;
        pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error on get created', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});

router.get('/joined', (req, res) => {
    console.log('GET joined rides route');
    if(req.isAuthenticated()) {
        let queryText = `SELECT "join_ride"."id", "ride"."date", "ride"."address", "ride"."length", "ride"."start_time", "ride"."terrain"
        FROM "join_ride"
        JOIN "ride" ON "ride"."id" =  "join_ride"."ride_id"
        JOIN "person" ON "person"."id" = "join_ride"."person_id"
        WHERE "person"."id" = $1
        ORDER BY "ride"."date"`;
        pool.query(queryText, [req.user.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('error on get created', error);
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

router.post('/join', (req, res, next) => {
    if(req.isAuthenticated()){
        const joining = req.body;
        let queryText = `INSERT INTO "join_ride" (person_id, ride_id) 
        VALUES ($1, $2)`;
        pool.query(queryText, [req.user.id, joining.id])
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            if(error.constraint === 'uc_tab'){
                res.sendStatus(501);
            }else {
                console.log('error in Post/ join:', error);
                res.sendStatus(500);
            }
        })

        }else {
            res.sendStatus(500);
        }
    }
);

router.put('/update', (req, res) => {
    console.log('updateRide', req.body);
    if(req.isAuthenticated()){
        const updatedRide = req.body;
        let queryText = `UPDATE "ride" SET "date" = $1, "terrain" = $2, "address" = $3, "start_time" = $4, "length" = $5 WHERE "id" = $6`;
        pool.query(queryText, [updatedRide.date, updatedRide.terrain, updatedRide.address, updatedRide.start_time, updatedRide.length, updatedRide.id])
        .then( (result) => {
            console.log('successful Update', result);
            res.sendStatus(201);
        }).catch( (error) => {
            console.log('error in UPDATE', error);
            res.sendStatus(500);
        })
    } else {
        res.sendStatus(403);
    }
});

router.delete('/:id', (req, res, next) => {
    console.log(req.user);
    console.log(params, req.params);
    if(req.isAuthenticated()){
      let queryText = `DELETE FROM "join_ride" WHERE "person_id" = $1 AND "id" = $2`;
      pool.query(queryText, [req.user.id, req.params.id])
      .then( () => {
        res.sendStatus(201);
      })
      .catch( (error) => {
        console.log('error in DELETE join_ride', error);
        res.sendStatus(500);
      })
    }else {
      res.sendStatus(403);
    }
  });

  router.delete('/cancel/:id', (req, res, next) => {
    console.log('is this working?');
    if (req.isAuthenticated()) {
      let queryText = `DELETE FROM "ride" WHERE id = $1`;
      pool.query(queryText, [req.params.id])
      .then( () => {
        res.sendStatus(200);
      })
      .catch( (error) => {
        console.log('error in DELETE ride', error);
        res.sendStatus(500);
  
      })
    } else {
      res.sendStatus(403);
    }
  });

module.exports = router;