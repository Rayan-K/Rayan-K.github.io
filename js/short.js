
   
    // Images container
    
    var gallery = document.getElementById('gallery');
    
    
    /* ------------------------------
      Fetch our gallery JSON object
    ------------------------------ */
    
    // For a recap on using Fetch, please see my fetch demo:
    // https://codepen.io/pbutcher/pen/wvaeQvZ
    fetch('http://127.0.0.1:5500/js/data.json')
    
    // Do something with the response...
    .then(function(res) {
    
      // Get the JSON representation of the response object then...
      res.json().then(function(json) {
    
        // Loop over each object in our JSON object (array)...
        json.short.forEach(function(el) {
    
          // Create a new gallery item container (a link to the image)...
          var galleryItem = document.createElement('a');
          //messageElement.classList.add('message');
          // Give this div a class name
          galleryItem.setAttribute('class', 'gallery-item');
          
          // Add the href attribute to the anchor
          galleryItem.setAttribute('href', el.url);
          
          // Open the image in a new tab
          galleryItem.setAttribute('target', '_blank');
          
          // Create an image element...
          var image = document.createElement('img');
    
          // Set some attributes...
          image.setAttribute('src', el.url);        // The url of the image
          image.setAttribute('alt', el.caption);    // The alternative text
          image.setAttribute('title', el.caption);  // The tooltip
          image.setAttribute('value',el.price);     //The price of the t-shirt
          image.setAttribute('name',el.name);      //The source of the image
          
          // Create a caption element...
          var caption = document.createElement('caption');
          var price = document.createElement('price');
          var name = document.createElement('name');
          
          // Add text content to caption
          caption.innerText = el.caption;
          price.innerText = el.price;
          name.innerText = el.name;

          // Append the image and caption to our gallery item container
          galleryItem.appendChild(image);
          galleryItem.appendChild(caption);
          galleryItem.appendChild(price);
          galleryItem.appendChild(name);
          
          // Append the gallery item to our gallery element
          gallery.appendChild(galleryItem);
        });
      });
    });