"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAboutRoutes = void 0;
const express_1 = require("express");
const aboutController_1 = require("../controllers/aboutController");
const router = (0, express_1.Router)();
const aboutController = new aboutController_1.AboutController();
function setAboutRoutes(app) {
    app.get('/about', aboutController.getAbout.bind(aboutController));
}
exports.setAboutRoutes = setAboutRoutes;
