// const sidebar = document.querySelector('.sidebar');
// const toggleBtn = document.querySelector('.menu-btn');
// const overlay = document.querySelector('.overlay');

// toggleBtn.addEventListener('click', ()=> {
//     sidebar.classList.toggle('sidebar-active');
//     overlay.classList.toggle('active')
//     console.log('btn clicked!')

//     overlay.addEventListener('click', () => {
//          sidebar.classList.toggle('sidebar-active');
//          overlay.classList.toggle('active')
//     })
// })

const menuBtn = document.querySelector(".menu-btn");
// const closeBtn = document.getElementById("closeBtn");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function openSidebar() {
    sidebar.classList.add("sidebar-active");
    overlay.classList.add("active");
}

function closeSidebar() {
    sidebar.classList.remove("sidebar-active");
    overlay.classList.remove("active");
}

menuBtn.addEventListener("click", openSidebar);
// closeBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);