const connection = require('./connection');

const getById = async (userId) => {
    try {
        const [rows] = await connection.query('SELECT id, usuario, status FROM usuarios WHERE id = ?', [userId]);
        return rows;
    } catch (error) {
        throw new Error(`Erro ao obter o usuário com o ID ${userId}: ${error.message}`);
    }
}

module.exports = {
    getById
};
