<<<<<<< HEAD
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const app = new Hono();
const client = new Client({
    user: 'postgres',
    database: 'postgres',
    hostname: 'localhost',
    password: 'Secret1234!',
    port: 5432,
});

await client.connect();

app.post('/register', async (c) => {
    const { username, password, email, age } = await c.req.json();
    const hashedPassword = await bcrypt.hash(password);
    
    try {
        await client.queryObject(`
            INSERT INTO abc123_users (username, password_hash, email, role, birthdate, pseudonym, consent)
            VALUES ($1, $2, $3, 'reserver', $4, $5, TRUE)
            `, username, hashedPassword, email, age, `pseudonym_${username}`);
            
            return c.json({ message: 'User registered successfully!'}, 201);
        } catch (error) {
            console.error(error);
            return c.json({ error: 'Error during registration' }, 500);
        }});

        app.get('/', async (c) => {
            const html = await Deno.readTextFile('./index.html');
            return c.html(html);
        });

        //app.listen({ port: 8000 });
=======
import { Hono } from "https://deno.land/x/hono/mod.ts";
import { Client } from "https://deno.land/x/postgres/mod.ts";
import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";

const app = new Hono();
const client = new Client({
    user: 'postgres',
    database: 'postgres',
    hostname: 'localhost',
    password: 'Secret1234!',
    port: 5432,
});

await client.connect();

app.post('/register', async (c) => {
    const { username, password, email, age } = await c.req.json();
    const hashedPassword = await bcrypt.hash(password);
    
    try {
        await client.queryObject(`
            INSERT INTO abc123_users (username, password_hash, email, role, birthdate, pseudonym, consent)
            VALUES ($1, $2, $3, 'reserver', $4, $5, TRUE)
            `, username, hashedPassword, email, age, `pseudonym_${username}`);
            
            return c.json({ message: 'User registered successfully!'}, 201);
        } catch (error) {
            console.error(error);
            return c.json({ error: 'Error during registration' }, 500);
        }});

        app.get('/', async (c) => {
            const html = await Deno.readTextFile('./index.html');
            return c.html(html);
        });

        //app.listen({ port: 8000 });
>>>>>>> 444113bb53f177840d02ceb71d83a8d509a5c28f
        Deno.serve(app.fetch);