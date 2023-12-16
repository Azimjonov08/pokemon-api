const elList = document.getElementById("List");

fetch("https://653  7a88fbb226bb85dd39095.mockapi.io/student/pokemon")
    .then(res => res.json())
    .then(data => getData(data))

function getData(data) {
    data.forEach(function (item, index) {
        const elSpan = document.createElement("div");
        const elName = document.createElement("div");
        const elBox1 = document.createElement("div");
        const elBox2 = document.createElement("div");
        const elSide = document.createElement("div");
        const elWeight = document.createElement("div");
        const elAgee = document.createElement("div");
        const elItem = document.createElement("li");
        const elImg = document.createElement("img");
        const elImage = document.createElement("img")

        elItem.classList.add("list-item");
        elImage.classList.add("list-img");
        elSpan.classList.add("list-span");
        elBox2.classList.add("list-type")
        elSide.classList.add("list-side");
        elWeight.classList.add("list-weight");
        elAgee.classList.add("list-agee")
        elImg.classList.add("heart")
        elName.classList.add("list-cards");
        elBox1.classList.add("list-title");
    
        elImage.src = item.img
        elImg.src = "./src/img/heart.svg"
        elWeight.textContent = item.weight
        elAgee.textContent = item.avg_spawns + " age"
        elBox1.textContent = item.name
        elBox2.textContent = item.type

        elList.append(elItem);
        elItem.append(elImg);
        elItem.append(elImage)
        elItem.append(elSpan);
        elItem.append(elName);
        elName.append(elBox1);
        elName.append(elBox2);
        elItem.append(elSide);
        elSide.append(elWeight);
        elSide.append(elAgee);
    });
}


