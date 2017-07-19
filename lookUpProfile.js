//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop){
// Only change code below this line
 
    //FIGURE OUT IF CONTACT EXISTS  
   exists = false;
   index = 0;
   for(var i = 0; i<contacts.length; i++){
        if (contacts[i].firstName == firstName){
            exists = true;
        }
        //FIGURE OUT INDEX OF NAME IN ARRAY
        if (exists == false){
            index++;
        }
    }

    
    if(exists == false){
        return "No such contact";
    }


    //MAKE SURE PROPERTY EXISTS FOR THAT NAME
    if (!contacts[index].hasOwnProperty(prop)){
        console.log(prop);
        return "No such property";
    }

    console.log(index)
    console.log(prop)
    console.log(contacts[index].number) //index is working, it's 'prop' that's an issue

    // console.log(contacts[index].prop
    //IMPORTANT
    //Can't do:   return contacts[index].prop;
    //returns undefined

    return contacts[index][prop]; 

}

   


   

// Only change code above this line


// Change these values to test your function
//lookUpProfile("Akira", "likes");
//console.log(lookUpProfile("Bob", "likes"));
console.log(lookUpProfile("Sherlock", "number"));



// TEST
// "Kristian", "lastName" should return "Vos"
// "Sherlock", "likes" should return ["Intriguing Cases", "Violin"]
// "Harry","likes" should return an array
// "Bob", "number" should return "No such contact"
// "Akira", "address" should return "No such property"



