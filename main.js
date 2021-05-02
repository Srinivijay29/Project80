names_of_people=[];
function submit(){
    var GuestName= document.getElementById("name1").value;
    names_of_people.push(GuestName);
    console.log(GuestName);

    console.log(names_of_people);
    var length_of_name=names_of_people.length;
    console.log(length_of_name);
    document.getElementById("display_name_with_commas").innerHTML=names_of_people.toString();




}
function sorting(){
    names_of_people.sort();
    var i=names_of_people.join("<br>");
    console.log(names_of_people);
    document.getElementById("display_name_of_the_guest").innerHTML=i.toString();

}
function searching(){
    var s=document.getElementById("search_name_of_the_guest").value;
    var found=0;
    var j;
    for(j=0;j<names_of_people.length;j++){
        if(s==names_of_people[j]) {
           found=found+1;

        }
    }
    document.getElementById("p1").innerHTML="namefound"+found+"time/s";
}






