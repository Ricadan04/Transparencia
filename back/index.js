// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

app.use(cors());
app.use(express.json()); // Para parsear el cuerpo de las peticiones en JSON

// Ruta para obtener todas las nóminas
app.get('/api/nominas', async (req, res) => {
    try {
        const allNominas = await pool.query('SELECT * FROM nominas');
        res.json(allNominas.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// Ruta para agregar una nueva nómina
app.post('/api/nominas', async (req, res) => {
    try {
        const { codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha } = req.body;
        const newNomina = await pool.query(
            'INSERT INTO nominas (codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha]
        );
        res.json(newNomina.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Ruta para cargar datos masivos desde un archivo CSV
app.post('/api/nominas/upload', async (req, res) => {
    try {
        const { file } = req.body; // Suponiendo que envías el archivo en el cuerpo de la solicitud
        const data = file.split('\n').slice(1); // Ignorando la primera fila (cabecera)

        for (const line of data) {
            const [codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha] = line.split(',');

            await pool.query(
                'INSERT INTO nominas (codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
                [codigo_empleado, empleado, nivel, cargo, sueldo, ayuda_despensa, ayuda_pasaje, total_percepciones, isr, total_deducciones, neto, fecha]
            );
        }

        res.json({ message: 'Datos cargados exitosamente' });
    } catch (err) {
        console.error(err.message);
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});