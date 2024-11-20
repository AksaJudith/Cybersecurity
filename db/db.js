<<<<<<< HEAD
import { Client } from "https://deno.land/x/postgres/mod.ts";
// Set up PostgreSQL client connection
const client = new Client({
    user: "postgres",
    database: "postgres",
    hostname: "localhost",
    password: "Secret1234!",
    port: 5432,
});

await client.connect();

=======
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

>>>>>>> 444113bb53f177840d02ceb71d83a8d509a5c28f
export default client;