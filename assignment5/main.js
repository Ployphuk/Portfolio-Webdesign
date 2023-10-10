function postFunction() {
    var text1 = document.getElementById('text1').value;
    var topic1 = document.getElementById('topic1');
    var comment1 = document.getElementById('comment1');
    var comment2 = document.getElementById('comment2');
    
    /*ถ้าว่าง*/
    if (topic1.textContent == '') {
        topic1.textContent = text1;
    } else if (comment1.textContent == '') {
        comment1.textContent = text1;
    } else if (comment2.textContent == '') {
        comment2.textContent = text1;
    }
}

function clearFunction() {
    document.getElementById('topic1').textContent = '';
    document.getElementById('comment1').textContent = '';
    document.getElementById('comment2').textContent = '';
    document.getElementById('text1').value = '';
}
