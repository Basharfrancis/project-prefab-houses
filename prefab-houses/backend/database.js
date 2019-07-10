var sqlite3 = require('sqlite3').verbose()


const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text,  
            description text, 
            price INTEGER,
            construction_time text,
            categorie text,
            image text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }
            // }else{
            //     // Table just created, creating some rows
            //     var insert = 'INSERT INTO products (title, description, price, construction_time, categorie, image) VALUES (?,?,?,?,?,?)'
            //     db.run(insert, ["product1","desc1","10000","1day","1room","linkofimage"])
            //     db.run(insert, ["product2","desc2","20000","2day","2room","linkofimage"])
            // }
        });  
    }
});


module.exports = db
