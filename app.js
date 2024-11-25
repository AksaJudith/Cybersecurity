import { Hono } from "https://deno.land/x/hono/mod.ts";
import { loginUser } from "./routes/login.js"; // Import login logic
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import { registerUser } from "./routes/register.js"; // Import register logic

const app = new Hono();

// Middleware to set security headers globally 
app.use('*', (c, next) => {
    // Set the Content-Type header (automaƟcally set by Hono for HTML, CSS, JS)
    c.header('Content-Type', 'text/html'); // This will change based on your content type (text/css, applicaƟon/javascript, etc.)
    
    // Set Content-Security-Policy header
    c.header('Content-Security-Policy',
        "default-src 'self';" +
        "script-src 'self';" +
        "style-src 'self';" +
        "img-src 'self';" +
        "frame-ancestors 'none';" +
        "form-action 'self';"
    );

    // Set X-Frame-OpƟons header to prevent Clickjacking
    c.header('X-Frame-Options', 'DENY');  // Completely deny embedding

    // Set X-Content-Type-OpƟons header to 'nosniff'  
    c.header('X-Content-Type-Options', 'nosniff');  
    
    return next(); 
}); 

app.use('/static/*', serveStatic({ root: '.' }));

// Serve the index page 
app.get('/', async (c) => {
       return c.html(await Deno.readTextFile('./views/index.html')); 
    });

// Serve the registration form
app.get('/register', async (c) => {
    return c.html(await Deno.readTextFile('./views/register.html'));
});

app.post('/register', registerUser);

// Serve login page
app.get('/login', async (c) => {
       return c.html(await Deno.readTextFile('./views/login.html')); // Use the login.html file
       });

// Handle user login
app.post('/login', loginUser);

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
console.log('Server running on http://localhost:8000');
Deno.serve(app.fetch);

//deno run --allow-net --allow-env --allow-read --watch app.js