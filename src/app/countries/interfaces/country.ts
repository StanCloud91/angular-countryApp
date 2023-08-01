// Generated by https://quicktype.io

export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini:         Gini;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  USD: Usd;
}

export interface Usd {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  "2019": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  spa: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  spa: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}
[
  {
      "name": {
          "common": "Ecuador",
          "official": "Republic of Ecuador",
          "nativeName": {
              "spa": {
                  "official": "República del Ecuador",
                  "common": "Ecuador"
              }
          }
      },
      "tld": [
          ".ec"
      ],
      "cca2": "EC",
      "ccn3": "218",
      "cca3": "ECU",
      "cioc": "ECU",
      "independent": true,
      "status": "officially-assigned",
      "unMember": true,
      "currencies": {
          "USD": {
              "name": "United States dollar",
              "symbol": "$"
          }
      },
      "idd": {
          "root": "+5",
          "suffixes": [
              "93"
          ]
      },
      "capital": [
          "Quito"
      ],
      "altSpellings": [
          "EC",
          "Republic of Ecuador",
          "República del Ecuador"
      ],
      "region": "Americas",
      "subregion": "South America",
      "languages": {
          "spa": "Spanish"
      },
      "translations": {
          "ara": {
              "official": "جمهورية الإكوادور",
              "common": "الإكوادور"
          },
          "bre": {
              "official": "Republik Ecuador",
              "common": "Ecuador"
          },
          "ces": {
              "official": "Ekvádorská republika",
              "common": "Ekvádor"
          },
          "cym": {
              "official": "Gweriniaeth Ecwador",
              "common": "Ecwador"
          },
          "deu": {
              "official": "Republik Ecuador",
              "common": "Ecuador"
          },
          "est": {
              "official": "Ecuadori Vabariik",
              "common": "Ecuador"
          },
          "fin": {
              "official": "Ecuadorin tasavalta",
              "common": "Ecuador"
          },
          "fra": {
              "official": "République de l'Équateur",
              "common": "Équateur"
          },
          "hrv": {
              "official": "Republika Ekvador",
              "common": "Ekvador"
          },
          "hun": {
              "official": "Ecuadori Köztársaság",
              "common": "Ecuador"
          },
          "ita": {
              "official": "Repubblica dell'Ecuador",
              "common": "Ecuador"
          },
          "jpn": {
              "official": "エクアドル共和国",
              "common": "エクアドル"
          },
          "kor": {
              "official": "에콰도르 공화국",
              "common": "에콰도르"
          },
          "nld": {
              "official": "Republiek Ecuador",
              "common": "Ecuador"
          },
          "per": {
              "official": "جمهوری اکوادور",
              "common": "اکوادور"
          },
          "pol": {
              "official": "Ekwador",
              "common": "Ekwador"
          },
          "por": {
              "official": "República do Equador",
              "common": "Equador"
          },
          "rus": {
              "official": "Республика Эквадор",
              "common": "Эквадор"
          },
          "slk": {
              "official": "Ekvádorská republika",
              "common": "Ekvádor"
          },
          "spa": {
              "official": "República del Ecuador",
              "common": "Ecuador"
          },
          "srp": {
              "official": "Република Еквадор",
              "common": "Еквадор"
          },
          "swe": {
              "official": "Republiken Ecuador",
              "common": "Ecuador"
          },
          "tur": {
              "official": "Ekvador Cumhuriyeti",
              "common": "Ekvador"
          },
          "urd": {
              "official": "جمہوریہ ایکوڈور",
              "common": "ایکواڈور"
          },
          "zho": {
              "official": "厄瓜多尔共和国",
              "common": "厄瓜多尔"
          }
      },
      "latlng": [
          -2.0,
          -77.5
      ],
      "landlocked": false,
      "borders": [
          "COL",
          "PER"
      ],
      "area": 276841.0,
      "demonyms": {
          "eng": {
              "f": "Ecuadorean",
              "m": "Ecuadorean"
          },
          "fra": {
              "f": "Équatorienne",
              "m": "Équatorien"
          }
      },
      "flag": "🇪🇨",
      "maps": {
          "googleMaps": "https://goo.gl/maps/TbX8hUW4gcbRPZiK7",
          "openStreetMaps": "https://www.openstreetmap.org/relation/108089"
      },
      "population": 17643060,
      "gini": {
          "2019": 45.7
      },
      "fifa": "ECU",
      "car": {
          "signs": [
              "EC"
          ],
          "side": "right"
      },
      "timezones": [
          "UTC-06:00",
          "UTC-05:00"
      ],
      "continents": [
          "South America"
      ],
      "flags": {
          "png": "https://flagcdn.com/w320/ec.png",
          "svg": "https://flagcdn.com/ec.svg",
          "alt": "The flag of Ecuador is composed of the horizontal bands of yellow, blue and red, with the yellow band twice the height of the other two bands. The Ecuadorian coat of arms is superimposed in the center of the field."
      },
      "coatOfArms": {
          "png": "https://mainfacts.com/media/images/coats_of_arms/ec.png",
          "svg": "https://mainfacts.com/media/images/coats_of_arms/ec.svg"
      },
      "startOfWeek": "monday",
      "capitalInfo": {
          "latlng": [
              -0.22,
              -78.5
          ]
      },
      "postalCode": {
          "format": "@####@",
          "regex": "^([a-zA-Z]\\d{4}[a-zA-Z])$"
      }
  }
]// Generated by https://quicktype.io

export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini:         Gini;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  USD: Usd;
}

export interface Usd {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  "2019": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  spa: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  spa: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}
// Generated by https://quicktype.io

export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc:         string;
  independent:  boolean;
  status:       string;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       string;
  subregion:    string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders:      string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini:         Gini;
  fifa:         string;
  car:          Car;
  timezones:    string[];
  continents:   string[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  string;
  capitalInfo:  CapitalInfo;
  postalCode:   PostalCode;
}

export interface CapitalInfo {
  latlng: number[];
}

export interface Car {
  signs: string[];
  side:  string;
}

export interface CoatOfArms {
  png: string;
  svg: string;
}

export interface Currencies {
  USD: Usd;
}

export interface Usd {
  name:   string;
  symbol: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt: string;
}

export interface Gini {
  "2019": number;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Languages {
  spa: string;
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  spa: Translation;
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}
