import type { CampsiteConfig } from "../types";

const IMG = "/campsites/oelspur-camping";

const oelspurCamping: CampsiteConfig = {
  name: "Steirisches Ölspur Camping",
  shortName: "Ölspur",
  slug: "oelspur-camping",
  ort: "Eibiswald",
  region: "Südweststeiermark",
  brandKind: "Camping",
  regionLong: "Schilcherland · Südweststeiermark · Österreich",

  heroVariant: "center",

  claim: "Dein Stellplatz mitten in den Isabella-Reben",
  claimEmphasis: "Isabella-Reben",
  emailDetail: "die Lage eingebettet in eure Isabella-Weinstöcke",
  intro:
    "Seit 2013 führt Familie Moser ihren selbst erbauten Platz in Eibiswald persönlich — klein, aber fein: 49 Stellplätze zwischen Reben, zwei Sanitärhäuser aus Holz und das beheizte Erlebnisbad gleich nebenan. Hier kommst du an.",

  statement: {
    text: "Eingekesselt von Isabella-Weinstöcken stehen 10.000 m² Wiese und Split für 49 Stellplätze bereit.",
    emphasis: "Isabella-Weinstöcken",
  },

  pillars: [
    {
      title: "Mitten in den Reben",
      text: "Dein Platz liegt eingebettet zwischen Isabella-Weinstöcken — ein von Familienhand geführtes „Kraftplatzerl“ zum Durchatmen.",
      image: { src: `${IMG}/platz-pavillon.webp`, alt: "Stellplätze zwischen Reben am Ölspur Camping im Abendlicht" },
    },
    {
      title: "Familie Moser, seit 2013",
      text: "Den Platz hat die Familie selbst erbaut und führt ihn persönlich — jeder Gast bekommt zur Begrüßung das Ölspur-Sackerl.",
      image: { src: `${IMG}/rezeption.webp`, alt: "Persönliche Beratung am Ölspur Camping zwischen den Isabella-Reben" },
    },
    {
      title: "Erlebnisbad nebenan",
      text: "Direkt angrenzend liegt das beheizte Erlebnisbad der Marktgemeinde — über einen eigenen Eingang vom Platz erreichbar.",
      image: { src: `${IMG}/erlebnisbad-luft.webp`, alt: "Luftaufnahme des Erlebnisbads Eibiswald neben dem Campingplatz" },
    },
  ],

  usps: [
    "49 Stellplätze mit Strom",
    "Erlebnisbad nebenan",
    "Zwei Holz-Sanitärhäuser",
    "Kostenloses WLAN",
    "Pumptrack & Dirtpark",
    "Hunde willkommen",
  ],

  trust: {
    heading: "Weststeirisches Lebensgefühl, gleich beim Vorzelt",
    headingEmphasis: "Weststeirisches Lebensgefühl",
    intro:
      "Selbst erbaut, von Familienhand geführt und nachhaltig mit Solar und Nahwärme versorgt — dazu Schilcher, Kürbiskernöl und 40 Rad-Panoramatouren direkt vor der Tür. Hier zählt das Echte.",
  },

  awards: [
    {
      label: "Beyond Camping — Top Campingplätze 2023",
      image: { src: `${IMG}/award-beyond-camping-2023.png`, alt: "Auszeichnung Beyond Camping Top Campingplätze 2023" },
    },
  ],

  hero: {
    aerial: { src: `${IMG}/hero-abend.webp`, alt: "Mobilheim ENZO im Abendlicht am Ölspur Camping in Eibiswald" },
  },

  breather: {
    image: { src: `${IMG}/panorama.webp`, alt: "Blick über die Südweststeiermark von einer Rad-Panoramatour" },
    line: "Fast 300 Sonnentage über der Südweststeiermark.",
  },

  camping: {
    heading: "Klein, aber fein in Eibiswald",
    intro:
      "10.000 m² Wiese und Split, 49 parzellierte Stellplätze von ca. 80–120 m² und zwei aus heimischem Holz gebaute Sanitärhäuser — alles, was entspanntes Campen braucht.",
    features: [
      {
        title: "Stellplätze mit Strom",
        text: "49 parzellierte Plätze mit eigenem Stromkasten (bis 16 Ampere) und Wasserstellen in Trinkwasserqualität — abends sanft beleuchtet.",
        image: { src: `${IMG}/stellplaetze-abend.webp`, alt: "Beleuchtete Stellplätze am Ölspur Camping bei Nacht" },
      },
      {
        title: "Modernes Sanitärhaus",
        text: "Zwei Holzgebäude, eines mit Fußbodenheizung, beide mit getrennten Duschräumen und großen Waschbecken — gepflegt und hell.",
        image: { src: `${IMG}/sanitaer.webp`, alt: "Modernes Waschraum-Innere im Sanitärgebäude" },
      },
      {
        title: "Waschen & Trocknen",
        text: "Im Eingangsbereich stehen Waschmaschine und Trockner zur eigenen, gebührenpflichtigen Nutzung bereit.",
        image: { src: `${IMG}/waschkueche.webp`, alt: "Waschmaschine und Trockner im Sanitärgebäude" },
      },
      {
        title: "Frischwasser & Spülen",
        text: "Mehrere Wasserstellen in höchster Trinkwasserqualität und große Spülbecken mit Tropftasse für Geschirr und Töpfe.",
        image: { src: `${IMG}/frischwasser.webp`, alt: "Spülbecken mit Frischwasser im Sanitärgebäude" },
      },
      {
        title: "Empfang & Sackerl",
        text: "Im Rezeptionsgebäude gibt es Infos, kostenloses WLAN und für jeden Gast das Ölspur-Camping Sackerl zur Begrüßung.",
        image: { src: `${IMG}/empfang.webp`, alt: "Hölzernes Empfangsgebäude mit Willkommens-Schild" },
      },
      {
        title: "Pavillon für laue Abende",
        text: "Im hinteren Bereich lädt ein Pavillon zum gemütlichen Beisammensein ein — besonders beliebt bei Campern mit Zelt.",
        image: { src: `${IMG}/pavillon-abend.webp`, alt: "Beleuchteter Pavillon am Campingplatz in der Abenddämmerung" },
      },
    ],
  },

  mobilheime: {
    heading: "Lieber ein festes Dach? ENZO.",
    intro:
      "Du willst nicht im Zelt schlafen? Das moderne Mobilheim „ENZO“ bietet Platz für vier — mit Wohnküche, Schlafzimmer und einem Kinderzimmer mit Stockbett.",
    items: [
      {
        name: "Mobilheim ENZO",
        kind: "Mobilheim für bis zu 4 Personen",
        text: "Terrasse, Wohnküche, Schlafzimmer mit Ehebett und Kinderzimmer mit Stockbett — TV, WLAN, Klimaanlage. Keine Haustiere.",
        image: { src: `${IMG}/mobilheim-enzo.webp`, alt: "Modernes Mobilheim ENZO aus Holz mit Terrasse im Abendlicht" },
        priceFrom: 119,
        features: ["Bis 4 Personen", "Eigene Terrasse", "TV, WLAN & Klimaanlage", "Buchbar ab 15. April"],
      },
    ],
  },

  kinder: {
    heading: "Pumptrack, Bikepark, Badespaß",
    intro:
      "Direkt nebenan: das beheizte Erlebnisbad mit langer Rutsche, der kostenlose 3Eiben-Pumptrack und der Kids Bike-Park im Bürgerwald — Langeweile ist hier ein Fremdwort.",
    features: [
      {
        title: "Erlebnisbad mit Rutsche",
        text: "60 Meter lange Wasserrutsche, Strömungskanal, Kinderbecken und ein großer Spielplatz — beheizt von Mitte Mai bis Mitte September.",
        image: { src: `${IMG}/erlebnisbad-rutsche.webp`, alt: "Erlebnisbad Eibiswald mit Wasserrutsche und Badegästen" },
      },
      {
        title: "3Eiben-Pumptrack",
        text: "Auf rund 2.000 m² warten Wellen, Anliegerkurven und Sprünge — kostenlos und gleich neben dem Campingplatz.",
        image: { src: `${IMG}/pumptrack.webp`, alt: "Kinder mit Rädern am 3Eiben-Pumptrack in Eibiswald" },
      },
      {
        title: "Kids Bike-Park",
        text: "Im Bürgerwald rollen kleine Biker über Flowtrails und einen Technik-Parcours — täglich kostenlos zugänglich.",
        image: { src: `${IMG}/kids-bikepark.webp`, alt: "Kinder fahren im Kids Bike-Park durch den Wald" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Vom Platz direkt in die Touren",
    intro:
      "40 Rad-Panoramatouren, beschilderte Themenwege bis nach Slowenien und der Generationenpark — die Südweststeiermark beginnt direkt am Vorzelt.",
    items: [
      {
        title: "40 Rad-Panoramatouren",
        text: "Nahezu 40 Panoramatouren, von denen einige bis ins Nachbarland Slowenien führen — bei mildem Klima fast das ganze Jahr fahrbar.",
        image: { src: `${IMG}/radtouren.webp`, alt: "Zwei Mountainbiker auf einer Panoramatour im Abendlicht" },
      },
      {
        title: "Wandern & Themenwege",
        text: "Wein-, Alm- und Literaturwandern oder mehrtägige Touren wie der Koralmkristalltrail — Eibiswald ist der ideale Ausgangspunkt.",
        image: { src: `${IMG}/themenwege.webp`, alt: "Themenweg-Schild des Schilcherlands im Wald" },
      },
      {
        title: "Generationenpark",
        text: "Ninja Warrior Park, Calisthenics-Geräte, Naschgarten und Wasserspiele — Bewegung für Jung und Alt, direkt neben dem Platz.",
        image: { src: `${IMG}/generationenpark.webp`, alt: "Ninja-Warrior-Geräte im Generationenpark Eibiswald" },
      },
      {
        title: "Einkehr unterwegs",
        text: "Almwirtschaften, Buschenschänke und Gasthöfe mit Schilcher und Kürbiskernöl liegen auf vielen Touren am Weg.",
        image: { src: `${IMG}/almhuette.webp`, alt: "Almhütte mit Blumenschmuck entlang einer Tour" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Eibiswald",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Von Graz über die A2 Richtung Süden, dann via Deutschlandsberg nach Eibiswald — der Platz liegt am Ortsrand, direkt neben dem Erlebnisbad.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Deutschlandsberg, von dort weiter mit dem Regionalbus nach Eibiswald — Feinheiten gern an der Rezeption erfragen.",
      },
      {
        title: "Zu Fuß im Ort",
        text: "Vom Campingplatz sind es rund 5 Gehminuten zum Marktplatz mit Einkaufsmöglichkeiten und einem Discounter mit Gasflaschen-Service.",
      },
    ],
  },

  galerie: {
    heading: "Sommer zwischen Reben und Rädern",
    headingEmphasis: "Reben und Rädern",
    intro:
      "Von der ersten Tasse Kaffee im Pavillon bis zur Abendrunde am Pumptrack — ein paar Eindrücke vom Platz und seinen Menschen.",
    tag: "Saison ab 13. April",
    moreCount: 24,
    images: [
      { src: `${IMG}/einfahrt-abend.webp`, alt: "Einfahrt zum Ölspur Camping mit Leihrädern im Abendlicht" },
      { src: `${IMG}/familie-zelt.webp`, alt: "Mehrere Generationen am Ölspur Camping mit Rädern und Golfcart" },
      { src: `${IMG}/bikegruppe.webp`, alt: "Mountainbike-Gruppe an der Einfahrt des Ölspur Camping" },
      { src: `${IMG}/sanitaer-abend.webp`, alt: "Beleuchtetes Holz-Sanitärgebäude mit Kräutertöpfen am Abend" },
    ],
  },

  booking: {
    heading: "Sicher dir deinen Platz zwischen den Reben",
    headingEmphasis: "zwischen den Reben",
    intro:
      "Wähle Zeitraum und Personen — Familie Moser meldet sich persönlich mit deiner Verfügbarkeit. Eine Reservierung über die ganze Saison wird empfohlen.",
    pricesArePlaceholder: false,
    priceNote:
      "ab-Preise Vorsaison pro Nacht inkl. 2 Personen — Stellplatz mit Strom, Vorzelt & PKW; Kinder (2–15) € 6, zzgl. Ortstaxe € 2 je Erwachsener · Hauptsaison etwas höher. Mobilheim ENZO inkl. 2 Personen, zzgl. Endreinigung € 100.",
    highlight: {
      title: "Vorab buchen lohnt sich",
      text: "Bei Reservierung mindestens drei Tage vor Anreise gilt der gleiche Preis wie im Vorjahr 2025.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 35.9, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 29, perExtraGuest: 10 },
      { id: "mobilheim", label: "Mobilheim ENZO", perNight: 119, perExtraGuest: 25 },
    ],
  },

  kontakt: {
    tel: "+43 3466 21010",
    telHref: "tel:+43346621010",
    mail: "info@oelspur-camping.at",
    adresse: "Eibiswald 127 · 8552 Eibiswald · Steiermark",
    coords: { lat: 46.6930638, lng: 15.2533793 },
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Mobilheim", href: "#mobilheime" },
    { label: "Familie", href: "#kinder" },
    { label: "Aktiv", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default oelspurCamping;
