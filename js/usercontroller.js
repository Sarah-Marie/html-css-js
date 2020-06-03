const userGetAll = () => {

}
const userGetByPk = (id) => {
   return $.getJSON(`${url}/users/${id}`);
    
}
const userCreate = (user) => {
    $.ajax({
        method: "POST",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log("User inserted!", res);
        })
        .fail((err)=> {
            console.error(err);
        });  
}

const userChange = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log("User updated!", res);
        })
        .fail((err)=> {
            console.error(err);
        });  
}

const userRemove = (user) => {
    $.ajax({
        method: "DELETE",
        url: `${url}/users/${user.id}`,
        //data: JSON.stringify(newUser),
        contentType: "application/json"
    })
        .done((res)=> {
            console.log("User deleted!", res);
        })
        .fail((err)=> {
            console.error(err);
        });
}