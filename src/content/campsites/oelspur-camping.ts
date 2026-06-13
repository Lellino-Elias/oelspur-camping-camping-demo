import type { CampsiteConfig } from "../types";

const IMG = "/campsites/oelspur-camping";

const oelspurCamping: CampsiteConfig = {
  name: "Steirisches Ölspur Camping",
  shortName: "Ölspur",
  slug: "oelspur-camping",
  ort: "Eibiswald",
  region: "Steiermark",
  brandKind: "Camping",
  regionLong: "Schilcherland Eibiswald-Wies · Südsteiermark · Österreich",

  heroVariant: "center",

  claim: "Camping zwischen Weingärten und Kürbiskernöl",
  claimEmphasis: "Weingärten und Kürbiskernöl",
  emailDetail: "euer Platz eingebettet in die Isabella-Weinstöcke",
  intro:
    "Bei Familie Moser campst du seit 2013 auf einem selbst erbauten Platz: 49 parzellierte Stellplätze zwischen Isabella-Weinstöcken, zwei Sanitärgebäude aus heimischem Holz und das beheizte Erlebnisbad gleich nebenan.",

  statement: {
    text: "Eingekesselt von Isabella-Weinstöcken liegen hier 10.000 m² Wiese, 49 Stellplätze und jede Menge südsteirische Ruhe.",
    emphasis: "Isabella-Weinstöcken",
  },

  pillars: [
    {
      title: "Von Familie Moser geführt",
      text: "Seit dem 1. Juli 2013 führt Familie Moser den selbst erbauten Platz persönlich — ein von Familienhand geführtes „Kraftplatzerl", auf dem du dich umsorgt fühlst.",
      image: { src: `${IMG}/gallery-9ab2066e93.webp`, alt: "Familie Moser am Steirischen Ölspur Camping" },
    },
    {
      title: "Mitten in den Weingärten",
      text: "Rundum Isabella-Weinstöcke, dazwischen ebene Stellplätze und ein Pavillon für laue Abende — hier campst du zwischen Reben statt zwischen Beton.",
      image: { src: `${IMG}/gallery-9b5902bef2.webp`, alt: "Stellplätze und Pavillon im Abendlicht zwischen Weinreben" },
    },
    {
      title: "Erlebnisbad gleich nebenan",
      text: "Direkt angrenzend liegt das von Nahwärme beheizte Erlebnisbad der Marktgemeinde — über einen eigenen Eingang erreichst du es bequem vom Platz aus.",
      image: { src: `${IMG}/gallery-7d782eb049.webp`, alt: "Beheiztes Erlebnisbad Eibiswald neben dem Campingplatz" },
    },
  ],

  usps: [
    "49 parzellierte Stellplätze",
    "Erlebnisbad gleich nebenan",
    "Zwei Holz-Sanitärgebäude",
    "Hunde willkommen",
    "Kostenloses WLAN",
    "Gratis Ölspur-Sackerl",
  ],

  trust: {
    heading: "Vom Gast zum Freund",
    headingEmphasis: "Freund",
    intro:
      "Klein, fein und selbst gebaut: saubere Holz-Sanitäranlagen, ein Begrüßungs-Sackerl mit steirischem Kernöl und Gastgeber, die anpacken — viele Camper kommen genau dafür immer wieder.",
  },

  awards: [
    {
      label: "Beyond Camping 2023",
      image: { src: `${IMG}/award-5a0546aa10.png`, alt: "Beyond Camping Auszeichnung 2023" },
    },
  ],

  hero: {
    aerial: { src: `${IMG}/gallery-70c34816d0.webp`, alt: "Luftaufnahme vom Steirischen Ölspur Camping in Eibiswald" },
  },

  camping: {
    heading: "Dein Campingtag in Eibiswald",
    intro:
      "Vom Stellplatz zwischen den Reben zu Sanitär, Spülküche und Rezeption ist es nie weit — 49 Plätze auf 10.000 m² Wiese und Split, alles modern und gepflegt.",
    features: [
      {
        title: "Stellplätze zwischen Reben",
        text: "49 parzellierte Plätze von 80 bis 120 m², inklusive Stromanschluss, Vorzelt und einem PKW — eingebettet in die Isabella-Weinstöcke.",
        image: { src: `${IMG}/gallery-a2c333844c.webp`, alt: "Gastgeber berät Camper am Stellplatz zwischen Weinreben" },
      },
      {
        title: "Zwei Holz-Sanitärgebäude",
        text: "Aus heimischem Holz gebaut, eines mit Fußbodenheizung von Saisonbeginn bis -ende: Duschen, Familienbad und ein barrierefreies WC auf Anfrage.",
        image: { src: `${IMG}/gallery-219ca8e444.webp`, alt: "Modernes Sanitärgebäude mit Waschbecken am Ölspur Camping" },
      },
      {
        title: "Spülküche & Trinkwasser",
        text: "Mehrere Wasserstellen in höchster Trinkwasserqualität und große Spülbecken mit Tropftasse machen Kochen und Abwasch am Platz unkompliziert.",
        image: { src: `${IMG}/gallery-63dd1dca17.webp`, alt: "Spülbecken im Sanitärgebäude des Ölspur Camping" },
      },
      {
        title: "Waschmaschine & Trockner",
        text: "Im Eingangsbereich stehen Waschmaschine und Trockner zur Selbstbedienung bereit — praktisch für längere Touren durch die Südsteiermark.",
        image: { src: `${IMG}/gallery-521e0376d7.webp`, alt: "Waschmaschine und Trockner im Sanitärgebäude" },
      },
      {
        title: "Kräutergarten zum Pflücken",
        text: "Frische Kräuter direkt am Platz: Würze deine Campingküche mit dem, was im Ölspur-Kräutergarten gerade wächst — Tipp aus vielen Gästebewertungen.",
        image: { src: `${IMG}/gallery-d1216f0c44.webp`, alt: "Kräutergarten in Tontöpfen vor der Holzfassade" },
      },
      {
        title: "Rezeption & kostenloses WLAN",
        text: "An der glasüberdachten Rezeption findest du Infos, Radkarten und kostenloses WLAN über den ganzen Platz — Gasflaschen-Service ganz in der Nähe.",
        image: { src: `${IMG}/gallery-92acad87bb.webp`, alt: "Rezeptionsgebäude des Ölspur Camping mit Leihrädern" },
      },
    ],
  },

  mobilheime: {
    heading: "Mobilhome „ENZO"",
    intro:
      "Kein eigener Wohnwagen? Unser modernes Mobilhome „ENZO" steht ab 15. April bereit — Camping-Feeling mit festem Dach, nur mit Reservierung.",
    items: [
      {
        name: "Mobilhome „ENZO"",
        kind: "Mobilhome für bis zu 4 Personen",
        text: "Geräumige Terrasse mit Sitzgarnitur, Wohnbereich mit Küche, Schlafzimmer mit Ehebett und ein Kinderzimmer mit Stockbett — inklusive TV, WLAN und Klimaanlage. Haustiere sind hier nicht erlaubt.",
        image: { src: `${IMG}/accommodation-5b119b7705.webp`, alt: "Mobilhome ENZO mit Holzfassade und Terrasse" },
        priceFrom: 119,
        features: ["Bis 4 Personen", "Terrasse & Sitzgarnitur", "Küche & Bad", "TV, WLAN & Klima"],
      },
    ],
  },

  kinder: {
    heading: "Wo Kinder den ganzen Tag draußen sind",
    intro:
      "Direkt neben dem Platz warten Wasserrutsche, Pumptrack und Bike-Trails — hier wird dem Nachwuchs garantiert nicht langweilig.",
    features: [
      {
        title: "Wasserspaß im Erlebnisbad",
        text: "60 Meter lange Rutsche, Strömungskanal sowie Kinder- und Sportbecken: Das beheizte Erlebnisbad nebenan lässt Kinderherzen höherschlagen.",
        image: { src: `${IMG}/gallery-f912648f22.webp`, alt: "Erlebnisbad mit Wasserrutsche neben dem Campingplatz" },
      },
      {
        title: "3Eiben Kids Bike-Park",
        text: "Im nahen Bürgerwald üben kleine Biker auf Flowtrail, Singletrail und Technik-Parcours — täglich kostenlos von Sonnenaufgang bis Sonnenuntergang.",
        image: { src: `${IMG}/kids-9b6b6fc089.webp`, alt: "Kinder auf dem 3Eiben Kids Bike-Park im Wald" },
      },
      {
        title: "Pumptrack & Dirtpark",
        text: "Gleich neben dem Campingplatz geht es auf rund 2.000 m² über Wellen, Kurven und Sprünge — mit Bike, Scooter oder Skateboard, und das gratis.",
        image: { src: `${IMG}/kids-e367e034cb.webp`, alt: "Kind springt über ein Hindernis im Bike-Park" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Die Südsteiermark vor dem Vorzelt",
    intro:
      "Fast 40 Panorama-Radtouren, Wanderwege, Buschenschänke und der Stausee Soboth liegen rund um Eibiswald — von Langeweile keine Spur.",
    items: [
      {
        title: "Mountainbiken bis Slowenien",
        text: "Nahezu 40 Panoramatouren starten in der Region, einige führen über die Grenze nach Slowenien — durch eines der schönsten Bike-Gebiete der Steiermark.",
        image: { src: `${IMG}/activity-d2536a1515.webp`, alt: "Mountainbiker auf einem Waldweg in der Region Schilcherland" },
      },
      {
        title: "Generationenpark nebenan",
        text: "Ninja-Warrior-Parcours, Calisthenics und ein Spazierweg durch den Naschgarten: Der Generationenpark direkt am Platz bringt Jung und Alt in Bewegung.",
        image: { src: `${IMG}/gallery-47a50f90b1.webp`, alt: "Generationenpark Eibiswald mit Calisthenics-Anlage" },
      },
      {
        title: "Fischen am Teich",
        text: "Am nahen, rund 1.700 m² großen Teich kannst du auf Anfrage Karpfen, Amur und Schleie angeln — und den Fang vor Ort grillen.",
        image: { src: `${IMG}/gallery-125227c628.webp`, alt: "Fischteich im Wald nahe dem Ölspur Camping" },
      },
    ],
  },

  anreise: {
    heading: "So kommst du nach Eibiswald",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd und die B76 Richtung Deutschlandsberg, dann weiter nach Eibiswald — der Platz liegt direkt neben dem Erlebnisbad (Eibiswald 127).",
      },
      {
        title: "Mit der Bahn",
        text: "Nächster Bahnhof ist Deutschlandsberg; von dort sind es rund 20 Kilometer mit Bus oder Taxi bis Eibiswald.",
      },
      {
        title: "Flughafen Graz",
        text: "Der Flughafen Graz-Thalerhof liegt etwa eine Autostunde entfernt.",
      },
    ],
  },

  galerie: {
    heading: "Abende an der Ölspur",
    headingEmphasis: "Ölspur",
    intro:
      "Holzbau, Weinreben und warmes Licht, wenn die Sonne hinter den Hügeln verschwindet — ein paar Eindrücke vom Platz und seinen Gastgebern.",
    tag: "Eibiswald · Südsteiermark",
    moreCount: 16,
    images: [
      { src: `${IMG}/gallery-d277fe46de.webp`, alt: "Holz-Empfangsgebäude mit Willkommens-Schild am Ölspur Camping" },
      { src: `${IMG}/gallery-48e90fb497.webp`, alt: "Beleuchteter Pavillon am Abend auf dem Campingplatz" },
      { src: `${IMG}/gallery-99e5704c94.webp`, alt: "Abendstimmung an der Rezeption mit Kräutergarten" },
      { src: `${IMG}/gallery-b7eb37073c.webp`, alt: "Radgruppe am Eingang des Ölspur Camping" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Platz für 2026",
    headingEmphasis: "deinen Platz",
    intro:
      "Sag uns Zeitraum und Personen — Familie Moser prüft die Verfügbarkeit und meldet sich persönlich. Eine Reservierung über die ganze Saison wird empfohlen.",
    pricesArePlaceholder: false,
    priceNote:
      "Richtpreise Saison 2026 — Stellplatz Vor-/Nachsaison € 15,90/Nacht, Hauptsaison (Juli–August) € 22,–/Nacht, inkl. Strom, Vorzelt & 1 PKW; dazu € 10 je Erwachsene/r, € 6 je Kind (2–15) und € 2 Ortstaxe ab 16 J.; Hund € 3,50. Mobilhome ENZO € 119 inkl. 2 Personen (Endreinigung € 100). Bitte beim Platz bestätigen.",
    highlight: {
      title: "Vorjahrespreis sichern",
      text: "Wer mindestens 3 Tage vor Anreise reserviert, zahlt den Preis von 2025 — der Stellplatz beginnt dann schon ab € 14.",
    },
    categories: [
      { id: "stellplatz-vor", label: "Stellplatz (Vor-/Nachsaison)", perNight: 15.9, perExtraGuest: 10 },
      { id: "stellplatz-hoch", label: "Stellplatz (Hauptsaison Juli–Aug.)", perNight: 22, perExtraGuest: 10 },
      { id: "zelt", label: "Zeltplatz", perNight: 9, perExtraGuest: 10 },
      { id: "mobilhome", label: "Mobilhome ENZO", perNight: 119, perExtraGuest: 25 },
    ],
  },

  kontakt: {
    tel: "+43 (0) 3466 21010",
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
    { label: "Mobilhome", href: "#mobilheime" },
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
