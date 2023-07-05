const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

app.get('/', (req,res) => {
    const sql = `INSERT INTO people(name) values('Nome')`
    connection.query(sql)
    connection.query('SELECT * FROM people', (err, rows) => {
        if (err) {
          console.error('Erro ao executar o comando SELECT:', err);
          res.status(500).send('Erro ao executar o comando SELECT');
          return;
        }
        finalstring = "<h1>Full Cycle Rocks!</h1><br>"
        rows.forEach((row) => {
            finalstring += `${row.id}-${row.name}<br>`
        })
        res.send(finalstring);
    });
});

app.listen(port, () => {
    console.log('Rodando')
})