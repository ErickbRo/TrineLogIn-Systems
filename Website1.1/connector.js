import mysql from 'mysql';

const mysql = require('mysql')
const connection = mysql.creatConnection({
    host: 'localhost',
    user: 'root',
    password: 'trinekaka1234@1234'
})

connection.connect((error) => {
    if(error){
        console.log('Error Connecting the Database')
        return;
    }
    console.log('Connection Succeded')
}
)
connection.end((error) => {
    
})