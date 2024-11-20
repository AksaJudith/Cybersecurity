import { Client } from "https://deno.land/x/postgres/mod.ts";
// Set up PostgreSQL client connection
const client = new Client({
    user: "cybersecuser",
    database: "cyber_sec_db",
    hostname: "localhost",
    password: "cybersecpassword",
    port: 5432,
});

await client.connect();

export default client;