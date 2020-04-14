var name_of_the_dish_array=[];
function submit(){
    var name1=Burger;
    var name2=Pizza;
    var name3=Pasta;
    var name4=Pie;
    var name5=document.getElementById("name_of_the_dish_1").value;
    name_of_the_dish_array.push(name5);
    console.log(name_of_the_dish_array);
    document.getElementById("display_dish").innerHTML=name_of_the_dish_array;
    document.getElementById("list_button").style.display="none";
}
function add(){
    name_of_the_students_array.push(name5);
    console.log(name_of_the_dish_array);
    document.getElementById("display_dish").innerHTML=name_of_the_dish_array;
}