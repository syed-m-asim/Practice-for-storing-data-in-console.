let inp = document.getElementById("input");
let task = document.getElementById("btn");
task.addEventListener("click", function (a) {
    a.preventDefault();
    console.log(inp.value)
});



