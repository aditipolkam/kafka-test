const { Kafka } = require('kafkajs');

exports.kafka = new Kafka({
    brokers: ['192.120.29.71:9092'],
    clientId: 'rider-app'
});
