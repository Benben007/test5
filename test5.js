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
	query1='delete from Travailleur where Travailleur.Prenom like "' + prenom1 + '" and Travailleur.Nom like "' + nom1 + '" and Travailleur.Numeropersonel=' + numeropersonel1 + ' and Travailleur.Telephone=' + telephone1 + ' and Travailleur.Email="' + email1 + '"  and Travailleur.Adresse="' + adresse1 + '" and Travailleur.Matiere="' + matiere1 + '" and Travailleur.Numerocompte="' + numerocompte1 + '" and Travailleur.Dateembauche="' + dateembauche1 + '" and Travailleur.Datefin="' + datefin1 + '" '
	console.log(query1)
	connection.query(query1, callback);
}


function getData3(connection, keywork, callback){
	query1='insert into Travailleur(Prenom,Nom,Numeropersonel,Telephone,Email,Adresse,Matiere,Numerocompte,Dateembauche,Datefin) values ("' + prenom1 + '", "' + nom1 + '", ' + numeropersonel1 + ', ' + telephone1 + ', "' + email1 + '", "' + adresse1 + '", "' + matiere1 + '", "' + numerocompte1 + '", "' + dateembauche1 + '", "' + datefin1 + '")'
	console.log(query1)
	connection.query(query1, callback);
}


function getData1(connection, keywork, callback){
	query1='SELECT Prenom as Prenom, Nom as Nom, Numeropersonel as Numeropersonel, Telephone as Telephone, Email as Email, Adresse as Adresse, Matiere as Matiere, Numerocompte as Numerocompte, Dateembauche as Dateembauche, Datefin as Datefin FROM Travailleur'
	console.log(1)
	connection.query(query1, callback);
}

function getData5(connection, keywork, callback){
	query1='delete from Client where Client.PrenomClient like "' + prenomclient2 + '" and Client.NomClient like "' + nomclient2 + '" and Client.PrenomEleve like "' + prenomeleve2 + '" and Client.NomEleve like "' + nomeleve2 + '" and Client.Numeropersonel=' + numeropersonel2 + ' and Client.Telephone=' + telephone2 + ' and Client.Email="' + email2 + '"  and Client.Adresse="' + adresse2 + '" and Client.Matiere="' + matiere2 + '" '
	console.log(query1)
	connection.query(query1, callback);
}


function getData7(connection, keywork, callback){
	query1='insert into Client(PrenomClient,NomClient,PrenomEleve,NomEleve,Numeropersonel,Telephone,Email,Adresse,Matiere) values ("' + prenomclient2 + '", "' + nomclient2 + '", "' + prenomeleve2 + '", "' + nomeleve2 + '", ' + numeropersonel2 + ', ' + telephone2 + ', "' + email2 + '", "' + adresse2 + '", "' + matiere2 + '")'
	console.log(query1)
	connection.query(query1, callback);
}


function getData6(connection, keywork, callback){
	query1='SELECT PrenomClient as PrenomClient, NomClient as NomClient, PrenomEleve as PrenomEleve , NomEleve as NomEleve, Numeropersonel as Numeropersonel, Telephone as Telephone, Email as Email, Adresse as Adresse, Matiere as Matiere FROM Client'
	console.log(query1)
	connection.query(query1, callback);
}

function getData8(connection, keywork, callback){
	query1='delete from Mission where Mission.Heure_debut ="' + datetimedebut + '" and Mission.Heure_fin= "' + datetimefin + '" and Mission.PrenomTravailleur like "' + prenomtravailleur + '" and Mission.NomTravailleur like "' + nomtravailleur + '" and Mission.PrenomEleve like "' + prenomeleve3 + '" and Mission.NomEleve like "' + nomeleve3 + '" and Mission.PrenomClient like "' + prenomclient3 + '" and Mission.NomClient like "' + nomclient3 + '" and Mission.Matiere="' + matiere3 + '" '
	console.log(query1)
	connection.query(query1, callback);
}


function getData10(connection, keywork, callback){
	query1='insert into Mission(Heure_debut,Heure_fin,PrenomTravailleur,NomTravailleur,PrenomEleve,NomEleve,PrenomClient,NomClient,Matiere) values ("' + datetimedebut + '", "' + datetimefin + '", "' + prenomtravailleur + '", "' + nomtravailleur + '", "' + prenomeleve3 + '", "' + nomeleve3 + '", "' + prenomclient3 + '", "' + nomclient3 + '", "' + matiere3 + '")'
	console.log(query1)
	connection.query(query1, callback);
}


function getData9(connection, keywork, callback){
	query1='SELECT Heure_debut as Heure_debut, Heure_fin as Heure_fin,PrenomTravailleur as PrenomTravailleur,NomTravailleur as NomTravailleur,PrenomEleve as PrenomEleve,NomEleve as NomEleve,PrenomClient as PrenomClient,NomClient as NomClient,Matiere as Matiere FROM Mission'
	console.log(query1)
	connection.query(query1, callback);
}

function checkAuth(req, res, next) {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
}

var app = express();
app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.get('/my_secret_page', checkAuth, function (req, res) {
  res.send('if you are viewing this page it means you are logged in');
});

