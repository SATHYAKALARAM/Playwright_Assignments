/*Assignment Requirements:  
Create two functions : launchBrowser, runTests where, 
    a) launchBrowser need to take input as browserName (string) and do not return any 
        - use if-else (chrome or otherwise) 
        - Print the value 
    b) runTests need to take input as testType (string) and do not return any  
        - use switch case (smoke, sanity, regression, default (smoke)) 
        - Print the values 
Call that function from the javascript*/

// A
function launchBrowser()
{
    let Browsername = "Chrome"

    if(Browsername == "Chrome")
    {
        console.log("Chrome browser is launched")
    }
    else
    {
        console.log("unverified browser, Please try with different Browser")
    }
}

launchBrowser();

// B

function runTests()
{
    let testtype = "Regression"

    switch(testtype)
    {
    case "Smoke" :
    console.log("Smoke Testing");
    break;
    case "Sanity" :
    console.log("Sanity Testing");
    break;
    case  "Regression" :
    console.log("Regression Testing");
    break;
    default:
    console.log("Smoke Testing");
    break;
    }
}

runTests();