const typeorm = require('typeorm');
const {createConnection, Table, TableColumn} = typeorm;

let table = new Table({
	name: 'id_missing_type'
});

table.addColumn(new TableColumn({
	name: 'id',
	type: 'varchar',
	isPrimary: true,
	isGenerated: true,
	generationStrategy: 'uuid',
}))


createConnection({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'postgres',
	password: 'postgres',
	database: 'typeorm_test'
})
	.then((connection) => connection.createQueryRunner().createTable(table))
	.catch((err) => console.error(err));

