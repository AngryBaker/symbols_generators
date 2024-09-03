export default class Team {
    
    *[Symbol.iterator]() {
        let listOfChars = Object.getOwnPropertyNames(this);
        let counter = 0;
        while (counter < listOfChars.length) {
            yield listOfChars[counter++]
        }
    }
  
}

