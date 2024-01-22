import { Router } from 'express';
import * as employeeHandlers from '../handlers/employeeHandlers.js';

export const employeeRouter = Router();

employeeRouter.get('/', async (_req, res) => {
	const employees = await employeeHandlers.getAllEmployees();
	res.json(employees);
});