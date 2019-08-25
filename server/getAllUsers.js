const data = require('../server/data.json');

let getAllUsers = (request, response, next) => {
    
    if(request.query.first_name){
        const filteredFirstName = data.filter(user => user.name[0].first_name.toLowerCase() === request.query.first_name.toLowerCase() )
        response.json(filteredFirstName)
    }else{
        response.json(data);
    }
}

module.exports = getAllUsers;