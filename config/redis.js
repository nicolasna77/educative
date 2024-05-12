import Redis from "ioredis";

const client = new Redis();
client.on("error", (err) => console.log("Redis Client Error", err));

export default client;
