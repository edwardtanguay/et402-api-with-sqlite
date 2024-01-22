import * as sqlitetools from './sqlitetools.js';

export const getAllEmployees = () => {
	return sqlitetools.getRecordsWithSql('SELECT * FROM Employees');
}
