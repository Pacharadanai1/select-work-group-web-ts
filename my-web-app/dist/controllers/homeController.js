"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeController = void 0;
class HomeController {
    getHome(req, res) {
        res.render('home');
    }
}
exports.HomeController = HomeController;
