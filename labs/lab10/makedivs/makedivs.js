// The given array
let objects = [
    { color: "#FF0000", height: 100, width: 300 },
    { color: "#FFFF00", height: 200, width: 200 },   
    { color: "#ff0000", height: 300, width: 100 },
   ];

for (var i = 0; i < objects.length; i++) {
    dvCreate = document.getElementById("dvCreate");
    let dvNew = document.createElement('div');

    dvNew.style.backgroundColor = objects[i].color;
    dvNew.style.height = objects[i].height + "px";
    dvNew.style.width = objects[i].width + "px";

    dvCreate.appendChild(dvNew);
}