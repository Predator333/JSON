const datos = [
    { alumno: "Ana", n1: 7, n2: 9 },
    { alumno: "Luis", n1: 8, n2: 6 },
    { alumno: "Marta", n1: 10, n2: 9 },
];
function generateTable() {

  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  const row = document.createElement("tr");

  const cellHead1 = document.createElement("th");
  const cellHeadText1 = document.createTextNode("Alumno");

  const cellHead2 = document.createElement("th");
  const cellHeadText2 = document.createTextNode("Nota 1");

  const cellHead3 = document.createElement("th");
  const cellHeadText3 = document.createTextNode("Nota 2");

  cellHead1.append(cellHeadText1);
  cellHead2.append(cellHeadText2);
  cellHead3.append(cellHeadText3);

  row.append(cellHead1);
  row.append(cellHead2);
  row.append(cellHead3);

  tblBody.append(row);


    datos.forEach(datoUni => {
  
        const row = document.createElement("tr");

        for (let clave in datoUni) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode(datoUni[clave]);
        cell.append(cellText);
        row.append(cell);
        }

     
        tblBody.append(row);
    });


  tbl.append(tblBody);

  document.body.append(tbl);

  tbl.setAttribute("border", "2");
}

document
  .querySelector("input[type='button']")
  .addEventListener("click", generateTable);
