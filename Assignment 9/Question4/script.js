const searchIp = document.getElementById("searchInput");
const sortBtn = document.getElementById("sortButton");
const tbody =document.getElementById("userTable").querySelector("tbody");

document.addEventListener("DOMContentLoaded",function(){
    fetchUsers();
})
function fetchUsers() {
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
      renderUsers(data.data);
    })
    .catch(error => {
       console.error("Error fetching users:", error);
    });
}

function renderUsers(users) {
    tbody.innerHTML = "";
    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.first_name} ${user.last_name}</td>
            <td>${user.email}</td>
        `;
        tbody.appendChild(row);
    });
}

function filterUsers() {
    const searchText = searchInput.value.toLowerCase();
    const filteredUsers = Array.from(tbody.querySelectorAll("tr"))
        .filter(row => row.textContent.toLowerCase().includes(searchText));
    tbody.innerHTML = "";
    filteredUsers.forEach(row => {
        tbody.appendChild(row);
    });
}

sortBtn.addEventListener("click", function () {
    const sortedUsers = Array.from(tbody.querySelectorAll("tr"))
        .map(row => ({
            name: row.children[0].textContent.trim(),
            email: row.children[1].textContent.trim()
        }))
        .sort((a, b) => a.name.localeCompare(b.name)); 
    renderUsers(sortedUsers);
});






searchIp.addEventListener("input",function(){
    const searchText = searchIp.value.toLowerCase();
    const filteredUsers = Array.from(tbody.querySelectorAll("tr"))
        .filter(row => row.textContent.toLowerCase().includes(searchText));
    tbody.innerHTML = "";
    filteredUsers.forEach(row => {
        tbody.appendChild(row);
    });
})
