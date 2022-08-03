import User, { IUser } from '../schemas/User';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
dotenv.config();

export const createUser = async (userData: IUser) => {
    const newUser = userData;
    const existingUser = await User.findOne({ email: newUser.email });
    if (existingUser) {
        throw new Error('This user already exists');
    }
    try {
        const user = new User(newUser);
        bcrypt.hash(process.env['SECRET'] as string, 10, (err, hash) => {
            if (err) throw new Error('Error generating salt');
            user.password = hash;
        });
        await user.save();
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Error while saving');
    }
};

export const findUser = async (
    userCredentials: Pick<IUser, 'email' | 'password'>
) => {
    try {
        const user = await User.findOne({ email: userCredentials.email });
        return user;
    } catch (error) {
        console.log(error);
        throw new Error('Error performing finding user');
    }
};
