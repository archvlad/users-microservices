const pool = require("../db/pool")
const { validationResult } = require('express-validator')

module.exports = {
    async getUserEventsById(req, res, next) {
        const result = validationResult(req);
        if (result.isEmpty()) {
            try {
                const id = parseInt(req.params.id)
                const pageNumber = parseInt(req.query.page)
                const limit = parseInt(req.query.limit)
                const offset = (pageNumber - 1) * limit
                const result = await pool.query('SELECT * FROM user_events WHERE "userId" = $1 LIMIT $2 OFFSET $3', [id, limit, offset])
                res.json(result.rows)
            } catch (err) {
                next(err)
            }
        } else {
            res.send({ errors: result.array() });
        }
    }
}