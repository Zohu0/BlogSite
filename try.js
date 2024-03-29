const arrayOfObjects = [
    { name: "Object 1", value: 1 },
    { name: "Object 2", value: 2 },
    { name: "Object 3", value: 3 },
    { name: "Object 4", value: 4 },
    { name: "Object 5", value: 5 },
    { name: "Object 6", value: 6 }
];

// Using a for loop to print the names of the last 3 objects in reverse order
for (let i = arrayOfObjects.length - 1; i >= arrayOfObjects.length - 3; i--) {
    console.log(arrayOfObjects[i].name);
}