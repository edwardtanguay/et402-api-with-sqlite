/* eslint-disable @typescript-eslint/no-explicit-any */
import sqlite3 from 'sqlite3';
import path from 'path';

const baseDir = process.cwd();
const absoluteDbPathAndFileName = path.join(baseDir, '/src/data/northwind_database.sqlite');

export const getRecordsWithSql = <T>(sql: string) => {
	return new Promise<T[]>((resolve, reject) => {
		const db = new sqlite3.Database(absoluteDbPathAndFileName);
		db.all(sql, (err, records: T[]) => {
			if (records === undefined) {
				reject(err);
			} else if (records.length === 0) {
				resolve([]);
			} else {
				resolve(records)
			}
		});
		db.close();
	});
}