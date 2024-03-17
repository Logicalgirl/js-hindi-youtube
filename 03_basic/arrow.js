const user = {
    username:"tannu",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); // in this line we use this keyword for accesing value whose ihn under the scope.
    }
}
user.welcomeMessage()