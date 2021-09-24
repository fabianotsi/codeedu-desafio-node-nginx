const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql')

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
}

const connection = mysql.createConnection(config)

connection.connect((err)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });

// Atribuindo o nome a ser gravado
const nome = 'Wesley'

// Inserir os dados no BD
let sql = `INSERT INTO people(name) values(?)`
connection.query(sql, nome)


app.get('/', (req,res) => {
     
    sql = `SELECT * FROM people WHERE name = ?`
    connection.query(sql, nome, (err, rows) => {     

        if(err) {
            console.log("error: ", err)

        }else{
            console.log('rows', rows)
            let html = '<h1>Full Cycle Rocks!</h1><table><tr><td>Id</td><td>Nome</td></tr>'
            
            // Pode ter gravado mais de uma vez, pois não há restrição no banco
            Object.keys(rows).forEach((key) => {
                let row = rows[key]                
                html += '<tr><td>' + row.id + '</td><td>' + row.name + '</td></tr>'
                console.log('HTML dentro do For Each = ', html + '')
                return html
            })

            html += '</table>'
            console.log('HTML', html)
            res.send(html)
        }      
    })

})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})