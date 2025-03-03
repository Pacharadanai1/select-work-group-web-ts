import { Router } from 'express';
import { HomeController } from '../controllers/homeController';

const router = Router();

export function setHomeRoutes(app: any) {
    const homeController = new HomeController();
    app.get('/', homeController.getHome);
}