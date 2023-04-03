alert("Bievenue sur le site d'Esthebann Vollé")

/* NAVBAR*/
let lastScrollTop = 0; /* énnonce variable lastScrollTop */
navbar = document.getElementById('navbar'); /* chercher l'élément navbar en html*/

window.addEventListener('scroll', function(){
  const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {  
    navbar.style.top="-50px"; /* Si scrollTop est supérieur à lastScrollTop alors la navbar remonte de -50 px */
  } else {
    navbar.style.top="0"; /* Si c'est faux navbar style revient à sa place normale */
  }
  lastScrollTop = scrollTop; /* lastScrollTop donne sa valeur à ScrollTop*/

});

/*TYPED*/
var typed = new Typed('.typed', { /*  on crée une variable typed , new typed raméne à la bibliotheque typed , .typed permet de lui dire ou il va mettre son texte */
  strings: ["Bonjour à tous et à toutes, je me présente je m'appelle Esthebann", "Après une année en Sti2d m'ayant fait découvrir plusieurs voies professionnelles différentes. J'ai décidé de me lancer à fond dans l'apprentissage de la programmation, depuis près de 1 an je me forme afin de devenir développeur. Je me suis découvert une passion, celle de coder."], /* string indique qu'il a une chaine de caractère ( chauqe virgule indique que le texte doit revenir en arrière */
  typeSpeed: 20,             /* vitesse d'écriture de 20*/
});
  
/* COMPTEUR LIVE*/
let compteur = 0;                       /* déclare variable compteur ,initialise compteur à 0*/

$(window).scroll(function() {           /*lance la fonction scroll*/

  const top = $('.counter').offset().top - window.innerHeight;     /*déclare variable top*/

  if (compteur == 0 && $(window).scrollTop() > top) {             /* conteur se lance si compteur est à 0 et que scrolltop est supérieur à top*/
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');        /*  countTo doit compter jusqu'a data_count qui est dans le html */
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo /*countNum doit monter jusqu'à countTO*/
      },
      {
        duration: 10000, /* durée de 10 secondes*/
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));  /* countNum monte de 1 en 1 */
        },
        complete: function() { 
          $this.text(this.countNum); /*affiche countNum*/
        }
      });
    });
    compteur = 1; /* pour pas que la fonction compteur ne se relance*/
  }
});

//AOS
AOS.init();