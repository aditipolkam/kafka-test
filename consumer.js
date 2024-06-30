const { kafka } = require("./client");
const group = process.argv[2] || "user1";

async function init() {
    const consumer = kafka.consumer({ groupId: group });  
    console.log("Connecting Consumer...");
    await consumer.connect();

    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log(`[${topic}]: PART: ${partition} - `, message.value.toString())
        },
    })

    // await consumer.disconnect();
}

init();