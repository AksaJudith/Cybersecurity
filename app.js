import { Hono } from "https://deno.land/x/hono/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import { registerUser } from "./routes/register.js"; // Import register logic

const app = new Hono();

app.use('/static/*', serveStatic({ root: '.' }));

// Serve the registration form
app.get('/register', async (c) => { return c.html(await Deno.readTextFile('./views/register.html'));
});

app.post('/register', registerUser);

/*app.post('/register', async (c) => {
    const body = await c.req.parseBody();
    
    const username = body.username;
    const password = body.password;
    const birthdate = body.birthdate;
    const role = body.role;
    
    try {
        // Hash the user's password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Insert the new user into the database
        const result = await client.queryArray(
            `INSERT INTO abc123_users (username, password_hash, role, birthdate)
            VALUES ($1, $2, $3, $4)`,
            [username, hashedPassword, role, birthdate]
        );
        
        // Success response
        return c.text('User registered successfully!');
    } catch (error) {
        console.error(error);
        return c.text('Error during registration', 500);
    }
});*/

//app.listen({ port: 3000 });
console.log('Server running on http://localhost:3000');
Deno.serve(app.fetch);

//deno run --allow-net --allow-env --allow-read --watch app.js