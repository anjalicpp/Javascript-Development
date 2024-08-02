*****************************THIS KEYWORD*************************

const user={
    name:"Sham",
    price:"99"

    function display()
{
    //This refer to current context
    console.log('${this.username} welcome!!!!');//Sham welcome!!!!
    console.log(this);
}
}--------------
When there is nothing in code then if we do
    console.log(this);
output:{}  <-----if we are in node environment
if in browser output is: window object 
reason:Earlier js engine were only associated with browsers and now we can have standalone engines.

    --------------
