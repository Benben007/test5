// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawTable2);
google.charts.setOnLoadCallback(drawTable);


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
//var parse=JSON.parse(abracadabra);
function drawTable2() {
       
       var dat2 = new google.visualization.DataTable();
       dat2.addColumn('string', 'Prenom Client');
       dat2.addColumn('string', 'Nom Client');
       dat2.addColumn('string', 'Prenom Eleve');
       dat2.addColumn('string', 'Nom Eleve');
       dat2.addColumn('number', 'Numero personel');
       dat2.addColumn('number', 'Telephone');
       dat2.addColumn('string', 'Email');
       dat2.addColumn('string', 'Adresse');
       dat2.addColumn('string', 'Matiere');
       dat2.addRows(data2);

var table = new google.visualization.Table(document.getElementById('table2_div'));
table.draw(dat2, {showRowNumber: true, width: '100%', height: '100%'});

}

function drawTable() {
       
       var dat = new google.visualization.DataTable();
       dat.addColumn('string', 'Prenom');
       dat.addColumn('string', 'Nom');
       dat.addColumn('number', 'Numero personel');
       dat.addColumn('number', 'Telephone');
       dat.addColumn('string', 'Email');
       dat.addColumn('string', 'Adresse');
       dat.addColumn('string', 'Matiere');
       dat.addColumn('number', 'Numero de compte');
       dat.addColumn('number', 'Date embauche');
       dat.addColumn('number', 'Date fin');
       dat.addRows(data1);

var table = new google.visualization.Table(document.getElementById('table_div'));
table.draw(dat, {showRowNumber: true, width: '100%', height: '100%'});

}










