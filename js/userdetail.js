let url = "http://localhost:8080/";

$().ready( ()=>{
    $("#get").click(()=>{
        let userId = $("#userid").val()
        $.getJSON(`${url}/users/${userId}`)
            .done((res)=>{
                let jsonresp = res;
                display(jsonresp);

            })
    });
});

const display = (jsonresp) => {
    let user = jsonresp.data;
    $("#eid").text(user.id);
    $("#euserName").text(user.userName);
    $("#efullName").text(user.firstName + " " + user.lastName);
}