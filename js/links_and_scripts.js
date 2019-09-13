var header = document.createElement('head');
header.innerHTML = document.getElementById('template-scripts').innerHTML;
document.getElementById('targetElement').appendChild(header);