$(document).ready(function () {

    // Script du menu / carroussel

    $('.owl-carousel').owlCarousel({
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 4
            },
            1000: {
                items: 8
            }
        }
    });

    //autocompletion JQUERY UI

    var availableTags = [
        'ABS',
        'abs',
        'accélérateur',
        'accessoire',
        'accroche',
        'accumulateur',
        'admission',
        'aile',
        'ailette',
        'airbag',
        'alimentation',
        'allumage',
        'allume-cigare',
        'allumeur',
        'alternateur',
        'amortisseur',
        'ampoule',
        'antenne',
        'anti-vol',
        'antiblocage de sécurité',
        'antibrouillard',
        'antidémarrage',
        'antidémarreur',
        'antigel',
        'antipatinage',
        'antiplongée',
        'antivol',
        'arbre à cames',
        'autoradio',
        'banquette',
        'baquet',
        'batterie',
        'bielle',
        'biellette',
        'bloc-cylindres',
        'bloc-moteur',
        'bobine d’allumage',
        'boîte à gants',
        'boîte automatique',
        'boite de vitesse',
        'boîte de vitesse automatique',
        'boite de vitesse manuelle',
        'bougie',
        'bougie d’allumage',
        'bougie de préchauffage',
        'calandre',
        'capot',
        'capote',
        'carburateur',
        'cardan',
        'carrosserie',
        'carter',
        'chaîne',
        'chambre à air',
        'châssis',
        'clé à bougies',
        'clé de contact',
        'clignotant',
        'climatisation',
        'compte-tour',
        'compteur de vitesse',
        'courroie de transmission',
        'coussinet',
        'crémaillère',
        'cric',
        'culasse',
        'culbuteur',
        'déflecteur',
        'dégivrage',
        'démonte-pneu',
        'différentiel',
        'direction',
        'dispositif antidémarrage',
        'disque',
        'embrayage',
        'enjoliveur',
        'essieu',
        'essieu arrière',
        'essieu avant',
        'essuie-glace',
        'essuie-phare',
        'feu',
        'filtre',
        'frein',
        'frein à main',
        'hayon',
        'immatriculation',
        'injecteur',
        'jante',
        'joint',
        'joint de culasse',
        'joint torique',
        'jupe avant',
        'lave-glace',
        'lève-vitre',
        'levier de vitesse',
        'marchepied',
        'pare-brise',
        'pare-choc',
        'parebrise',
        'pédale',
        'phare',
        'pignon',
        'piston',
        'plaque d’immatriculation',
        'pneu',
        'pompe à eau',
        'pompe à huile',
        'pompe auxiliaire',
        'portière',
        'pot catalytique',
        'pot d’échappement',
        'radiateur',
        'rétroviseur',
        'rotule',
        'roue',
        'roue de secours',
        'siège',
        'siège arrière',
        'siège avant',
        'soupape d’admission',
        'soupape d’échappement',
        'transmission',
        'transmission automatique',
        'transmission manuelle',
        'turbo',
        'turbo-compresseur',
        'turbocompresseur',
        'valve',
        'vidange',
        'vilebrequin',
        'virage',
        'volant'
    ];
    $("#tags").autocomplete({
        source: availableTags,
        autoFocus: true,
        minLength: 2
    });

    // Effect Ripple sur les bouttons

    $(".button").mouseenter(function (e) {
        e.preventDefault();
        $(this).children(".ripple").remove();
            $(this).append("<div class=\"ripple\"</div>");
    })
});






