const findTheOldest = function(array) {
    return array.reduce((oldest, current) => {
        return getAge(oldest.yearOfBirth, oldest.yearOfDeath) > getAge(current.yearOfBirth, current.yearOfDeath) ? oldest : current;
    });
};

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
