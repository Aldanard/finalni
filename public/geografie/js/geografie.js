$(function(){


    let mesta =[];
    fetch('../../historie/data/mesta.json')
    .then(response => {
       return response.json();
    })
    
    .then(json =>{
        mesta=json;
    })
    
    .catch(function(error){
       console.error('Chyba: \n', error);
    });


    let lastfill = $("svg").attr('fill');
    $("path").on('click', function(){ 
        if(lastfill == 'rgb(255, 255, 0)') { 
            $(this).css({'fill':'yellow'}); 
            lastfill = "#CCCCCC"; 
        } else {
            $("path").css('fill', $("svg").attr('fill')); 
            $(this).css({'fill':'yellow'}); 
            lastfill = "rgb(255, 255, 0)"; 
            $("h1").html($(this).attr('name')); 
        } 



        let id = $(this).attr("id");
        let mesto = mesta.find(item => {return item.id === id});
        console.log(mesta);
        $("#mesto").slideUp(500, function(){$("#mesto").html(`
        
        <h3>${mesto.id}</h3> 
        <p>${mesto.text}</p>

        `)})



    });
    $("path").on('mouseover', function(){ 
        lastfill = $(this).css('fill');
        if(lastfill == 'rgb(255, 255, 0)') { 
            $(this).css({'fill':'rgb(120, 110, 0)'}); 
        } else {
            $(this).css({'fill':'grey'}); 
        }
    });
    $("path").on('mouseout', function(){ 
        $(this).css({'fill':lastfill});
    });

 


});