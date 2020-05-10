const apiUrl = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Chamada da API
fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((room) => {
      var rooms = document.getElementById("rooms");

      var div = document.createElement("div");
      var card = document.createElement("div");

      div.classList.add("col-m-4", "col-lg-4");
      card.classList.add("card");

      var img = document.createElement("img");
      img.className = "card-img-top"
      img.src = room.photo;

      card.appendChild(img);

      var h5 = document.createElement("h5");
      h5.className = "card-title"
      h5.innerHTML = room.name;
      card.appendChild(h5);

      var h6 = document.createElement("h6");
      h6.className = "card-text"
      h6.innerHTML = "<strong>R$ " + room.price + "</strong>/noite";
      card.appendChild(h6);

      var p = document.createElement("p");
      p.className = "card-text"
      p.innerHTML = room.property_type;

      card.appendChild(p);
      div.appendChild(card);
      rooms.appendChild(div);
    });
  });
