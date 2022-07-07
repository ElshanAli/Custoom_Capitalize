var btn = document.getElementById('btn-click');

btn.onclick = () =>{
    var letter = document.getElementById('cos-input').value.slice(0,1).toUpperCase();

    var word = document.getElementById('cos-input').value.slice(1).toLowerCase();

    document.getElementById('end-of-result').innerHTML = letter + word


}