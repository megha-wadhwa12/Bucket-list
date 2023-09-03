//Create an empty array
var bucketList = []

//create variable to select the list tag
// var listContainer = document.getElementById("list-container")
var listContainer = document.querySelector("#list-container");

function addValues(){
    //taking input from input field
    var value =document.getElementById("input-field").value;
    //pushing it inside the array - bucketList
    // console.log("value: ",value)
    bucketList.push(value);
    //display the list
    displayList();
}
function displayList(){

    console.log("From displayList Console: ",bucketList);

    //clearing the previous list
    listContainer.innerHTML="";

    for (let i=0;i<bucketList.length;i++){
        var li = document.createElement("li");
        li.innerHTML = bucketList[i] + `<span><img onclick="remove(`+i+`)" src="https://kq-storage.s3.ap-south-1.amazonaws.com/Github/bucketlist/tick-mark%5B1%5D.png" alt=""></img></span>`
        // console.log("li: ",li);

        //inserting the <li></li> tag created into the ul #list-container
        listContainer.append(li);
    }
}

function reset(){
    //empty the array
    bucketList = [];

    alert("List Cleared");
    //after empty just call the displayList function to display it again
    displayList();
    
}

function remove (idx){
    //delete idx element from the array
    alert(bucketList[idx] +
        " Task Is Done🚀"+
    new Date().getHours() +
    ":" + 
    new Date().getMinutes() + 
    ":" + 
    new Date().getDate() + 
    "/" +
    new Date().getMonth() +
    "/" + 
    new Date().getFullYear()
    );

    //delete idx element from the array
    bucketList.splice(idx,1);

    //after deleting display the text
    displayList();
}