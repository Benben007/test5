//budget
var mysql = require('mysql');
var express = require('express');
var mustacheExpress = require('mustache-express');

function openConnection(){
	return mysql.createConnection({
	  host     : 'sql7.freemysqlhosting.net',
	  user     : 'sql7136648',
	  password : 'fRRju4rl7X',
	  database : 'sql7136648',
	});
}

function getData4(connection, keywork, callback){
	query1='delete from Travailleur where Travailleur.Prenom like "' + prenom1 + '" and Travailleur.Nom like "' + nom1 + '" and Travailleur.Numeropersonel=' + numeropersonel1 + ' and Travailleur.Telephone=' + telephone1 + ' and Travailleur.Email="' + email1 + '"  and Travailleur.Adresse="' + adresse1 + '" and Travailleur.Matiere="' + matiere1 + '" and Travailleur.Numerocompte=' + numerocompte1 + ' and Travailleur.Dateembauche=' + dateembauche1 + ' and Travailleur.Datefin=' + datefin1 + ''
	console.log(query1)
	connection.query(query1, callback);
}


function getData3(connection, keywork, callback){
	query1='insert into Travailleur(Prenom,Nom,Numeropersonel,Telephone,Email,Adresse,Matiere,Numerocompte,Dateembauche,Datefin) values ("' + prenom1 + '", "' + nom1 + '", ' + numeropersonel1 + ', ' + telephone1 + ', "' + email1 + '", "' + adresse1 + '", "' + matiere1 + '", ' + numerocompte1 + ', ' + dateembauche1 + ', ' + datefin1 + ')'
	console.log(query1)
	connection.query(query1, callback);
}


function getData1(connection, keywork, callback){
	query1='SELECT Prenom as Prenom, Nom as Nom, Numeropersonel as Numeropersonel, Telephone as Telephone, Email as Email, Adresse as Adresse, Matiere as Matiere, Numerocompte as Numerocompte, Dateembauche as Dateembauche, Datefin as Datefin FROM Travailleur'
	console.log(1)
	connection.query(query1, callback);
}


var app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
 
app.get('/', function (req, res) {

	var connection = openConnection();
	keywork = req.query['keywork']
	prenom1 = req.query['prenom1']
	nom1 = req.query['nom1']
	numeropersonel1 = req.query['numeropersonel1']
	telephone1 = req.query['telephone1']
	email1 = req.query['email1']
	adresse1 = req.query['adresse1']
	matiere1 = req.query['matiere1']
	numerocompte1 = req.query['numerocompte1']
	dateembauche1 = req.query['dateembauche1']
	datefin1 = req.query['datefin1']
	

	var fonctionRetour4 = function(err, results, fields){
		  getData1(connection, keywork, fonctionRetour1);	

	};

	var fonctionRetour3 = function(err, results, fields){
		  getData1(connection, keywork, fonctionRetour1);	

	};
	
	var fonctionRetour1 = function(err, results, fields){
		  if(err){
		  	console.log(err);
		  }
		 	
		 else {

//	 		console.log(results)
				
	 			var data1 = []
	 			for (var i in results) {
	 			data1.push([results[i].Prenom, results[i].Nom, results[i].Numeropersonel, results[i].Telephone, results[i].Email, results[i].Adresse, results[i].Matiere, results[i].Numerocompte, results[i].Dateembauche, results[i].Datefin])

	 	  		}
				dataAsString1 = JSON.stringify(data1)

//				console.log(dataAsString1);
				
				res.render('test5.html', {
						data1: dataAsString1,
								
				});
				connection.end();
		
			};
	
	};
		
		
	
 if (req.query['del']){
 	getData4(connection, keywork, fonctionRetour4);		
 }
 else {
 	if (req.query['initiate']){
			getData3(connection, keywork, fonctionRetour3);		
	}
	else {

		getData1(connection, keywork, fonctionRetour1);	
		
	}
	
 }




});




app.use(express.static('public'));

//var server= app.listen(3000, '0.0.0.0', function () {
//  console.log('Example app listening on port 3000!' + server.address().port);
app.set('port', ( process.env.PORT || 3000 ));
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
 
//app.listen(3000, '0.0.0.0');

//console.log('running port 3000')
// arbetare data 4 del, data1 show, data3 add 
// kund  data5 del, data6 show, data7 add
// mission data8 del, data9 show, data10 add 
// si del->4->1      sinon si initiate->3->1     sinon 1  exit 
// si del2->5->6 	sinon si initiate2->7->6     sinon 6 exit
// si del3->8->9     sinon si initiate3->10->9     sinon 9 exit

/*if (req.query['del'] || req.query['initiate'])

	 if (req.query['del']){
	 	getData4(connection, keywork, fonctionRetour4);		
	 }
	 else {
	 	if (req.query['initiate']){
				getData3(connection, keywork, fonctionRetour3);		
		}
		else {

			getData1(connection, keywork, fonctionRetour1);	
			
		}
		
	 }*/
