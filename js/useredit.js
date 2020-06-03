let url = "http://localhost:8080/";

let user = null;

$().ready(()=>{
    $("#get").click(() => {
        getUser()
        
    });

    $("#save").click(() => {
        updateUser();
    });
});

const updateUser = () => {
    user.userName = $("#euserName").val();
    user.password = $("#epassword").val();
    user.firstName = $("#efirstName").val();
    user.lastName = $("#elastName").val();
    user.phoneNumber = $("#ephoneNumber").val();
    user.email = $("#eemail").val();
    user.reviewer = $("#ereviewer").prop("checked");
    user.admin = $("#eadmin").prop("checked");
    console.debug("User before update:", user);
    putUser(user);
}

const putUser = (user) => {
    $.ajax({
        method: "PUT",
        url: `${url}/users/`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
        .done((res) => {
            console.log("Update successful res is ", res);
        })
        .fail((err) => {
            console.error("ERROR: ", err);
        });
}

const getUser = () => {
    let userid = $("#eid").val();
    userGetByPK(userid);
};

const userGetByPK = (id) => {
    $.getJSON(`${url}/users/${id}`)
        .done((res) => {
            user = res.data;
            display();
            console.debug("JR: ", res);
        })
        .fail((err) => {
            console.error(err);
        })
}

const display = () => {
    $("#euserName").val(user.userName);
    $("#epassword").val(user.password);
    $("#efirstName").val(user.firstName);
    $("#elastName").val(user.lastName);
    $("#ephoneNumber").val(user.phoneNumber);
    $("#eemail").val(user.email);
    $("#ereviewer").prop("checked", user.reviewer);
    $("#eadmin").prop("checked", user.admin);



}

 