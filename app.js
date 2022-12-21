const countWords = () => {
    let noc = document.getElementById('words').value.length;
    document.getElementById('showData').innerHTML = "Total Characters = " + noc;

    let now = document.getElementById('words').value;
    now = now.match( /\w+/g );
    now = now.length;
    console.log(now);
    document.getElementById('showWords').innerHTML = "Total Words = " + now;
}