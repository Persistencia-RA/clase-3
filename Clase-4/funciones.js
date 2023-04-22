export function crearUsuario(usuario, nombre, apellido) {
  return usuario.create({
    firstName: nombre,
    lastName: apellido,
  });
}

export function actualizarNombrePorId(usuario, nombreNuevo, idUsuario) {
  return usuario.update(
    { firstName: nombreNuevo },
    { where: { id: idUsuario } },
  );
}

export function actualizarNombrePorApellido(usuario, nombreNuevo, apellido) {
  return usuario.update(
    { firstName: nombreNuevo },
    { where: { lastName: apellido } },
  );
}

export function eliminarPorId(usuario, idNumero) {
  return usuario.destroy({
    where: {
      id: idNumero,
    },
  });
}
