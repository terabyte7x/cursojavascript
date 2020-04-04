let xhr = new XMLHttpRequest();

//Se eu quero buscar uma informação, GET, e o método que quero buscar!
xhr.open("GET", "https://api.github.com/users/duquedotdev");
xhr.send(null);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    console.log(JSON.parse(xhr.responseText));
  }
};
