var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
btn1.addEventListener('click', loadCustomer) ;
btn2.addEventListener('click', loadCustomers) ;
function loadCustomer (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json');
    xhr.onload = () => {
        var ob1 = JSON.parse(xhr.response)
        document.getElementById('customer').innerHTML = "name: " + ob1.name + "<br>" + "company: " + ob1.company + "<br>" + "phone: " + ob1.phone +"<br>" + "id: " + ob1.id ;
    }
    xhr.send();
} 

function loadCustomers (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json');
    xhr.onload = () => {
        var ob2 = JSON.parse(xhr.response)
        var data='';
        for (var i in ob2){
        data +="name: " + ob2[i].name + "<br>" + "company: " + ob2[i].company + "<br>" + "phone: " + ob2[i].phone +"<br>" + "id: " + ob2[i].id + "<hr>";
        }
        document.getElementById('customers').innerHTML = data;
    }
    xhr.send();
}