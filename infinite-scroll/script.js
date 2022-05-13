const imageContainer = document.getElementById('image-container');
let photosArray = [];

// Display photos on the page

const setAttributeHelper = (element, info) => {
  for (const key in info) {
    element.setAttribute(key, info[key]);
  }
};

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    const img = document.createElement('img');
    setAttributeHelper(item, {
      href: photo.links.html,
      target: '_blank',
    });
    setAttributeHelper(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.append(img);
    imageContainer.append(item);
  });
};

// Unsplash API
const count = 10;
const apiKey = '62mcvCSWfH8k2dJzfwaYbgNIu3Fsv4B5_YuIdL2hs1M';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
};

//On Load
getPhotos();
