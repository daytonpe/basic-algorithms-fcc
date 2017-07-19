// You are given a JSON object representing a part of your musical 
// album collection. Each album has several properties and a unique 
// id number as its key. Not all albums have complete information.

// Write a function which takes an album's id (like 2548), a property 
// prop (like "artist" or "tracks"), and a value (like "Addicted to Love") 
// to modify the data in this collection.

// If prop isn't "tracks" and value isn't empty (""), update or set the 
// value for that record album's property.

// Your function must always return the entire collection object.

// There are several rules for handling incomplete data:

// If prop is "tracks" but the album doesn't have a "tracks" property, 
// create an empty array before adding the new value to the album's 
// corresponding property.

// If prop is "tracks" and value isn't empty (""), push the value 
// onto the end of the album's existing tracks array.

// If value is empty (""), delete the given prop property from the album.



// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (value == ""){
    // console.log("**************");
    // console.log(id);
    // console.log(prop);
    // console.log(value);
    // console.log("**************");
    delete collection[id][prop];
    return collection;
  }
  else{
    console.log('bang');
    switch (prop) {
      case prop = "album":
        //console.log("Album is being changed");
        collection[id].album = value;
        //console.log(collection);
        return collection;
        break;
      case prop = "artist":
        ////console.log("Artist is being changed");
        collection[id].artist = value;
        //console.log(collection);
        return collection;
        break;
      case prop = "tracks":
        //console.log("Tracks are being changed");
        //is there already a track list?
        if (collection[id].hasOwnProperty("tracks")){
          //console.log("has tracks already");
          collection[id].tracks.push(value);
          //console.log(collection);
          return collection;
          // collection[id].tracks = value;
          // //console.log(collection);
          break;
        }
        //if not we need to create one
        else{
          collection[id].tracks = [value];
          //console.log(collection);
          return collection;
          break;
        }
      default:
        // //console.log("The property you are trying to change is not valid");
        // //console.log(collection);
        break;
      }
  }
  return collection;
}

// Alter values below to test your code
// updateRecords(5439, "artist", "ABBA");
// updateRecords(2548, "album", "New Album");
// updateRecords(5439, "tracks", "New Track");
// updateRecords(1245, "blurb", "Nothing");
// updateRecords(2548, "artist", "")
console.log(updateRecords(2548, "artist", ""));













