/* eslint-disable @typescript-eslint/no-explicit-any */
import { IEmployee, IRawEmployee } from '../interfaces.js';
import * as sqlitetools from './sqlitetools.js';

export const getAllEmployees = async () => {
	const rawEmployees:IRawEmployee[] = await sqlitetools.getRecordsWithSql('SELECT * FROM Employees');
	return rawEmployees.map(m => {
		const employee: IEmployee = {
			id: m.EmployeeID,
			firstName: m.FirstName,
			lastName: m.LastName,
			title: m.Title
		}
		return employee;
	})
}
