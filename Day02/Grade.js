/*1. Create a function that takes a student's score as a parameter. 
2. Declare and initialize the variable. 
3. Use `switch` statement inside the function. 
4. Return the corresponding grade. 
5. Call the function and print the result.*/

function score(mark)
{
    mark = 67
    switch(true)
    {
    case (mark>90):
        console.log("Grade A");
    break;
    case (mark<90 && mark>70):
        console.log("Grade B");
    break;
    case (mark<70 && mark>50):
        console.log("Grade C");
    break;
    default:
    console.log("Grade D");
    }
}
score();