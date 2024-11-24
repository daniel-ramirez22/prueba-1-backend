import {
  getUsers,
  createUser,
  loginServices,
  deleteUser,
  updateUser,
  deleteAll
} from "../services/user.services.js";

export async function listUsers(req, res) {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Create
export async function createNewUser(req, res) {
  try {
    const userData = req.body;
    const user = await createUser(userData);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Login

export async function loginUser(req, res) {
  try {
    const user = req.body;
    const token = await loginServices(user);
    res.status(200).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Delete one

export async function deleteUserById(req, res) {
  try {
    const { email } = req.params;
    const result = await deleteUser(email);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

//Delete All
export async function deleteAllUsers(req, res) {
  try {
    const result = await deleteAll(); 
    
    res.status(200).json({ message: result }); 
  } catch (error) {
    res.status(500).json({ message: error.message }); 
  }
}




//UPDATE
export async function updateUserById(req, res) {
  try {
    const { email } = req.params;
    const newData = req.body;

    const result = await updateUser(email, newData);

    if (result === "El usuario no existe") {
      return res.status(404).json({ message: result });
    }

    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
