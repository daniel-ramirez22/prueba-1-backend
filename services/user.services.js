import Users from "../models/User.js";

export async function getUsers() {
  try {
    const users = await Users.find();
    return users;
  } catch (error) {
    // console.error("Error");
    throw new Error(`Error al obtener los usuarios: ${error.message}`);
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
