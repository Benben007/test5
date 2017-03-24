// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart', 'table']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawTable);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
//var parse=JSON.parse(abracadabra);

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








