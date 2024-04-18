if (!localStorage.usuario) {
    Swal.fire({
      title: 'LOGUEATEEEEEEEEEE',
      icon: 'warning',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false,
      background: 'rgba(0, 0, 0, 0.8)',
    
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = 'index.html';
      }
    });
  } else {
    document.getElementById('usuario').innerHTML = localStorage.usuario;
  }