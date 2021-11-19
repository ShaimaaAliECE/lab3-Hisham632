const express = require('express');

const newConnection = require('./DBconnection');

const app = express();

app.use(express.urlencoded({
                            extended: true
}))

app.get('/userDisplay', (req, res) => 
{
  let connection = newConnection();
  connection.connect();
  let times;
  let usersList;
  let content ='';

  connection.query(`SELECT * FROM Times`, (err,rows,fields) =>
   {

      if (err)
          res.send('ERROR: ' +err)
      else
      {
        times = rows;

          content += '<div> TimeSlot1 : TimeSlot2 : TimeSlot3 : TimeSlot4 : TimeSlot5 : TimeSlot6 : TimeSlot7 : TimeSlot8 : TimeSlot9 : TimeSlot10</div>';
          content += '<br/>';

          for (list of times)
          {
              content += '<div>';
              content += list.TimeSlot1 + " &ensp;&emsp;&emsp;&emsp; : " + list.TimeSlot2 + " &ensp;&emsp;&emsp;&ensp;: " + list.TimeSlot3 + " &ensp;&emsp;&emsp;&ensp;: " + list.TimeSlot4 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot5 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot6 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot7 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot8 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot9 + " &emsp;&emsp;&emsp;&ensp;: " + list.TimeSlot10 
              content += '</div>'
              content += '<br/>';
            }
       

      }
  })    

  connection.query(`SELECT * FROM Users`, (err,rows,fields) => 
  {

      if (err)
          res.send('ERROR: ' +err)
      else
      {
          usersList = rows;

          for (user of usersList)
          {
              content += '<div>';
              content += user.Name + " &emsp;&emsp;&emsp;&emsp;: " + user.TimeSlot1 + " &emsp;&emsp;&emsp;&emsp;: " + user.TimeSlot2 + " &emsp;&emsp;&emsp;: " + user.TimeSlot3 + "&emsp;&emsp;&emsp; : " + user.TimeSlot4 + "&emsp;&emsp;&emsp; : " + user.TimeSlot5 + "&emsp;&emsp;&emsp; : " + user.TimeSlot6 + " &emsp;&emsp;&emsp;: " + user.TimeSlot7 + " &emsp;&emsp;&emsp;: " + user.TimeSlot8 + " &emsp;&emsp;&emsp;: " + user.TimeSlot9 + " &emsp;&emsp;&ensp;: " + user.TimeSlot10 
              content += '</div>'
              content += '<br/>';
              content += '<br/>';
            }
            
          content += '<br/>';
          content += `<a href='/'>Homepage</a>`;

          res.send(content);
      }
  })    
  connection.end();

})



app.get('/', (req, res) =>
{
  res.sendFile('/static/index.html', { root: __dirname })
})


app.get('/guest', (req, res) => 
{
  res.sendFile('/static/guest.html', { root: __dirname })
})

app.get('/admin', (req, res) =>
{
  res.sendFile('/static/admin.html', { root: __dirname })
})


app.get('/login', (req, res) =>
{
  let userName = req.query.userName;
  let password = req.query.pass;

  if (userName == 'admin' && password == 'inOut')// password is inOut
    res.sendFile('/static/admin.html', { root: __dirname })
  else 
     res.sendFile('/static/index.html', { root: __dirname })


})

app.get('/add-user', (req,res) =>
{
  let connection = newConnection();
  connection.connect();

  connection.query(`insert into Users values ('${req.query.Name}','${req.query.Timeslot1}','${req.query.Timeslot2}','${req.query.Timeslot3}','${req.query.Timeslot4}','${req.query.Timeslot5}','${req.query.Timeslot6}','${req.query.Timeslot7}','${req.query.Timeslot8}','${req.query.Timeslot9}','${req.query.Timeslot10}')`
          
                  ,(err,rows,fields) => 
                  {
                    if (err)
                        console.log(err);
                    else
                      res.redirect('/userDisplay'); 

                  } );

  connection.end();
})

app.get('/add-times', (req,res) => 
{
  let connection = newConnection();
  connection.connect();

  connection.query( `UPDATE Times SET  TimeSlot1 = '${req.query.Timeslot1}', TimeSlot2 = '${req.query.Timeslot2}', TimeSlot3 = '${req.query.Timeslot3}', TimeSlot4 = '${req.query.Timeslot4}', TimeSlot5 = '${req.query.Timeslot5}', TimeSlot6 = '${req.query.Timeslot6}', TimeSlot7 = '${req.query.Timeslot7}', TimeSlot8 = '${req.query.Timeslot8}', TimeSlot9 = '${req.query.Timeslot9}', TimeSlot10 = '${req.query.Timeslot10}'`
          
                  , (err,rows,fields) => 
                  {
                      if (err)
                          console.log(err);
                      else
                          res.redirect('/');
                  });

  connection.end();
})

app.use(express.static('static'))


app.listen(80);