import * as sqlitetools from './sqlitetools.js';

export const getAllEmployees = async () => {
	return await sqlitetools.getRecordsWithSql('SELECT * FROM Employees');
}
