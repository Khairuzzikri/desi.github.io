function showPage() {
    var nama = document.getElementById("nama").value;
    if (nama == "") {
        alert("Harap masukkan nama Anda.");
        return false;
    }
    localStorage.setItem("nama", nama);
    window.location.href = "baru.html";
}
var nama = localStorage.getItem("nama");
if (nama == null) {
    window.location.href = "index.html";
} else {
    document.getElementById("nama").innerHTML = nama;
}