var mysql      = require('mysql');
const fs = require('fs');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'agser',
    password : 'agseragser',
    database : 'agser'
});

connection.connect();

const tableName = 'Providers'
const generateClass = () => {
    let javaClass = '@Entity\n';
    javaClass += `@Table(name="${tableName}")\n`;
    javaClass += '@EdmEntityType(namespace = "OData") \n'
    connection.query(`Describe ${tableName}`, function (error, results, fields) {
        if (error) throw error;
        javaClass += 'public class Providers {\n';
        results.forEach(res => {
            javaClass += `  private String ${res.Field};\n`;
        })
        javaClass += '}';
        fs.writeFile("./Provider.java", javaClass, function (err) {
            // la funcion es la que maneja lo que sucede despues de termine el evento
            if (err) {
                return console.log(err);
            }
            // las funciones de javascript en nodejs son asincronicas
            // por lo tanto lo que se quiera hacer debe hacerse dentro de la funcion que maneja el evento
            // si uno declara una variable arriba de la funcion, la manipula dentro y la quiere usar
            // despues afuera, se corre el riezgo de que nunca se realice la manipulacion.
            console.log("The file was saved!");
        });
    });


}
module.exports = generateClass;
