var mysql = require('./node_modules/mysql/index');

const connection = mysql.createConnection({
    host : "192.168.1.43",//"192.168.56.1",
    port: '3306',
    user : "sekyu",
    password : 'tprb1191',
    database:"testDB"
})

/* parsing path and return sql */
function pathParsing (path){
    var sql = "SELECT * FROM testDB.projects;"; 
    const tmpPath = path.split('/');
    if(tmpPath.length<4) return '';
    
    //sql = sql + tmpPath[2]+tmpPath[3];
        
    if(tmpPath[3] === 'All') {
        
    } else {

    }
    
    return sql;
}

exports.connect = function(path) {
    connection.connect();
    const sql = pathParsing(path);
    console.log("sql :`${sql}` : ",sql);
    connection.query(sql, function(err, rows, fields){
        if(err) console.log('err : '+err);
        console.log(rows);
        });
    connection.end();
}