app.post('/login', function (req, res) {
  var post = req.body;
  if (post.user === 'john' && post.password === 'johnspassword') {
    req.session.user_id = johns_user_id_here;
    res.redirect('/my_secret_page');
  } else {
    res.send('Bad user/pass');
  }
});

app.get('/logout', function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
});     
 
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

	prenomclient2 = req.query['prenomclient2']
	nomclient2 = req.query['nomclient2']
	prenomeleve2 = req.query['prenomeleve2']
	nomeleve2 = req.query['nomeleve2']
	numeropersonel2 = req.query['numeropersonel2']
	telephone2 = req.query['telephone2']
	email2 = req.query['email2']
	adresse2 = req.query['adresse2']
	matiere2 = req.query['matiere2']

	datetimedebut = req.query['datetimedebut']
	datetimefin = req.query['datetimefin']
	prenomtravailleur=req.query['prenomtravailleur']
	nomtravailleur=req.query['nomtravailleur']
	prenomclient3 = req.query['prenomclient3']
	nomclient3 = req.query['nomclient3']
	prenomeleve3 = req.query['prenomeleve3']
	nomeleve3 = req.query['nomeleve3']
	matiere3 = req.query['matiere3']
	

	var fonctionRetour4 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

	};

	var fonctionRetour3 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

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
						data2: dataAsString2,
						data3: dataAsString3,
								
				});
				connection.end();
		
			};
	
	};
	
	var fonctionRetour5 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

	};

	var fonctionRetour7 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

	};
	
	var fonctionRetour6 = function(err, results, fields){
		  if(err){
		  	console.log(err);
		  }
		 	
		 else {

//	 		console.log(results)
				
	 			var data2 = []
	 			
	 			for (var i in results) {
	 			data2.push([results[i].PrenomClient, results[i].NomClient, results[i].PrenomEleve, results[i].NomEleve, results[i].Numeropersonel, results[i].Telephone, results[i].Email, results[i].Adresse, results[i].Matiere])
	 			
	 	  		}
				dataAsString2 = JSON.stringify(data2)

				console.log(dataAsString2);
				
				
				getData1(connection, keywork, fonctionRetour1);
		
			};
	
	};	

	var fonctionRetour8 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

	};

	var fonctionRetour10 = function(err, results, fields){
		  getData9(connection, keywork, fonctionRetour9);	

	};
	
	var fonctionRetour9 = function(err, results, fields){
		  if(err){
		  	console.log(err);
		  }
		 	
		 else {

//	 		console.log(results)
				
	 			var data3 = []
	 			
	 			for (var i in results) {
	 			data3.push([results[i].Heure_debut, results[i].Heure_fin, results[i].PrenomTravailleur, results[i].NomTravailleur, results[i].PrenomEleve, results[i].NomEleve, results[i].PrenomClient, results[i].NomClient, results[i].Matiere])
	 			
	 	  		}
				dataAsString3 = JSON.stringify(data3)

				console.log(dataAsString3);
				
				
				getData6(connection, keywork, fonctionRetour6);
		
			};
	
	};

 	
 if  ((req.query['del'])||(req.query['initiate'])) {
	 if (req.query['del']){
	 	getData4(connection, keywork, fonctionRetour4);		
	 }
	 else {
	 	if (req.query['initiate']){
				getData3(connection, keywork, fonctionRetour3);		
		}
		else {

			getData9(connection, keywork, fonctionRetour9);	
			
		}
		
	 }
 }
 else {
 	if  ((req.query['del2'])||(req.query['initiate2'])) {
	 if (req.query['del2']){
	 	getData5(connection, keywork, fonctionRetour5);		
	 }
	 else {
	 	if (req.query['initiate2']){
				getData7(connection, keywork, fonctionRetour7);		
		}
		else {

			getData9(connection, keywork, fonctionRetour9);	
			
		}
		
	 }
 	}
 	else if ((req.query['del3'])||(req.query['initiate3'])) {
 		if (req.query['del3']){
 			getData8(connection, keywork, fonctionRetour8);	
 		}
 		else {
 			if (req.query['initiate3']){
				getData10(connection, keywork, fonctionRetour10);		
			}
			else {
				getData9(connection, keywork, fonctionRetour9);	
			}
 		}
 	}



 	else getData9(connection, keywork, fonctionRetour9);		
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
// si del:4->(9)->6->1      sinon si initiate->3->(9)->6->1     sinon (9)->6->1  exit 
// si del2:5->(9)->6->1 	sinon si initiate2:7->(9)->6->1     sinon (9)->6->1  exit
// si del3->8->9->6->1     sinon si initiate3->10->9->6->1     sinon 9->6->1 exit

/*if (req.query['del'] || req.query['initiate']){

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
}
else {
	 if (req.query['del2']){
	 	getData5(connection, keywork, fonctionRetour5);		
	 }
	 else {
	 	if (req.query['initiate2']){
				getData7(connection, keywork, fonctionRetour7);		
		}
		else {

			getData6(connection, keywork, fonctionRetour6);	
			
		}
		
	 }	
}*/
