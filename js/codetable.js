var tableString = "";

for (i = 0; i < countryCodes.length; i++) {
  tableString += "<tr>";
  tableString += "<td>" + countryCodes[i]["Name"] + "</td>";
  tableString += "<td>" + countryCodes[i]["Code"] + "</td>";
  tableString += "</tr>";
}

document.getElementById("codetable").innerHTML += tableString;
