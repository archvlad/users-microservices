const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const { connect } = require('./rabbitmq/connection')
const pool = require('./db/pool')


const app = express()
const EXPRESS_PORT = process.env.EXPRESS_PORT

app.use('/events', require('./routes/events.route'))

app.listen(EXPRESS_PORT, () => console.log(`Express app is running on port ${EXPRESS_PORT}`))

connect().then(channel => {
    channel.assertQueue('user_events_queue', { durable: false })
    channel.consume('user_events_queue', async (msg) => {
        const { pattern, data } = JSON.parse(msg.content.toString())
        if (pattern == 'user_changed') {
            await pool.query('INSERT INTO user_events ("userId", "type") VALUES ($1, $2)', [data, "changed"])
        } else if (pattern == 'user_created') {
            await pool.query('INSERT INTO user_events ("userId", "type") VALUES ($1, $2)', [data, "created"])
        }
        channel.ack(msg);
    })
});