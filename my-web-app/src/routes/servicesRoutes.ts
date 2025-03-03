import { Router } from 'express';
import { ServicesController } from '../controllers/servicesController';

const router = Router();
const servicesController = new ServicesController();

export function setServicesRoutes(app: Router) {
    app.get('/services', servicesController.getServices.bind(servicesController));
}