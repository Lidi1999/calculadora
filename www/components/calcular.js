$(document). on ("click", "#somar", function(){
        var valor1 = parseInt($("#valor1").val());
        var valor2 = parseInt($("#valor2").val());
        
        var result = valor1 + valor2;
        
        $("#valor3").val(result);
    });

$(document). on ("click", "#sub", function(){
        var valor1 = parseInt($("#valor1").val());
        var valor2 = parseInt($("#valor2").val());
        
        var result = valor1 - valor2;
        
        $("#valor3").val(result);
    });
    
$(document). on ("click", "#mult", function(){
        var valor1 = parseInt($("#valor1").val());
        var valor2 = parseInt($("#valor2").val());
        
        var result = valor1 * valor2;
        
        $("#valor3").val(result);
    });

$(document). on ("click", "#div", function(){
        var valor1 = parseInt($("#valor1").val());
        var valor2 = parseInt($("#valor2").val());
        
        var result = valor1 / valor2;
        
        $("#valor3").val(result);
    });


