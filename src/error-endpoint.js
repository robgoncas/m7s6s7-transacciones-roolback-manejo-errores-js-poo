const express = require('express');
const pg = require('pg');

const { Pool } = pg;
const app = express();
const PORT = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'db_modulo7',
    password: '1234',
    port: 5432
});

app.get('/usuarios', async (req, res, next) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const queryText = 'SELECT nombree FROM usuarios';
    const result = await client.query(queryText);

    await client.query('COMMIT');

    res.status(200).json(result.rows);
  } catch (err) {
    await client.query('ROLLBACK');

    //En lugar de `throw new Error`, usa `next(err)` para pasar el error al middleware
    //Esto enviará el error al middleware de manejo de errores
    next(err); 
  }
});

//Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error('Middleware de manejo de errores:', err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
