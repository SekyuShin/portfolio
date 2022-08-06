

/* parsing path and return sql */
exports.pathParsing = function(path){
    let sql = "SELECT * FROM `topic`"; 
    const tmpPath = path.split('/');
    if(tmpPath.length<4) return '';
    
    sql = sql + tmpPath[2]+tmpPath[3];
        
    if(tmpPath[3] === 'All') {
        
    } else {

    }
    
    return sql;
}
