import mysql from 'mysql2/promise';

const configDB = {
    host: 'mysql',
    user: 'root',
    password: '123mudar@',
    database: 'desafio',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const getConnection = () => {
    return mysql.createPool(configDB);
}

const newPeople = async () => {
    const con = getConnection();
    await con.execute(`insert into people values('Full Cycle Rocks') `)
    con.end;
}


export const getPeople = async () => {
    await newPeople();
    const con = getConnection();
    const [result] = await con.query<mysql.RowDataPacket[]>({ sql: 'select * from people order by nome' });
    return `<h1>Full Cycle Rocks!</h1><hr>
    <ol>
        ${result.map(el => `<li>${el.nome}</li>`).join('')}       
    </ol>`
}