var button = document.getElementById('button');
button.addEventListener('click', loadData) ;
function loadData (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt');
    xhr.onload = () => {
        document.getElementById('output').innerHTML = xhr.responseText;
    }
    xhr.send();
}  

