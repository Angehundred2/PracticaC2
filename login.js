const $usuario = $("#usuarioPrincipal");
const $password = $("#passPrincipal");

const credenciales = {
  usuario: "Angelo",
  pass: "a",
  user2: "profe1",
  pass2: "1"
};

const tokenAlumno = "JWT123123123lalalal";
const tokenProfe = "JWT456456456xyzxyz";

$("#login").on("click", function(){ 
  const valueUsuario = $("#usuarioPrincipal").val();
  const valuePassword = $("#passPrincipal").val();

  if (valueUsuario === credenciales.usuario || valueUsuario === credenciales.user2) {
    if (valuePassword === credenciales.pass || valuePassword === credenciales.pass2) {
        if (valueUsuario === credenciales.usuario) {
          localStorage.setItem("usuarioPrincipal", valueUsuario);
          localStorage.usuario = valueUsuario;
          localStorage.token = tokenAlumno;
          window.location.href = "dashboardAlumno.html";
        } else {
          localStorage.setItem("usuarioPrincipal", valueUsuario);
          localStorage.usuario = valueUsuario;
          localStorage.token = tokenProfe;
          window.location.href = "dashboardProfe.html";
        }

    } else {
        Swal.fire({
            title: "ERROR",
            text: "Contraseña incorrecta",
            icon: "error"
        });
    }
    
} else {
    Swal.fire({
        title: "ERROR",
text: "Usuario no encontrado",
        icon: "error"
    });
}

});