const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(`Number of floors in the building ${building.numberOfFloors}`)
console.log(`Number apartments are on the floor 1  ${building.numberOfAptByFloor.firstFloor}`)
console.log(`Number apartments are on the floor 3  ${building.numberOfAptByFloor.thirdFloor}`)
console.log(`The name of the second tenant  : ${building.nameOfTenants[1]} and the number of rooms he has in his apartment : ${building.numberOfRoomsAndRent.dan[0]}`)
let sumSaraDavid=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
let danrent=building.numberOfRoomsAndRent.dan[1]
if(sumSaraDavid>danrent){
    building.numberOfRoomsAndRent.dan[1] = 1200
    console.log(building.numberOfRoomsAndRent.dan[1])
}