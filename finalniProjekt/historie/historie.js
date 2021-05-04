const events = [
    {
        "year": "492",
        "event": "Nájezdy Gódů",
        "detail": "Léta páně 492 se objevila flotila Gódských lodí na břehu Jemenu, po vylodění a vyplenění několika vesnic odtáhly dál, protože jak by Godo řekl: 𐌲𐌿𐍄𐌰𐍂𐌰𐌶𐌳𐌰.",
        

    },
    {
        "year": "567",
        "event": "Výbuch atomové bomby v Adenu",
        "detail": "Obsazení Adenu léta páně 567 Omanskými teroristy vyhustilo v revoluci zažehnanou Franckými atomovými bombami, pomocí kterých byli revolucionáři pobiti.",
        

    },
    {
        "year": "914",
        "event": "Úmrtí Ahmud von Guzman",
        "detail": "Léta páně 914 v důsledku celozemního hladomoru zahynul Ahmud von Guzman, prorok hlásící víru ciscenského islámu.",
        

    },
    {
        "year": "1121",
        "event": "Příchod Saraama Uslámi do Jemenu",
        "detail": "Saraam Uslámi přináší do Jemenu nový farmářský systém. Packet, tedy semínko bylo položeno do do moře, nýbrž do hlíny.",
        
 
    },
    {
        "year": "1492",
        "event": "Příchod nových zítřků",
        "detail": "Loď pinta, z expedice Kryštofa Kolumba ztroskotala na břehu Jemenu, posádka byla bohužel důsledku 160 letého hladomoru sežrána i s kostma, ale dřevo se využilo jako zbraň, proti nadvládě Cisenského islámu.",
        

    },
    {
        "year": "2008",
        "event": "Internetový zákon",
        "detail": "Laaham von Guzman unstanovil zákon. Každý uživatel internetu nad 13 let musí platit desátek Ciscenskému klášteru, ve jménu dobrého oběda.",
        

    },
];


const heroes = [
    {
        "name": "Karib'il Watar.",
        "birth": "Neznámo",
        "death": "7 století před kristem",
        "biography": "Nejdůležitější vládce prvních let Sábského království. Také považován za tvůrce království, protože změnil název vůdce z Mukarriba na krále. Za jeho vlády bylo učiněno mnoho válečných tažení, táhnoucí až na jih rudého moře. ",
        "portraits": [
           
        ],
     
    },

 
    {
        "name": "Al-Aswad Al-Ansi",
        "birth": "6 století",
        "death": "632 n.l.",
        "biography": "''Jeho oči jsou rudé, internet pomalý a nebojí se prodat routr.'' To lidé říkali o Aswad Ansovi, prvnímu vizionáři Ciscenského islámu, ztělesněného tracera na zemi.",
        "portraits": [
            
        ],
  
    },


    {
        "name": "Abd Rabú Mansúr Hádí",
        "birth": "1.9 1945",
        "death": "Ještě ne",
        "biography": "Prezident Jemenu, Thúkajn v procinvii Abjan, Adenský protektor a představitel strany Všeobecný lidový kongres. V letech 1994-2012 byl viceprezident, ale po odstoupení jeho předchůdce Alího Abdalláha Sáliha, který v důsledku zranění během jemenské revoluce skončil v hrobě, se stal s 99,8% hlasy prezidentem.",
        "portraits": [
            
        ],
       
    },


];




$(function () {
    $("h2").on("click", function () {
        $(this).parents(".row").next().toggle(1000);
    });
    events.forEach((event) => {
        $("#udalosti table").append(`<tr>
            <td class="event-year">${event.year}</td>
            <td>
              <p class="event-name"><i class="fas fa-chevron-down"></i> <a href="${event.url}" target="_new">${event.event}</a></p>
              <p class="event-detail">${event.detail}</p>
            </td>            
            
        </tr>`);
    });
    $(".event-detail").hide();
    $(".event-name i, .event-name a").on("mouseover", function () {
        $("#udalosti tr").removeClass("bg-secondary text-white");
        $(this).parents("tr").addClass("bg-secondary text-white");
        $(".event-detail").hide();
        $(this).parent().next().show(500);
    });
    heroes.forEach((hero) => {
        $("#postavy .list-group").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
    });
    function fillPersonCard(person) {
        let hero = heroes.find(item => { return item.name === person });
        $(".card-header").html(`<i class="fas fa-star-of-life"></i> <b>${hero.birth}</b> - <i class="fas fa-cross"></i> <b>${hero.death}</b>`);
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html;
        $(".gallery").empty();
        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="images/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);
        }
    }


    $("#postavy li:first").addClass('active');

    fillPersonCard(heroes[0].name);


    $("#postavy li").on("click", function () {

        $("#postavy li").removeClass("active");

        $(this).addClass("active");

        let person = $(this).text();

        $("#portret").slideUp(1000, function () {

            fillPersonCard(person);
        });

        $("#portret").slideDown(1000);
    });


    articles.forEach((article) => {
        $("#zpravodaj").append(`    
        <div class="col-sm-6 mt-3 pb-3 border-bottom">
          <article>
            <figure>
              <img src="images/${article.gallery[0]}" alt="${article.title}" class="img-fluid">
            </figure>
            <h3>${article.title}</h3>
            <div class="article-text">
                <p>${article.text}</p>
                <p><a href="${article.source}" target="_new">Celý článek</a></p>
            </div>
            <div class="article-footer">Autor: ${article.author} 
            <button type="button" class="btn btn-success likes"><i class="fas fa-thumbs-up"></i> <span class="badge badge-light">${article.likes}</span></button>
            <button type="button" class="btn btn-danger dislikes"><i class="fas fa-thumbs-down"></i> <span class="badge badge-light">${article.dislikes}</span></button>
            </div>
          </article>
        </div>        
    `);
    });


    $(".article-text").hide();


    $("#zpravodaj h3").on("click", function () {
        $(this).next(".article-text").toggle();
    });


    $(".likes").on("click", function () {

        let likes = parseInt($(this).find("span").text());

        $(this).find("span").text(likes + 1);
    });

    $(".dislikes").on("click", function () {
        let dislikes = parseInt($(this).find("span").text());
        $(this).find("span").text(dislikes + 1);
    });


    let timer = 0;
    window.setInterval(() => {
        timer++;
        $("article figure img").each(function (index, value) {
            $(value)
                .fadeOut(500, function () { $(value).attr("src", "images/" + articles[index].gallery[timer % articles[index].gallery.length]) })
                .fadeIn(500);
        });
    }, 5000);
})