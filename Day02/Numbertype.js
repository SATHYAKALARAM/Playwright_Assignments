/*1. Create a function named that takes a number as a parameter. 
2. Declare and initialize the variable. 
3. Use a conditional statement to check if the number is greater than 0, to check if the number is less than 0, 
and to handle the case when the number is zero. 
4. Return the corresponding string value for each case. 
5. Call the function and print the result. */

function numbertype(num)
{
    num = 25
    if(num>0)
    {
        return "This is a positive number"
    }
    else if (num==0)
    {
        return "This is a netrual number"
    }
    else (num<0)
    {
        return "This is a negative number"
    }
}

console.log(numbertype());