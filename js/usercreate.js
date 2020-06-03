let url = "http://localhost:8080/";

$().ready( ()=>{
console.log("jQuery ready")
    $("#save").click(()=>{
        let newUser = {};
        newUser.id = Number($("#eid").val());
        newUser.userName = $("#euserName").val();
        newUser.password = $("#epassword").val(); 
        newUser.firstName = $("#efirstName").val();
        newUser.lastName = $("#elastName").val();
        newUser.phoneNumber = $("#ephoneNumber").val();
        newUser.email = $("#eemail").val();
        newUser.reviewer = $("#ereviewer").prop("checked");
        newUser.admin = $("#euseradmin").prop("checked");
        console.log("User:", newUser);
        $.ajax({
            method: "POST",
            url: `${url}/users/`,
            data: JSON.stringify(newUser),
            contentType: "application/json"
        })
            .done((res)=> {
                console.log("User added!", res);
            })
            .fail((err)=> {
                console.error(err);
            })
    });
         
});