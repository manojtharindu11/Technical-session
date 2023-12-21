const users = [
    {
        id: 1,
        name: "jone Doe",
    },
    {
        id: 2,
        name: "jane Dee",
    },
];

const getUsers = (cb) => {
    cb(users);
};

exports.getUsers = getUsers;