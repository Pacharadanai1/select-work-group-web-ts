"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setServicesRoutes = void 0;
const express_1 = require("express");
const servicesController_1 = require("../controllers/servicesController");
const router = (0, express_1.Router)();
const servicesController = new servicesController_1.ServicesController();
function setServicesRoutes(app) {
    app.get('/services', servicesController.getServices.bind(servicesController));
}
exports.setServicesRoutes = setServicesRoutes;
