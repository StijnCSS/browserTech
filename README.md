# Belasting formulier in de stijl van de NS
## Week 1
# Woensdag 
Ik heb samen met Chris, Jamie en Jamie onderzoek gedaan naar content blockers
# Donderdag
Ik ben begonnen met mijn CSS op orde zodat ik dat niet hoef te doen de komende weken. lekker de :root ingesteld en me verdiept in form styling voor CSS
## Week 2 
# Woensdag
# Workshop Forms Krijn
Forms Labels Legends Progressbars Output Pattern atribute
[codepen met workshop Krijn](https://codepen.io/stijn_ux/pen/MYWmpxm)

### functionaliteiten
## Stijl van de NS 
Ik heb een lijst variabelen overgenomen van de NS website om zo dicht mogelijk bij de stijl te blijven. Ik heb ervoor gekozen om het formulier clean te houden omdat het een belangrijk formulier is dat alle aandacht kan gebruiken. Ik wil niet dat de gebruiken afgeleid raakt.  

## CSS Validatie

# Valid
`fieldset:valid + fieldset ` Ik gebruik deze selector om fieldsets te hiden. Wanneer de fieldset valid is wordt de next fieldset van opacity 0 naar opacity 1 gebracht.  
`form:valid input[type=submit]` Submit knop wordt pas zichtbaar wanneer de hele form valid is.  
`input:user-valid & invalid` er is veel visuele feedback dat de gebruiker krijgt dat voornamelijk positief is tenzij dat niet mogelijk is. Ik heb de outline 4px gemaakt zodat mensen met slecht zicht het verschil zien. Als ik het veerder zou moeten uitwerken zou ik ook checks en crosses toevoegen zodat een persoon die kleurenblind is ook het verschil kan zien.  

## JS Validatie
# Radio button event listener
Div's kunnen niet zoals fieldsets `:valid` zijn. Ik heb daarom Javascript validatie dat kijkt welke keuze getoggled is en veranderd de `display` value van bepaalde id's  

# Clean labels door JS
In het formulier staan dingen zoals `nee. ga naar ...` met een digitaal formulier is dit niet nodig dus ik heb die onderdelen van de label in een span gezet en dezet op display none gezet wanneer JS ingeladen wordt
# Date picker
Ik heb Javascript dat ervoor zorgt dat de gebruiker niet iets in de toekomst kan selecteren.  


## User Experience

# Responsive
Mijn formulier is responsive en is altijd goed leesbaar. Ik heb de max-width van mijn form op 800 px gezet excl padding etc.  
Ik heb gekeken naar de breedte van mijn input fields om ze te matchen met de content dat erin moet komen. 
# Popover
Ik gebruik een `popover` voor moeilijke termen zoals Burgerservicenummer. Als iemand de term niet kent dan wordt er meer informatie via een popover verschaft
# Radio buttons
Ik heb de radio buttons een grote touch area gegeven dat klikt prettig en voorkomt fouten
# Local storage
Ik heb gekozen voor local storage omdat Localstorage de data vasthoudt ook als je de browser hebt afgesloten. Voor een formulier van 40+ pagina's wil je voorkomen dat je halverwege overnieuw moet beginnen. Het nadeel van Local storage is dat er een limiet zit op de opslag maar dat is voor een form prima.  
# Progress bar
Ik wil graag een progress bar die bijhoudt hoeveel inputs valid en ingevuld zijn progressie toeveogd. Dit is te complex voor mij dus heb ik er een gemaakt die doormiddel vna scroll progressie toevoegd. Fake it till you make it :)  
# bedankt scherm
Als het formulier ingevuld is krijgt de gebruiker een duidelijke conclusie krijgt te zien.

### Bronnen