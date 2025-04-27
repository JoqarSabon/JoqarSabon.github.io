function showAlert() {
    Swal.fire({
        title: "Redirect",
        text: "You will be redirected to the UptimeRobot status page.",
        icon: "question",
        confirmButtonText: "Ok",
        confirmButtonColor: "#11b4d1",
        cancelButtonText: "No",
        showCancelButton: true,
        showCloseButton: true,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "./monitoring.html";
        }
    });
}
