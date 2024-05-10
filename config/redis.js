import Redis from 'ioredis';

const redisClient = new Redis({
  host: "127.0.0.1", // Adresse IP du serveur Redis
  port: 6379, // Port par défaut de Redis
  maxRetriesPerRequest: 50, // Augmentez cette valeur si nécessaire
});

export default redisClient;
