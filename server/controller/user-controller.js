 import postUser from '../model/user.js';

 

//Get all users
export const getUsers = async (request, response) => {
    try{
        const users = await postUser.find({});
            response.status(200).json(users);
       
        
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}




// Save data of the user in database
export const addUser = async (request, response) => {
    const user = request.body;
    
    const newUser = new postUser(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }

}

// Get a user by id
export const getUserById = async (request, response) => {
    try{
        const user = await postUser.findById(request.params.id);
        response.status(200).json(user);
    }catch( error ){
        response.status(404).json({ message: error.message })
    }
}

// Save data of edited user in the database
export const editUser = async (request, response) => {
    let user = request.body;

    const editUser = new postUser(user);
    try{
        await postUser.updateOne({_id: request.params.id}, editUser);
        response.status(201).json(editUser);
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}

// deleting data of user from the database
export const deleteUser = async (request, response) => {
    try{
        await postUser.deleteOne({_id: request.params.id});
        response.status(201).json("User deleted Successfully");
    } catch (error){
        response.status(409).json({ message: error.message});     
    }
}