// Function onclick the link
function accordion_toggle(link){
    // printing the console when clicked
    console.log("Open");
    // printing the console to know which link is clicked
    console.log("You clicked "+link);

   //Getting all the section content using class name
    var sectionContent=document.getElementsByClassName("accordion-section");

    //looping through the section contents
    for(var i=0;i<sectionContent.length;i++){
        // checking the condition to check which section is clicked and displaying the content if met
        if(sectionContent[i].id===link){
        sectionContent[i].style.display="block";
        }else{
            sectionContent[i].style.display="none";
        }
    }

}
   

    
   
    
