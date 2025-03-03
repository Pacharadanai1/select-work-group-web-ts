"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const homeRoutes_1 = require("./routes/homeRoutes");
const aboutRoutes_1 = require("./routes/aboutRoutes");
const contactRoutes_1 = require("./routes/contactRoutes");
const servicesRoutes_1 = require("./routes/servicesRoutes");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware
app.set('view engine', 'pug');
app.set('views', './src/views');
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
// Routes
(0, homeRoutes_1.setHomeRoutes)(app);
(0, aboutRoutes_1.setAboutRoutes)(app);
(0, contactRoutes_1.setContactRoutes)(app);
(0, servicesRoutes_1.setServicesRoutes)(app);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
