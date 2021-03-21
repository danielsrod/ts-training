var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'Daniel',
    age: 21,
    games: ['csgo', 'lol'],
    role: Role.AUTHOR
};
if (person.role === 2) {
    console.log(person.name);
}
console.log(person.games);
