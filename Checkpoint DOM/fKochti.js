function like(x) {  // fonction like bich te9leb les couleurs ki tenzel 
    var color ; 
    color = x.style.color ;  
    if ( color == 'grey' ) 
        x.style.color = 'palevioletred'; 
    else 
        x.style.color = 'grey'; 
  }

function remove(x){ // fonction remove 
    if (confirm('are sure you would remove ? ' + x.id + ' ?')){ 
        idtr = "tr_"; 
        idtr= idtr.concat(x.id)   
        document.getElementById(idtr).remove();  

        tots(); 
    }
}

function down(x){
    var q_id = 'q_'+x.id ;
    var count = document.getElementById(q_id).textContent; 
    if( count == 1 ) 
        alert( ' quantité minimum 1' ); 
    else{ // ken quatité akther mil 1
        count--; 
        document.getElementById(q_id).innerHTML = count ;  
        prixTot(x.id,count) // bich ne7sbou el prix total mta3 el produit wa7dou
    }
}

function up(x){ // kima el down()
    var q_id = 'q_'+x.id ;
    var count = document.getElementById(q_id).textContent;
    count++;
    document.getElementById(q_id).innerHTML = count ;
    prixTot(x.id,count)
}

function prixTot(nom,q){ 
    var p_t = 'p_t_'+nom; 
    var prix = document.getElementById('p_'+nom); 
    var p = parseFloat(prix.textContent); // houni nraj3ou el prix float bich najmou ne7sbou
    var tot = p * q; 
    document.getElementById(p_t).innerHTML = tot ; 

    tots();
}

function tots(){
    var coca = document.getElementById('p_t_coca'); 
    var fanta = document.getElementById('p_t_fanta'); 

    if( coca == null ) coca = 0 ; 
    else coca = coca.textContent ; // ken fama menou ne5thou el valeur mte3ou

    if( fanta == null ) fanta = 0 ;
    else fanta = fanta.textContent ; // ken fama menou ne5thou el valeur mte3ou
    

    var tot = parseFloat(coca) + parseFloat(fanta) ; 
    document.getElementById('tots').innerHTML = tot; 
}
