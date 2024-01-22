import { Router } from 'express';
import * as employeeHandlers from '../handlers/employeeHandlers.js';

export const employeeRouter = Router();

employeeRouter.get('/', (_req, res) => {
	const employees = employeeHandlers.getAllEmployees();
	res.json(employees);
});