"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHomeRoutes = void 0;
const express_1 = require("express");
const homeController_1 = require("../controllers/homeController");
const router = (0, express_1.Router)();
function setHomeRoutes(app) {
    const homeController = new homeController_1.HomeController();
    app.get('/', homeController.getHome);
}
exports.setHomeRoutes = setHomeRoutes;
