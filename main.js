setTimeout(function() {
    document.querySelector('.loader').style.display = 'none';
    document.getElementById('header').style.display = 'block';
}, 3000);

function showsidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="flex";
}

function hidesidebar(){
    const sidebar = document.querySelector("#sidebar");
    sidebar.style.display="none";
}