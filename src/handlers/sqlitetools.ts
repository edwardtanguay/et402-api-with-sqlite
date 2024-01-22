import sqlite3 from 'sqlite3';
import path from 'path';

const baseDir = process.cwd();
const absoluteDbPathAndFileName = path.join(baseDir, '/src/data/northwind_database.sqlite');

export const getRecordsWithSql = (sql: string) => {
	
}