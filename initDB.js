
const mysql = require('mysql');

let connection = mysql.createConnection({
    host:'35.239.67.105',
    user: 'root',
    password:'vatman123',
    database:'usersDB'
});

connection.connect();

connection.query(`Drop Table Times`
                , (err,rows,fields) => 
                            {
                                if (err)
                                    console.log('Error: '+ err);
                                else
                                    console.log('Table Created');
                            })

connection.query(`Drop Table Users`
                , (err,rows,fields) => 
                            {
                                if (err)
                                    console.log('Error: '+ err);
                                else
                                    console.log('Table Created');
                            })

connection.query(`CREATE TABLE Times
            (
                TimeSlot1 varchar(20),
                TimeSlot2 varchar(20),
                TimeSlot3 varchar(20),
                TimeSlot4 varchar(20),
                TimeSlot5 varchar(20),
                TimeSlot6 varchar(20),
                TimeSlot7 varchar(20),
                TimeSlot8 varchar(20),
                TimeSlot9 varchar(20),
                TimeSlot10 varchar(20)
            )
            ` , (err,rows,fields) => 
            {
                if (err)
                    console.log('Error: '+ err);
                else
                    console.log('Table Created');
            })


connection.query(`CREATE TABLE Users
            (
                Name varchar(40),
                TimeSlot1 varchar(20),
                TimeSlot2 varchar(20),
                TimeSlot3 varchar(20),
                TimeSlot4 varchar(20),
                TimeSlot5 varchar(20),
                TimeSlot6 varchar(20),
                TimeSlot7 varchar(20),
                TimeSlot8 varchar(20),
                TimeSlot9 varchar(20),
                TimeSlot10 varchar(20)
            )
            `, (err,rows,fields) =>
             {
                if (err)
                    console.log('Error: '+ err);
                else
                    console.log('Table Created');
            })

connection.query( `insert into Times values (12,13,14,15,16,17,18,19,20,21)`
            , (err,rows,fields) =>
             {
                if (err)
                    console.log('Error: '+ err);
                else
                    console.log('values Inserted');
            });
connection.end();