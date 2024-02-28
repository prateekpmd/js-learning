// textContent ,innerText,innerHTML
//.getElementById.('id name')
//.getElementByClassName ('className')
//.querySelector // ('h1')(.className,#idName)
//document.querySelector('input[type="password"]');
//document.querySelector('p:first-child');

//query.SelectorAll() -> returns a node list. on which we can do a forEach(cb);

//document.querySelectorAll('li);
//and suppose if you wanna select 1/3
//const first = document.querySelectorAll('li);
//first[0].style.backgroundColour="red";


//query.getElementByClassName(''); -> HTMLCollection
//first[0].style.backgroundColour="red";
//so inorder to loop we need to convert the html HTMLAllCollection into an Array,
//so use Array.from()


/*
class= parent 
1.1st child
2. 2nd child
3. 3rd child



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM | Chai aur code</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <div class="parent">
        <!-- this is a comment -->
        <div class="day">Monday</div>
        <div class="day">Tuesday</div>
        <div class="day">Wednesday</div>
        <div class="day">Thursday</div>
    </div>
</body>
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent);
    // console.log(parent.children);
    // console.log(parent.children[1].innerHTML);

    // for (let i = 0; i < parent.children.length; i++) {
    //      console.log(parent.children[i].innerHTML);
        
    // }
    parent.children[1].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);
    // console.log(dayOne.parentElement);
    // console.log(dayOne.nextElementSibling);

    console.log("NODES: ", parent.childNodes);
</script>
</html>
*/

// const parent=document.querySelector('parent');
// parent.firstChidlElement
// parent.lastChildElement

//or
//// const parent=document.querySelector('li:nth-child(2)');




//how to create an element. 
//document.createElement('h1);
//div.innerText="wow hello"; or document.createTextNode or div.textContent or div.outerHTML and div.innerHTML


//the above ones are  for creation 
// if you wanna edit 
// replaceWith()

//to remove the elements
//div.remove()

// addEventListner 
//pehle attachEvent(in InteretExplorer)
//onEventListner in (query)
//event.preventDeafult(blocks the functionality or the default behaviour of the tag)


//event propagation
//1.Event bubling (inside se outside ) -->to stop it e.stopPropagation
//2.Event capturing (outside se inside)
//so to acheive that addEventListner("click",(){},true)  ---> make the 2nd argument true to acheive event capturing


//setIntervAL(CB,TIME,PARAMETER);