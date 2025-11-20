window.addEventListener("load", function () {
    let name = prompt("Masukkan nama kamu:");

    if (name === null || name.trim() === "") {
        name = "Guest";
    }

    document.getElementById("welcome").innerText = `Hi ${name}! Welcome to My Website`;
});

// Form Validation + Print result
function submitForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let msg = document.getElementById("messageInput").value.trim();
    let result = document.getElementById("result");

    if (name === "" || email === "" || phone === "" || msg === "") {
        alert("Semua field wajib diisi!");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email tidak valid");
        return false;
    }

    result.innerHTML = `
        Nama: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}<br>
        Pesan: ${msg}<br>
    `;

    return false;
}
