var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
btn1.addEventListener('click', loadCustomer) ;
btn2.addEventListener('click', loadCustomers) ;
function loadCustomer (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customer.json');
    xhr.onload = () => {
        document.getElementById('customer').innerHTML = xhr.responseText;
    }
    xhr.send();
} 

function loadCustomers (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'customers.json');
    xhr.onload = () => {
        document.getElementById('customers').innerHTML = xhr.responseText;
    }
    xhr.send();
}