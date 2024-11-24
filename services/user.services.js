import generateToken from "../middlewares/jwtGenerate.js";
import Users from "../models/User.js";

export async function getUsers() {
  try {
    const users = await Users.find();
    return users;
  } catch (error) {
    // console.error(`Error al obtener los usuarios: ${error.message}`); aqui no se propaga el error solo lo muestro
    throw new Error(`Error al obtener los usuarios: ${error.message}`);
  }
}

export async function createUser(user) {
  const { email, password } = user;
  try {
    const user = await Users.findOne({ email });
    if (user) {
      return `Existe un usuario con el ${email}`;
    }
    const dbUser = Users.create({ email: email, password: password });
    return dbUser;
  } catch (error) {
    throw new Error(`Error al crear el usuario: ${error.message}`);
  }
}

export async function loginServices(user) {
  try {
    const { email, password } = user;
    const userInDB = await Users.findOne({ email });
    if (!userInDB) {
      return "El usuario no existe";
    }
    if (password !== userInDB.password) {
      return "Contraseña o email invalido";
    }
    const token = generateToken(user);
    return token;
  } catch (error) {
    throw new Error(`Error al logear el usuario: ${error.message}`);
  }
}

export async function deleteUser(email) {
  try {
    const userInDB = await Users.findOne({ email });
    if (!userInDB) {
      return "El usuario no existe";
    }
    await Users.deleteOne({ email });
    return "Usuario eliminado exitosamente";
  } catch (error) {
    throw new Error(`Error al eliminar el usuario: ${error.message}`);
  }
}

export async function deleteAll() {
  try {
    const result = await Users.deleteMany({});

    if (result.deletedCount === 0) {
      return "No hay usuarios para eliminar";
    }
    return "Todos los usuarios han sido eliminados exitosamente";
  } catch (error) {
    throw new Error(`Error al eliminar todos los usuarios: ${error.message}`);
  }
}

export async function updateUser(email, newData) {
  try {
    const userInDB = await Users.findOne({ email });

    if (!userInDB) {
      return "El usuario no existe";
    }
    const updatedUser = await Users.updateOne({ email }, { $set: newData });
    if (updatedUser.modifiedCount === 0) {
      return "No se han realizado cambios en el usuario";
    }
    return "Usuario actualizado exitosamente";
  } catch (error) {
    throw new Error(`Error al actualizar el usuario: ${error.message}`);
  }
}

// export async function getUsersById(email) {
//   try {
//     const users = await Users.findOne({ email });
//     return users;
//   } catch (error) {
//     throw new Error(`Error al obtener los usuarios: ${error.message}`);
//   }
// }
