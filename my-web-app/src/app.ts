import express from 'express';
import { setHomeRoutes } from './routes/homeRoutes';
import { setAboutRoutes } from './routes/aboutRoutes';
import { setContactRoutes } from './routes/contactRoutes';
import { setServicesRoutes } from './routes/servicesRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
setHomeRoutes(app);
setAboutRoutes(app);
setContactRoutes(app);
setServicesRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});