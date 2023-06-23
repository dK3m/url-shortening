function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var apiUrl = "https://rel.ink/api/links/";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ url: originalUrl })
  })
    .then(response => response.json())
    .then(data => {
      var shortUrl = "https://rel.ink/" + data.hashid;
      document.getElementById("shortUrl").value = shortUrl;
      document.getElementById("result").classList.remove("hidden");
    })
    .catch(error => console.log(error));
}
