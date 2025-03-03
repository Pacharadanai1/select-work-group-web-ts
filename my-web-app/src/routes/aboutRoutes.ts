import { Router } from 'express';
import { AboutController } from '../controllers/aboutController';

const router = Router();
const aboutController = new AboutController();

export function setAboutRoutes(app: Router) {
    app.get('/about', aboutController.getAbout.bind(aboutController));
}