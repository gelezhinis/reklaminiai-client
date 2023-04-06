export const links = [
  {
    name: 'Produktai',
    submenu: true,
    sublinks: [
      {
        name: 'Spaudos Darbai',
        sublink: [
          { name: 'Lankstinukai', link: '/produktai/spauda/lankstinukai' },
          { name: 'Skrajutės', link: '/produktai/spauda/skrajutes' },
          { name: 'Plakatai', link: '/produktai/spauda/plakatai' },
          { name: 'Brošiūros', link: '/produktai/spauda/brosiuros' },
          { name: 'Bloknotai', link: '/produktai/spauda/bloknotai' },
          { name: 'Kortelės', link: '/produktai/spauda/korteles' },
        ],
        path: '/produktai/spauda'
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
        path: '/produktai/rasymo_priemones'
      },
      {
        name: 'Apranga',
        sublink: [
          { name: 'Marškinėliai', link: '/produktai/apranga/marskineliai' },
          { name: 'Džemperiai', link: '/produktai/apranga/dzemperiai' },
          { name: 'Kepurės', link: '/produktai/apranga/kepures' },
        ],
        path: '/produktai/apranga'
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
        path: '/produktai/veliavos'
      },
      {
        name: 'Puodeliai',
        sublink: [
          { name: 'Keramikiniai', link: '/produktai/puodeliai/keramikiniai' },
          { name: 'Termo', link: '/produktai/puodeliai/termo' },
          { name: 'Gertuvės', link: '/produktai/puodeliai/gertuves' },
        ],
        path: '/produktai/puodeliai'
      },
      {
        name: 'Juostelės',
        sublink: [
          { name: 'Kaklajuostės', link: '/produktai/juosteles/kaklajuostes' },
          { name: 'Pakabukai', link: '/produktai/juosteles/pakabukai' },
          { name: 'Apyrankės', link: '/produktai/juosteles/apyrankes' },
        ],
        path: '/produktai/juosteles'
      },
      {
        name: 'Krepšiai',
        sublink: [
          { name: 'Medžiaginiai', link: '/produktai/juosteles/kaklajuostes' },
          { name: 'Popieriniai', link: '/produktai/juosteles/pakabukai' },
          { name: 'Kuprinės', link: '/produktai/juosteles/apyrankes' },
        ],
        path: '/produktai/krepsiai'
      },
    ],
  },
];

export const linksWithoutSubs = [
  {
    name: 'Atšvaitai',
    path: '/produktai/atsvaitai',
  },
  {
    name: 'Kurjeriniai Vokai',
    path: '/produktai/vokai',
  },
  {
    name: 'Užrašinės',
    path: '/produktai/uzrasines',
  },
  {
    name: 'Tekstiniai Stendai',
    path: '/produktai/stendai',
  },
  {
    name: 'Kiti',
    path: '/produktai/kiti',
  },
];
