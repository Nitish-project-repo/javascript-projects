/* 
    Manipulation of DOM( Model of Object Document inside window object) :- 

        > First , accessing the element you need to change
        > Second, what changes to make
        > Third, how to do it 

    
    First , accessing of element:

        > using dot (.) notation, for accessing the node in the document object.
        > Eg : Access the h1 heading in the website.
                    > Finding the path to h1 tag : document.querySelector("h1") ;
        
    Second , what changes to make: 

        > To change the text content inside the h1 tag to "My first DOM project"
            > We have option of textContent , innerText , innerHTML to access the text inside the h1 tag.
            > Using innerText here, .innerText = "My first DOM project" ;
    
    Third , how to do it: 

        > Assigning the value will replace the text with the changes I want to do.
        > Eg : Changing the Page title to "My first DOM project"
                    > const title = document.querySelector("h1");
                    > title.innerText = "My first DOM project" ; 
        
*/