const mySidebar = document.getElementById('mySidebar');

function w3Open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

function w3Close() {
  mySidebar.style.display = 'none';
}

const drawerLink = document.getElementById('drawer');
drawerLink.onclick = w3Open;

const closeLinks = document.getElementsByClassName('close');
Array.from(closeLinks).forEach(function assignOnClick (closeLink) {
  closeLink.onclick = w3Close;
});
