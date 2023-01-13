const { mongo_collection } = require('./mongo');

class DB {
    constructor(name) {
        this.name = name;
    }
    getByName = async (name) => {
        try {
            const content = await mongo_collection(this.name).findOne({ name: name });
            return content
        } catch (err) {
            return false
        }
    }
}

module.exports = DB