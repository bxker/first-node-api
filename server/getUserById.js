const data = require('../server/data.json');

const getUserById = (request, response, next) => {
    const userId = data.filter(user => user.id === +request.params.id)
    if(!userId){
        response.status(500).json('user does not exist')
    }else{
        response.json(userId)
    }
}



//export
module.exports = getUserById;