"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setContactRoutes = void 0;
const express_1 = require("express");
const contactController_1 = require("../controllers/contactController");
const router = (0, express_1.Router)();
const contactController = new contactController_1.ContactController();
function setContactRoutes(app) {
    app.get('/contact', contactController.getContact.bind(contactController));
}
exports.setContactRoutes = setContactRoutes;
