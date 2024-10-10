const express = require('express');


const app = express();
app.use(express.json());

class Estudiante {
    constructor(id_estudiante, nombre, email, fecha_inscripcion) {
        this.id_estudiante = id_estudiante;
        this.nombre = nombre;
        this.email = email;
        this.fecha_inscripcion = fecha_inscripcion || new Date();
    }

    get obtenerNombre() {
        return this.nombre;
    }

    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    get obtenerEmail() {
        return this.email;
    }

    set cambiarEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }

    mostrarInfo() {
        return `Estudiante: ${this.nombre}, Email: ${this.email}, Inscrito el: ${this.fecha_inscripcion}`;
    }
}

//Endpoint para obtener la información de un estudiante
app.get('/estudiante', (req, res) => {
    const estudiante1 = new Estudiante(1, 'Carlos Pérez', 'carlos.perez@example.com');
    res.json({
        mensaje: estudiante1.mostrarInfo()
    });
});

//Endpoint para obtener la información de un estudiante
app.post('/estudiante', (req, res) => {
    const { id_estudiante, nombre, email } = req.body;
    const estudiante1 = new Estudiante(id_estudiante, nombre, email);
    res.json({
        mensaje: estudiante1.mostrarInfo()
    });
});

//Endpoint para actualizar el nombre de un estudiante
app.put('/estudiante', (req, res) => {
    const { nuevoNombre } = req.body;
    const estudiante1 = new Estudiante(1, 'Carlos Pérez', 'carlos.perez@example.com');

    //Cambiar el nombre usando el setter
    estudiante1.cambiarNombre = nuevoNombre;

    res.json({
        mensaje: `Nombre actualizado: ${estudiante1.obtenerNombre}`
    });
});

//Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});