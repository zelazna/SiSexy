$(document).ready(function () {

    // Script du menu / carroussel

    $('.owl-carousel').owlCarousel({
        loop: true,
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

    // Modales
    //@todo voir pour le 3eme boutton
    var button = $('.button');
    var content = $('.button__content');
    var win = $(window);

    var expand = function () {
        if (button.hasClass('button--active')) {
            return false;
        } else {
            var W = win.width();
            var xc = W / 2;

            var that = $(this);
            var thatWidth = that.innerWidth() / 2;
            var thatOffset = that.offset();
            var thatIndex = that.index();
            var other;

            if (!that.next().is('.button')) {
                other = that.prev();
            } else {
                other = that.next();
            }

            var otherWidth = other.innerWidth() / 2;
            var otherOffset = other.offset();

            // content box stuff
            var thatContent = $('.button__content').eq(thatIndex);
            var thatContentW = thatContent.innerWidth();
            var thatContentH = thatContent.innerHeight();

            // transform values for button
            var thatTransX = xc - thatOffset.left - thatWidth;
            var otherTransX = xc - otherOffset.left - otherWidth;
            var thatScaleX = thatContentW / that.innerWidth();
            var thatScaleY = thatContentH / that.innerHeight();

            that.css({
                'z-index': '2',
                'transform': 'translateX(' + thatTransX + 'px)'
            });

            other.css({
                'z-index': '0',
                'opacity': '0',
                'transition-delay': '0.05s',
                'transform': 'translateX(' + otherTransX + 'px)'
            });

            that.on('transitionend webkitTransitionEnd', function () {
                that.css({
                    'transform': 'translateX(' + thatTransX + 'px) scale(' + thatScaleX + ',' + thatScaleY + ')',
                });

                that.addClass('button--active');
                thatContent.addClass('button__content--active');
                thatContent.css('transition', 'all 1s 0.1s cubic-bezier(0.23, 1, 0.32, 1)');
                that.off('transitionend webkitTransitionEnd');
            });

            return false;
        }
    };

    var hide = function (e) {
        var target = $(e.target);
        if (target.is(content)) {
            return;
        } else {
            button.removeAttr('style').removeClass('button--active');
            content.removeClass('button__content--active').css('transition', 'all 0.2s 0 cubic-bezier(0.23, 1, 0.32, 1)');
        }
    };

    var bindActions = function () {
        button.on('click', expand);
        win.on('click', hide);
    };

    var init = function () {
        bindActions();
    };

    init();
});


