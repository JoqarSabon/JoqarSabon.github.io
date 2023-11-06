    document.addEventListener('mousedown', e => {
      if (e.which === 2) {
        e.preventDefault();
        Swal.fire({
          title: "???????",
          width: 600,
          padding: "3em",
          color: "#757574",
          imageUrl: "https://media.giphy.com/media/3oKIPlCroSFHV8uoko/giphy.gif",
          imageAlt: "Custom image",
          imageWidth: 400,
          imageHeight: 320,
          background: "#bfbebb",
          backdrop: `
            rgba(57, 57, 57, 0.8)`,
            confirmButtonText: "Okay",
            confirmButtonColor: "#757574",
            allowOutsideClick: false, 
            allowEscapeKey: false,
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = 'https://joqarsabon.com/backrooms.html';
            }
          });
        }
      });
