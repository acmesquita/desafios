var should = require( 'should' )
var jogo = require( '../secret_friend' )
var participante = require( '../participante' )

describe( 'secret_friend.js', function(){
    it( 'criar um participante recebendo um nome', function(){
	    new Participante("Catharina").nome.should.be.equal( "Catharina" );	
    });
}) 
