const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');

class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.create(data);
            return response;
       }catch(error) {
            Logger.error('Something went wrong in the Crud Repo : create');
            throw error;
       }
    }   

    async destroy(data) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : destroy');
            throw error;
        }
    }

    async get(data) {
        const response = await this.model.findByPk(data);
        if(!response) {
            throw new AppError('Not able to fund the resource', StatusCodes.NOT_FOUND);
        }
        return response;
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }

    async update(id, data) { // data -> {col: value, ....}
        try {
            const response = await this.model.update(data, {
                where: {
                    id: id
                }
            })
            return response;
        } catch(error) {
            Logger.error('Something went wrong in the Crud Repo : get');
            throw error;
        }
    }
}

module.exports = CrudRepository;
