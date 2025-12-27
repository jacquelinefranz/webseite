export interface HeroContent {
  headline: string;
  tagline: string;
  primaryCTA: {
    text: string;
    url: string;
  };
  secondaryCTA: {
    text: string;
    url: string;
  };
}

export interface HeroVariants {
  playful: HeroContent;
  editorial: HeroContent;
  minimal: HeroContent;
}

export const heroData: HeroVariants = {
  playful: {
    headline: 'Von der Werkstatt ins Produktteam',
    tagline: 'Ich verbinde systematisches Denken aus der Mechanik mit User-zentriertem Design. Als Product Owner bei microtech bringe ich Struktur, Klarheit und visuelle Kommunikation zusammen.',
    primaryCTA: {
      text: 'Meine Journey',
      url: '#journey'
    },
    secondaryCTA: {
      text: 'Kontakt',
      url: '#contact'
    }
  },
  editorial: {
    headline: 'Systeme verstehen. Produkte gestalten.',
    tagline: 'Mein Weg führte von der KFZ-Werkstatt über digitales Design zum Product Management. Heute verbinde ich analytisches Denken mit kreativer Problemlösung.',
    primaryCTA: {
      text: 'Mehr erfahren',
      url: '#journey'
    },
    secondaryCTA: {
      text: 'Schreib mir',
      url: '#contact'
    }
  },
  minimal: {
    headline: 'Product Owner & UX Designer',
    tagline: 'Ich entwickle digitale Produkte mit Fokus auf Nutzerzentrierung und visuelle Klarheit. Mein Background in Mechanik prägt meinen systematischen Ansatz.',
    primaryCTA: {
      text: 'Journey ansehen',
      url: '#journey'
    },
    secondaryCTA: {
      text: 'Kontakt aufnehmen',
      url: '#contact'
    }
  }
};
