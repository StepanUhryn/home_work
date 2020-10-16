console.log(document.body);
console.log(document.getElementById('id1'));
console.log(document.getElementsByClassName('ddd'));
console.log(document.getElementsByTagName('script'));

const buttonClick = () => {
    alert('We press button');
}

const button = document.getElementById('myButton')
    if (button) {
        button.onclick = buttonClick
    }

    const funcChange = (e) => {
      console.log(e.target.value);
    }
    const input = document.getElementById('id3')
    if (input) {
        input.onchange = funcChange
    }