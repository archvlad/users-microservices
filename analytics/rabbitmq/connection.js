const amqp = require('amqplib')

async function connect() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL)
    const channel = await connection.createChannel()
    return channel
}

module.exports = { connect }