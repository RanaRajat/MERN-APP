import bcrypt from "bcryptjs";

const users = [
    {
        name:"Admin User",
        email:"admin@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:"Jimmy Mechgill",
        email:"jimmy@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    },
    {
        name:"Chloe Decker",
        email:"chloe@gmail.com",
        password:bcrypt.hashSync('123456',10),
        isAdmin:false
    }
];

export default users;