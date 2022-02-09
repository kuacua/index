let c1 = 0;
let c2 = 0;
let c3 = 0;
let c4 = 0;
let c5 = 0;
let c6 = 0;
let c7 = 0;
let c8 = 0;
let c9 = 0;
let c10 = 0;
let c11 = 0;
let c12 = 0;
let c13 = 0;
let c14 = 0;
let c15 = 0;
let c16 = 0;
let c17 = 0;
let c18 = 0;
let c19 = 0;
let c20 = 0;
let c21 = 0;
let c22 = 0;
let c23 = 0;
let c24 = 0;
let lv2 = 'level2.html';
let lv3 = 'level3.html';
function carta(num){
    if (c1 == 0) {
        c1 = num;
    }else if (c2 == 0){
        c2 = num;
        if (c1 == c2){
            
        }else{
            location.reload();
        }
    }else if (c3 == 0){
        c3 = num;
    }else if (c4 == 0){
        c4 = num;
        if (c3 == c4){
            
        }else{
            location.reload();
        }
    }else if (c5 == 0){
        c5 = num;
    }else if (c6 == 0){
        c6 = num;
        if (c5 == c6){
            
        }else{
            location.reload();
        }
    }else if (c7 == 0){
        c7 = num;
    }else if (c8 == 0){
        c8 = num;
        if (c7 == c8){
            
        }else{
            location.reload();
        }
    }else if (c9 == 0){
        c9 = num;
    }else if (c10 == 0){
        c10 = num;
        if (c9 == c10){
            ;
        }else{
            location.reload();
        }
    }else if (c11 == 0){
        c11 = num;
    }else if (c12 == 0){
        c12 = num;
        if (c11 == c12){
            
        }else{
            location.reload();
        }
    }else if (c13 == 0){
        c13 = num;
    }else if (c14 == 0){
        c14= num;
        if (c13 == c14){
            
        }else{
            location.reload();
        }
    }else if (c15 == 0){
        c15 = num;
    }else if (c16 == 0){
        c16 = num;
        if (c15 == c16){
            
        }else{
            location.reload();
        }
    }else if (c17 == 0){
        c17 = num;
    }else if (c18 == 0){
        c18 = num;
        if (c17 == c18){

        }else{
            location.reload();
        }
    }else if (c19 == 0){
        c19 = num;
    }else if (c20 == 0){
        c20 = num;
        if (c19 == c20){

        }else{
            location.reload();
        }
    }else if (c21 == 0){
        c21 = num;
    }else if (c22 == 0){
        c22= num;
        if (c21 == c22){

        }else{
            location.reload();
        }
    }else if (c23 == 0){
        c23 = num;
    }else if (c24 == 0){
        c24 = num;
        if (c23 == c24){

        }else{
            location.reload();
        }
    }
}
function next(num){
    if (num == 1){
        if (c10 > 0){
            document.location = lv2;
        }else{
            alert("Antes de poder pasar de nivel lo tienes que completar");
            location.reload();
        }
    }else if (num == 2){
        if (c16 > 0){
            document.location = lv3;
        }else{
            alert("Antes de poder pasar de nivel lo tienes que completar");
            location.reload();
        }
    }
    else if(num == 3){
        if(c24 > 0){
            document.getElementById("terminado").style.opacity = "1";
            document.getElementById("terminar").style.display = "none";
        }else{
            alert("Antes de poder pasar de nivel lo tienes que completar");
            location.reload();
        }
    }
}