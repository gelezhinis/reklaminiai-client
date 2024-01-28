export const links = [
  {
    name: 'Produktai',
    submenu: true,
    sublinks: [
      {
        name: 'Spaudos Darbai',
        sublink: [
          { name: 'Lankstinukai', link: '/produktai/spauda/lankstinukai'},
          { name: 'Skrajutės', link: '/produktai/spauda/skrajutes' },
          { name: 'Plakatai', link: '/produktai/spauda/plakatai' },
          { name: 'Brošiūros', link: '/produktai/spauda/brosiuros' },
          { name: 'Bloknotai', link: '/produktai/spauda/bloknotai' },
          { name: 'Kortelės', link: '/produktai/spauda/korteles' },
        ],
        path: '/produktai/spauda',
        imageUrl: '/img/categories/print.jpg'
      },
      {
        name: 'Rašymo Priemonės',
        sublink: [
          {
            name: 'Metaliniai',
            link: '/produktai/rasymo_priemones/metaliniai',
          },
          {
            name: 'Plastikiniai',
            link: '/produktai/rasymo_priemones/plastikiniai',
          },
          { name: 'EKO', link: '/produktai/rasymo_priemones/eko' },
          {
            name: 'Komplektai',
            link: '/produktai/rasymo_priemones/komplektai',
          },
          { name: 'Pieštukai', link: '/produktai/rasymo_priemones/piestukai' },
        ],
        path: '/produktai/rasymo_priemones',
        imageUrl: '/img/categories/writing.jpg'
      },
      {
        name: 'Apranga',
        sublink: [
          { name: 'Marškinėliai', link: '/produktai/apranga/marskineliai' },
          { name: 'Džemperiai', link: '/produktai/apranga/dzemperiai' },
          { name: 'Kepurės', link: '/produktai/apranga/kepures' },
        ],
        path: '/produktai/apranga',
        imageUrl: '/img/categories/outfit.jpg'
      },

      {
        name: 'Vėliavos',
        sublink: [
          {
            name: 'Reklaminės Vėliavos',
            link: '/produktai/veliavos/reklamines',
          },
          { name: 'Pagrindai', link: '/produktai/veliavos/pagrindai' },
          { name: 'Vėliavos', link: '/produktai/veliavos/veliavos' },
        ],
        path: '/produktai/veliavos',
        imageUrl: '/img/categories/flags.jpg'
      },
      {
        name: 'Puodeliai',
        sublink: [
          { name: 'Keramikiniai', link: '/produktai/puodeliai/keramikiniai' },
          { name: 'Termo', link: '/produktai/puodeliai/termo' },
          { name: 'Gertuvės', link: '/produktai/puodeliai/gertuves' },
        ],
        path: '/produktai/puodeliai',
        imageUrl: '/img/categories/mugs.jpg'
      },
      {
        name: 'Juostelės',
        sublink: [
          { name: 'Kaklajuostės', link: '/produktai/juosteles/kaklajuostes' },
          { name: 'Pakabukai', link: '/produktai/juosteles/pakabukai' },
          { name: 'Apyrankės', link: '/produktai/juosteles/apyrankes' },
        ],
        path: '/produktai/juosteles',
        imageUrl: '/img/categories/bracelets.jpg'
      },
      {
        name: 'Krepšiai',
        sublink: [
          { name: 'Medžiaginiai', link: '/produktai/juosteles/kaklajuostes' },
          { name: 'Popieriniai', link: '/produktai/juosteles/pakabukai' },
          { name: 'Kuprinės', link: '/produktai/juosteles/apyrankes' },
        ],
        path: '/produktai/krepsiai',
        imageUrl: '/img/categories/bags.jpg'
      },
    ],
  },
];

export const linksWithoutSubs = [
  {
    name: 'Atšvaitai',
    path: '/produktai/atsvaitai',
    imageUrl: '/img/categories/reflectors.jpg'
  },
  {
    name: 'Kurjeriniai Vokai',
    path: '/produktai/vokai',
    imageUrl: '/img/categories/envelops.jpg'
  },
  {
    name: 'Užrašinės',
    path: '/produktai/uzrasines',
    imageUrl: '/img/categories/notebooks.jpg'
  },
  {
    name: 'Tekstiniai Stendai',
    path: '/produktai/stendai',
    imageUrl: '/img/categories/stands.jpg'
  },
  {
    name: 'Kiti',
    path: '/produktai/kiti',
    imageUrl: '/img/categories/other.jpg'
  },
];
