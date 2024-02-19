function mostrarParte(id) {
    // Ocultar todas las partes del formulario
    document.getElementById('parte1').style.display = 'none';
    document.getElementById('parte2').style.display = 'none';
    document.getElementById('parte3').style.display = 'none';
    
    // Mostrar la parte especificada
    document.getElementById(id).style.display = 'block';
  }