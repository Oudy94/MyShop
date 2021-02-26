import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Saoud',
    email: 'saoud@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Samer',
    email: 'Samer@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Salem',
    email: 'Salem@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
