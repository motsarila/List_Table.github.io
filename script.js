console.log('hello world');
let add = document.getElementById( 'add' );
add.addEventListener( "click", function Add(TblName) {
    let table = document.createElement("table");
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let th =  document.createElement("th");
    let name = prompt('Enter the table name');
    if(name == ''){
        alert( 'Please enter a valid Name!' ) ;
        Add();
    }else{
        //btn readjusment
    add.style.position = 'relative';
    add.style.transform = 'translate(640px,270px)';
    //end btn readjustment
}
})
console.log(window.innerHeight,innerWidth);