const usersModel = require('../models/usersModel');

const getAll = async (request, response) => {
    const userId = request.query.userId; 

    if (!userId) {
        return response.status(400).json({ error: 'ID do usuário não fornecido' });
    }

    try {
        const user = await usersModel.getById(userId);
        return response.status(200).json(user);
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAll
};
