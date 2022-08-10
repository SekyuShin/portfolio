var mysql = require('./node_modules/mysql/index');

const connection = mysql.createConnection({
    host : "192.168.1.43",//"192.168.56.1",
    port: '3306',
    user : "sekyu",
    password : 'tprb1191',
    database:"testDB"
})

/* parsing path and return sql */
/*
    projects - main project - all (간략 내용) req api : http://localhost:3030/projects/main/all
                                              req DB "SELECT id, type, name, descriptions FROM testDB.projects WHERE type = \"Main Projects\";";
                            - id (자세한 내용) req api : http://localhost:3030/projects/main/2
                                              req DB "SELECT * FROM testDB.projects WHERE type=\"Main Projects\" AND id = 2;";
             - side project - all (간략 내용)
                            - id (자세한 내용)
             - school project - all (간략 내용)
                              - id (자세한 내용)
*/
function pathParsing (path){
   
    //var sql = "SELECT id, type, name, descriptions FROM testDB.projects WHERE type = \"Main Projects\";";
    //var sql = "SELECT * FROM testDB.projects WHERE type=\"Main Projects\" AND id = 2;";
    var sql = "";
    var projectType = "";

    const tmpPath = path.split('/');
    if(tmpPath.length<4) return '';
    if(tmpPath[2] === 'main') projectType = "Main Projects";
    else if(tmpPath[2] === 'side') projectType = "Side Projects";
    else if(tmpPath[2] === 'school') projectType = "School Projects";

    if(tmpPath[3] === 'all') sql = "SELECT id, type, name, descriptions FROM testDB.projects WHERE type = \"" + projectType + "\";";
    else sql = "SELECT * FROM testDB.projects WHERE type = \"" + projectType + "\" AND id = "+tmpPath[3] + ";";
    
    return sql;
}

exports.connect = function(path) {
    //connection.connect(); //connection 변수와 중복으로 인한 오류
    const sql = pathParsing(path);
    
    console.log("sql :`${sql}` : ",sql);
    connection.query(sql, function(err, rows, fields){
        if(err) throw err;
        else {
            //console.log(rows);
            return rows;
        }
    });
   // connection.end(); //Error code: 'PROTOCOL_ENQUEUE_AFTER_QUIT', //connection 변수와 중복으로 인한 오류

}