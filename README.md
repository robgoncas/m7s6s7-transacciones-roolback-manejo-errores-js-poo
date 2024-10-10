
# Clase en JavaScript ECMAScript 6 con la Tabla `estudiantes`

## 1. Introducción a las Clases en JavaScript
En **ECMAScript 6 (ES6)**, las clases permiten crear objetos más fácilmente, con un sistema más estructurado. Las clases son plantillas para crear objetos, y cada objeto creado a partir de una clase tiene las mismas propiedades y métodos, pero con valores específicos.

### Estructura Básica de una Clase
Una clase en ES6 se define con la palabra clave `class`, y generalmente tiene:
- Un **constructor**: un método especial que se llama cuando se crea una instancia de la clase.
- **Getters y Setters**: para acceder y modificar propiedades de una clase.
- **Métodos personalizados**: para definir comportamientos específicos.

## 2. Ejemplo de la Clase `Estudiante`
A continuación, crearemos una clase llamada `Estudiante` que representa un estudiante en la tabla `estudiantes`.

### Código de la Clase `Estudiante`

```javascript
class Estudiante {
    // El constructor recibe los atributos que corresponden a la tabla estudiantes
    constructor(id_estudiante, nombre, email, fecha_inscripcion) {
        this.id_estudiante = id_estudiante;
        this.nombre = nombre;
        this.email = email;
        this.fecha_inscripcion = fecha_inscripcion || new Date(); // Valor por defecto
    }

    // Accesador (getter) para obtener el nombre
    get obtenerNombre() {
        return this.nombre;
    }

    // Modificador (setter) para cambiar el nombre
    set cambiarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    // Accesador (getter) para obtener el email
    get obtenerEmail() {
        return this.email;
    }

    // Modificador (setter) para cambiar el email
    set cambiarEmail(nuevoEmail) {
        this.email = nuevoEmail;
    }

    // Método personalizado para mostrar información del estudiante
    mostrarInfo() {
        return `Estudiante: ${this.nombre}, Email: ${this.email}, Se inscribió el: ${this.fecha_inscripcion}`;
    }
}

// Instanciar la clase con un objeto Estudiante
const estudiante1 = new Estudiante(1, 'Carlos Pérez', 'carlos.perez@example.com');

// Usar el método personalizado
console.log(estudiante1.mostrarInfo());

// Cambiar el nombre del estudiante usando el setter
estudiante1.cambiarNombre = 'Juan González';

// Ver el nuevo nombre con el getter
console.log(`Nuevo nombre: ${estudiante1.obtenerNombre}`);
```

### Explicación del Código:
- **Constructor**: el método `constructor()` define las propiedades de la clase. En este caso, define `id_estudiante`, `nombre`, `email`, y `fecha_inscripcion`.
- **Getters y Setters**: usamos `get` y `set` para acceder y modificar el nombre y el email de un estudiante.
- **Método Personalizado**: `mostrarInfo()` devuelve una cadena con los detalles del estudiante.


## 3. ¿Por qué Utilizar Clases?
- **Encapsulamiento**: Las clases permiten agrupar propiedades y métodos relacionados en un solo objeto.
- **Reutilización**: Puedes crear múltiples instancias (objetos) con diferentes valores sin duplicar código.
- **Abstracción**: Ocultas detalles internos de implementación y solo expones lo necesario mediante getters y setters.

