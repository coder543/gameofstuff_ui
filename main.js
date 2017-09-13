function startgame(name)
{
    var r = new XMLHttpRequest();
    r.open("POST", "localhost:8080/api", true);
    r.onreadystatechange = function() {
        if (r.readyState != 4 || r.status != 200)
            return;
        alert("Success: " + r.responseText);
    };
    r.send("name=" + name);
}