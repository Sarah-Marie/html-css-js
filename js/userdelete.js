const url = "http://localhost:8080";

let user = null;

$().ready(() => {

    $("#get").click(() => {
        getUser();
    });

    $("#delete").click(() => {
        remove(user);
    });
});

const remove = (user) => {
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
const getUser = () => {
    let userid = $("#userid").val();
    getUserByPK(userid);
}
const getUserByPK = (id) => {
    $.getJSON(`${url}/users${id}`)
    
    .done((res) => {
        user = res.data;
        display(user);
        console.debug("JR: ", res);
      
    })
    .fail((err) => {
        console.error(err);
    });
}


const display = (user) => {
    $("#eid").text(user.id);
    $("#euserName").text(user.userName);
    $("#efullName").text(user.firstName + " " + user.lastName);
    
    $("#ephoneNumber").text(user.phoneNumber);
    $("#email").text(user.email);
    $("#ereviewer").prop("checked", user.reviewer);
    $("#eadmin").prop("checked", user.admin);
};