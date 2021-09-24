
// Creating a parent Class
class Animal {
    constructor(name, image, numberOfLegs) {
        this.name = name;
        this.image = image;
        this.numberOfLegs = numberOfLegs;
    }
}

// Exporting the class so we can use it for another location


// Creating a child Class
class Dog extends Animal {
    constructor(name, image, age, numberOfLegs) {
        super(name, image, numberOfLegs);
        this.age = age;
    }
    create() {
        const name = document.createElement("p");
        const age = document.createElement("p");
        const image = document.createElement("div");
        const imageSource = document.createElement("img");
        const animalCard = document.createElement("div");
        const cardInfo = document.createElement("div");
        name.innerHTML = "Name: " + this.name;
        name.className = "animalName";
        age.innerHTML = "Age: " + this.age;
        age.className = "animalAge";
        image.innerHTML = this.image;
        image.className = "animalImage";
        imageSource.className = "imageSource";
        cardInfo.className = "cardInfo";
        animalCard.className = "animalCard";
        image.appendChild(imageSource);
        cardInfo.appendChild(name);
        cardInfo.appendChild(age);
        animalCard.appendChild(cardInfo);
        animalCard.appendChild(image);
        return animalCard;
    }
}

// const DogList =[
//     {dog1: new Dog("Blackhead","https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445",3,4)},
//     {dog2: new Dog("Blackhead","https://iheartdogs.com/wp-content/uploads/2016/03/shutterstock_309507446.jpg",3,4)},
//     {dog3: new Dog("Blackhead","https://www.evcilhayvanal.com/wp-content/uploads/2019/01/Shar-Pei-Nas%C4%B1l-Bir-K%C3%B6pektir-Irk-%C3%96zellikleri-Shar-Pei-Yavrular%C4%B1.png",3,4)},
// ]

// Creating a child Class
class Duck extends Animal {
    constructor(name, image, age, numberOfLegs) {
        super(name, image, numberOfLegs);
        this.age = age;
    }
    create() {
        //Creating Elements
        const name = document.createElement("p");
        const age = document.createElement("p");
        const image = document.createElement("div");
        const imageSource = document.createElement("img");
        const animalCard = document.createElement("div");
        const cardInfo = document.createElement("div");
        //Adding ClassName and Paramaters
        name.innerHTML = "Name: " + this.name;
        name.className = "animalName";
        age.innerHTML = "Age: " + this.age;
        age.className = "animalAge";
        image.innerHTML = this.image;
        image.className = "animalImage";
        imageSource.className = "imageSource";
        cardInfo.className = "cardInfo";
        animalCard.className = "animalCard";
        //Appending Child
        image.appendChild(imageSource);
        cardInfo.appendChild(name);
        cardInfo.appendChild(age);
        animalCard.appendChild(cardInfo);
        animalCard.appendChild(image);
        return animalCard;
    }
}


// const DuckList=[
//     {duck1: new Duck ("Duffy","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*",2,2)},
//     {duck2: new Duck ("Pudy","https://cdn.pixabay.com/photo/2018/03/14/21/42/duck-3226461_960_720.jpg",2,2)},
//     {duck3: new Duck ("Murfuy","https://images.unsplash.com/photo-1597840637868-417c13c7e962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",2,2)},
// ],

import "../../"

const animalCardsContainer = document.querySelector(".animalCards-container");
//Creating Dog list
const Dog1 = new Dog("Karabas", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 3, 4);
const Dog2 = new Dog("Comar", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 4, 4);
const Dog3 = new Dog("Arya", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 1, 4);
animalCardsContainer.appendChild(Dog1.create());
animalCardsContainer.appendChild(Dog2.create());
animalCardsContainer.appendChild(Dog3.create());
//Creating Duck list
const Duck1 = new Duck("Duffy", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 1, 2);
const Duck2 = new Duck("Donald", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 2, 2);
const Duck3 = new Duck("Trump", "https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445", 4, 2);
animalCardsContainer.appendChild(Duck1.create());
animalCardsContainer.appendChild(Duck2.create());
animalCardsContainer.appendChild(Duck3.create());
