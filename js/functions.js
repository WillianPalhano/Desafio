function trazPraFrente(){
	var Palindromo = document.getElementById('campo').value;
	var novo = "";
	var cont = 1;
	for (var i = 0; i < Palindromo.length; i++) {
		novo = novo + Palindromo.charAt(Palindromo.length - cont);
		cont++;
	}
	if (limpaCaracteres(Palindromo) == limpaCaracteres(novo)) {
		alert("É um Palindromo");
	} else {
		alert("Não é um Palindromo");
	}
}

function limpaCaracteres(parametro){
	caracteres = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ,.-:;()?/ ";
	normais = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
	var nova = "";
	var bandeira = false;
	for (var i = 0; i < parametro.length; i++) {
		bandeira = false;
		for(var j = 0; j < caracteres.length; j++){
			if(parametro.substr(i,1) == caracteres.substr(j,1)){
				nova = nova + normais.substr(j,1);
				bandeira = true;
				break;
			}
		}
		if (bandeira == false) {
			nova = nova + parametro.substr(i,1);
		}
		
	}
	nova = nova.toUpperCase();
	return nova;

}

