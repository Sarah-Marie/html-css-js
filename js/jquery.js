let url = "http://localhost:8080/";

let jsonresp;

$().ready( ()=>{
    $.getJSON(`${url}/users/`)
        .done( (res)=>{
            jsonresp = res;
            display();
            console.log(res);
        })
        .fail( (err)=>{
            console.error(err);
        });
} );

const display = () => {
    let tbody = $("tbody");
    for(let user of jsonresp.data) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${user.id}</td>`);
        let tduserName = $(`<td>${user.userName}</td>`);
        let tdfullName = $(`<td>${user.firstName} ${user.lastName}</td>`);
        let tdphoneNumber = $(`<td>${user.phoneNumber}</td>`);
        let tdemail = $(`<td>${user.email}</td>`);
        let tdreviewer = $(`<td>${user.reviewer ? "Yes" : "No"}</td>`);
        let tdadmin = $(`<td>${user.admin ? "Yes" : "No"}</td>`);
        tr.append(tdId);
        tr.append(tduserName);
        tr.append(tdfullName);
        tr.append(tdphoneNumber);
        tr.append(tdemail);
        tr.append(tdreviewer);
        tr.append(tdadmin);
        
        tbody.append(tr);

    }
}