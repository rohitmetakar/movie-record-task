const dbConn = require('../config/config');


let db = {
    _inserData: function (name, img, summary) {
        return new Promise((resolve, reject) => {
            let query = 'INSERT INTO movie(name, img, summary)VALUES(?,?,?)';
            console.log(query);

            dbConn.query(query, [name, img, summary], (error, results) => {
                if (error) {
                    console.log(error);

                    reject(error);
                } else {
                    resolve(results);
                }
            }); 
        })
    },


    getdata: function () {
        return new Promise((resolve, reject) => {
            let query = 'SELECT * FROM movie';
            dbConn.query(query, (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _updateMovie: function (id, name, img, summary) {
        return new Promise((resolve, reject) => {
            let query = `UPDATE movie SET name = '${name}', img = '${img}', summary = '${summary}' WHERE id = '${id}'`
            dbConn.query(query, [], (error, result) => {
                if (error) {
                    console.log(error);

                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _deleteMovie: function (id) {
        return new Promise((resolve, reject) => {
            let query = `DELETE FROM movie WHERE id = ?`;
            dbConn.query(query, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    },

    _getMovie: function (id) {
        return new Promise((resolve, reject) => {
            let query = `SELECT * FROM movie WHERE id = ?`;
            dbConn.query(query, [id], (error, result) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        })
    }


}

module.exports = db