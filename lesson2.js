// Question1
function temperature () {
    let tempindegree = parseFloat (document.getElementById("temp").value);
    let result = (tempindegree*9/ 5) + 32;
    
    document.getElementById("para1").innerHTML= `The temperature ${tempindegree} degree is equal to temperature ${result}F `;
}

// Question2

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("All_students").innerHTML= classification;
var beststudents = classification.slice(-3,);
document.getElementById("Three_Best_students").innerHTML= beststudents ;

// Question3a
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
// console.log(course)
// console.log(course.title)
document.getElementById("Title").innerHTML = course.title;
// Question3b
document.getElementById("mainCatogery").innerHTML = course.categories[0];
// Question3c
document.getElementById("fiveStar").innerHTML = `show perscentage`;


// Question4a
var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
document.getElementById("originalarr").innerHTML = shoppingList;
    let lastindx = shoppingList.slice(-1)
document.getElementById("placeItatbe").innerHTML = lastindx + shoppingList;
//Question4b
document.getElementById("q4part21").innerHTML = shoppingList;
    shoppingList.push( "Cheese", "Eggs") 
    console.log(shoppingList)
document.getElementById("q4part22").innerHTML = shoppingList;
//end


