setTimeout(function() {
    document.querySelector(".loader").style.display = 'none';
    document.querySelector(".header") .style.display = 'flex';
}, 3000);

function showsidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="flex";
}

function hidesidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="none";
}