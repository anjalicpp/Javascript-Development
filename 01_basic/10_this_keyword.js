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
}

