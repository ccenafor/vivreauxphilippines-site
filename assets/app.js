(() => {
  const STRINGS = {
    fr: {
      "nav.videos": "Vidéos",
      "nav.visa": "Visa",
      "nav.links": "Adresses utiles",
      "nav.follow": "Nous suivre",
      "converter.title": "Convertisseur de devises",
      "converter.rate_text": "1 {from} = {rate} {to}",
      "hero.title": "Vivre aux Philippines",
      "hero.tag": "Conseils, vie quotidienne, voyages et expatriation — en vidéo.",
      "cta.watch": "Regarder sur YouTube",
      "cta.follow": "Nous suivre",
      "about.text": "Un site simple et léger pour rassembler nos vidéos, nos réseaux sociaux et des liens utiles pour préparer votre séjour ou votre installation aux Philippines.",
      "videos.title": "Dernière vidéo",
      "visa.title": "Visas pour les Philippines",
      "visa.disclaimer": "Les informations sur les visas changent régulièrement. Consultez toujours les sites officiels de l'ambassade des Philippines de votre pays et du Bureau de l'Immigration philippin pour obtenir les informations les plus récentes et les plus précises.",
      "visa.checker.title": "Vérificateur de Visa",
      "visa.checker.label": "Quelle est votre nationalité ?",
      "visa.checker.button": "Vérifier",
      "visa.checker.result.needs_visa": "Pour votre nationalité, un visa est probablement requis avant l'arrivée.",
      "visa.checker.result.no_visa": "Bonne nouvelle ! Les détenteurs d'un passeport de votre pays peuvent généralement entrer aux Philippines sans visa pour un séjour allant jusqu'à 30 jours.",
      "visa.checker.result.balikbayan": "En tant que citoyen philippin ou ancien citoyen (ou son conjoint/enfant voyageant avec lui), vous pouvez bénéficier du privilège Balikbayan, autorisant un séjour d'un an sans visa.",
      "visa.checker.result.select": "Veuillez sélectionner une nationalité.",
      "visa.guides.title": "Guides des principaux visas",
      "links.title": "Adresses utiles",
      "socials.title": "Rejoignez la communauté",
      "footer.lang": "Langue :"
    },
    en: {
      "nav.videos": "Videos",
      "nav.visa": "Visa",
      "nav.links": "Useful links",
      "nav.follow": "Follow",
      "converter.title": "Currency Converter",
      "converter.rate_text": "1 {from} = {rate} {to}",
      "hero.title": "Vivre aux Philippines",
      "hero.tag": "Tips, everyday life, travel and expat life — on video.",
      "cta.watch": "Watch on YouTube",
      "cta.follow": "Follow us",
      "about.text": "A clean one-page hub to gather our videos, social channels, and practical links for your trip or new life in the Philippines.",
      "videos.title": "Latest video",
      "visa.title": "Visas for the Philippines",
      "visa.disclaimer": "Visa information changes regularly. Always consult the official websites of the Philippine embassy in your country and the Philippine Bureau of Immigration for the most current and accurate information.",
      "visa.checker.title": "Visa Checker Tool",
      "visa.checker.label": "What is your nationality?",
      "visa.checker.button": "Check",
      "visa.checker.result.needs_visa": "For your nationality, a visa is likely required before arrival.",
      "visa.checker.result.no_visa": "Good news! Passport holders from your country can typically enter the Philippines without a visa for a stay of up to 30 days.",
      "visa.checker.result.balikbayan": "As a Filipino citizen or former citizen (or their spouse/child traveling with them), you may be entitled to the Balikbayan Privilege, allowing a one-year visa-free stay.",
      "visa.checker.result.select": "Please select a nationality.",
      "visa.guides.title": "Main Visa Guides",
      "links.title": "Useful addresses",
      "socials.title": "Join the community",
      "footer.lang": "Language:"
    }
  };

  const VISA_DATA = {
    fr: [
      {
        title: "Extension de visa touriste",
        content: "Les touristes peuvent prolonger leur séjour au-delà de la période initiale sans visa. Cela se fait dans les bureaux du Bureau de l'Immigration. La première extension dure 29 jours, et les suivantes peuvent varier."
      },
      {
        title: "SRRV (Visa de Retraité Résident Spécial)",
        content: "Le SRRV est un visa non-immigrant pour les étrangers souhaitant prendre leur retraite aux Philippines. Il nécessite un dépôt de garantie et offre un droit de séjour indéfini. Géré par la Philippine Retirement Authority (PRA)."
      },
      {
        title: "Visa de mariage 13A",
        content: "Pour les étrangers mariés à un citoyen philippin. Il accorde le statut de résident permanent après une période probatoire d'un an. C'est la voie la plus courante vers la résidence permanente par le mariage."
      },
      {
        title: "Privilège Balikbayan",
        content: "Concerne les anciens citoyens philippins et leur famille proche (conjoint et enfants) voyageant avec eux. Permet une entrée sans visa et un séjour d'un an, renouvelable."
      },
      {
        title: "Visa étudiant",
        content: "Requis pour les étrangers souhaitant étudier dans un établissement d'enseignement philippin accrédité. L'école doit d'abord accepter l'étudiant avant que la demande de visa puisse commencer."
      },
      {
        title: "Permis de travail et visas d'affaires",
        content: "Un permis de travail pour étranger (AEP) du DOLE et un visa de travail (généralement le 9g) sont nécessaires pour un emploi à long terme. Des visas d'affaires existent pour des séjours de courte durée liés au travail."
      }
    ],
    en: [
      {
        title: "Tourist Visa Extension",
        content: "Tourists can extend their stay beyond the initial visa-free period. This is done at Bureau of Immigration offices. The first extension is for 29 days, and subsequent ones can vary."
      },
      {
        title: "SRRV (Special Resident Retiree's Visa)",
        content: "The SRRV is a non-immigrant visa for foreigners wishing to retire in the Philippines. It requires a security deposit and provides the right to reside indefinitely. Managed by the Philippine Retirement Authority (PRA)."
      },
      {
        title: "13A Marriage Visa",
        content: "For foreign nationals married to a Filipino citizen. It grants permanent residency status after a one-year probationary period. It is the most common path to permanent residency through marriage."
      },
      {
        title: "Balikbayan Privilege",
        content: "Applies to former Filipino citizens and their immediate family (spouse and children) traveling with them. Allows for a visa-free entry and a one-year stay, which can be extended."
      },
      {
        title: "Student Visa",
        content: "Required for foreign nationals who wish to study at an accredited Philippine educational institution. The school must first accept the student before the visa application can begin."
      },
      {
        title: "Work Permits & Business Visas",
        content: "An Alien Employment Permit (AEP) from DOLE and a work visa (typically the 9g) are required for long-term employment. Business visas exist for short-term work-related stays."
      }
    ]
  };

  const ALL_NATIONALITIES = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo (Democratic Republic of the)",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (Democratic People's Republic of)",
    "Korea (Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "North Macedonia",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Réunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States of America",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela (Bolivarian Republic of)",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe"
  ];

  const VISA_FREE_NATIONALITIES = [
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Australia",
    "Austria",
    "Bahamas",
    "Bahrain",
    "Barbados",
    "Belgium",
    "Benin",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cabo Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "El Salvador",
    "Equatorial Guinea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "Indonesia",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic",
    "Latvia",
    "Lesotho",
    "Liberia",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia (Federated States of)",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Norway",
    "Oman",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Poland",
    "Portugal",
    "Qatar",
    "Korea (Republic of)",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "Spain",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "United Arab Emirates",
    "United Kingdom of Great Britain and Northern Ireland",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela (Bolivarian Republic of)",
    "Vietnam",
    "Zambia",
    "Zimbabwe"
  ];

  const LINKS = {
    fr: [
      {
        group: "Ambassades & Consulats",
        items: [
          { label: "Ambassade de France aux Philippines", href: "https://ph.ambafrance.org/Nous-joindre-et-nous-trouver-2796" },
          { label: "Alliance Française", href: "https://www.alliance.ph/accueil-en/" },
          { label: "Ambassade des Philippines en France", href: "https://parispe.dfa.gov.ph/" }
        ]
      },
      {
        group: "Autres adresses utiles",
        items: [
          { label: "Bureau de l'immigration", href: "https://www.immigration.gov.ph/" },
          { label: "Chambre de commerce et d'industrie", href: "https://www.philippinechamber.com/" },
          { label: "French Tech Philippines", href: "https://frenchtech-ph.com/" }
        ]
      },
      {
        group: "Groupes Facebook",
        centerTitle: true,
        sections: [
          {
            title: "Les groupes Français :",
            items: [
              { label: "Ambassade de France", href: "https://www.facebook.com/FrenchEmbassyPH/" },
              { label: "French Tech Philippines", href: "https://www.facebook.com/frenchtechphils/" },
              { label: "Francophones aux Philippines", href: "https://www.facebook.com/groups/FrancophonesauxPhilippines/" },
              { label: "Union pour les Français aux Philippines", href: "https://www.facebook.com/groups/949538928795245/" },
              { label: "Les Français aux Philippines", href: "https://www.facebook.com/groups/1776490822578557/" },
              { label: "Francophones à Cebu", href: "https://www.facebook.com/groups/180752325436768/" },
              { label: "French in Philippines", href: "https://www.facebook.com/groups/FrenchInPhilippines/" }
            ]
          },
          {
            title: "Les groupes d'expats Anglais :",
            items: [
              { label: "Expats Philippines", href: "https://www.facebook.com/groups/phexpats/" },
              { label: "Cebu Foreigners Club", href: "https://www.facebook.com/groups/434275483334061/" },
              { label: "Cebu Underground Club for Expats and Foreigners", href: "https://www.facebook.com/groups/cebuundergroundexpats/" },
              { label: "Manila Foreigners Club", href: "https://www.facebook.com/groups/1935131489867710/" },
              { label: "Expats Dumaguete — Groupe 1", href: "https://www.facebook.com/groups/291651582115957" },
              { label: "Expats Dumaguete — Groupe 2", href: "https://www.facebook.com/groups/1499406230190585" },
              { label: "Expats Bohol", href: "https://www.facebook.com/groups/569310459785142" }
            ]
          }
        ]
      }
    ],
    en: [
      {
        group: "Embassies & Consulates",
        items: [
          { label: "French Embassy in the Philippines", href: "https://ph.ambafrance.org/Nous-joindre-et-nous-trouver-2796" },
          { label: "Alliance Française", href: "https://www.alliance.ph/accueil-en/" },
          { label: "Philippine Embassy in France", href: "https://parispe.dfa.gov.ph/" }
        ]
      },
      {
        group: "Other useful links",
        items: [
          { label: "Bureau of Immigration (PH)", href: "https://www.immigration.gov.ph/" },
          { label: "Philippine Chamber of Commerce & Industry", href: "https://www.philippinechamber.com/" },
          { label: "French Tech Philippines", href: "https://frenchtech-ph.com/" }
        ]
      },
      {
        group: "Facebook groups",
        centerTitle: true,
        sections: [
          {
            title: "French groups:",
            items: [
              { label: "French Embassy", href: "https://www.facebook.com/FrenchEmbassyPH/" },
              { label: "French Tech Philippines", href: "https://www.facebook.com/frenchtechphils/" },
              { label: "Francophones in the Philippines", href: "https://www.facebook.com/groups/FrancophonesauxPhilippines/" },
              { label: "Union for French in the Philippines", href: "https://www.facebook.com/groups/949538928795245/" },
              { label: "French People in the Philippines", href: "https://www.facebook.com/groups/1776490822578557/" },
              { label: "Francophones in Cebu", href: "https://www.facebook.com/groups/180752325436768/" },
              { label: "French in Philippines", href: "https://www.facebook.com/groups/FrenchInPhilippines/" }
            ]
          },
          {
            title: "English-speaking expat groups:",
            items: [
              { label: "Expats Philippines", href: "https://www.facebook.com/groups/phexpats/" },
              { label: "Cebu Foreigners Club", href: "https://www.facebook.com/groups/434275483334061/" },
              { label: "Cebu Underground Club for Expats and Foreigners", href: "https://www.facebook.com/groups/cebuundergroundexpats/" },
              { label: "Manila Foreigners Club", href: "https://www.facebook.com/groups/1935131489867710/" },
              { label: "Expats Dumaguete — Group 1", href: "https://www.facebook.com/groups/291651582115957" },
              { label: "Expats Dumaguete — Group 2", href: "https://www.facebook.com/groups/1499406230190585" },
              { label: "Expats Bohol", href: "https://www.facebook.com/groups/569310459785142" }
            ]
          }
        ]
      }
    ]
  };

  const state = {
    lang: "fr",
    rates: {}
  };

  function renderVisaGuides(lang = "fr") {
    const guidesContainer = document.getElementById("visa-guides-container");
    const guidesData = VISA_DATA[lang];

    const guidesHtml = [
      `<h3 class="text-2xl font-bold text-white mb-4" data-i18n="visa.guides.title">${STRINGS[lang]["visa.guides.title"]}</h3>`,
      ...guidesData.map(
        (guide) => `
          <details class="bg-white/10 backdrop-blur-sm rounded-lg cursor-pointer">
            <summary class="p-4 font-semibold text-white">${guide.title}</summary>
            <div class="p-4 border-t border-white/20 text-white/80">
              <p>${guide.content}</p>
            </div>
          </details>
        `
      )
    ];

    guidesContainer.innerHTML = guidesHtml.join("");
  }

  function renderVisaChecker(lang = "fr") {
    const checkerContainer = document.getElementById("visa-checker-container");
    if (!checkerContainer) return;

    const nationalities = [...ALL_NATIONALITIES].sort((a, b) => a.localeCompare(b));

    checkerContainer.innerHTML = `
      <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 sticky top-24">
        <h3 class="text-2xl font-bold text-white mb-4" data-i18n="visa.checker.title">${STRINGS[lang]["visa.checker.title"]}</h3>
        <label for="nationality-select" class="block font-medium text-white mb-2" data-i18n="visa.checker.label">${STRINGS[lang]["visa.checker.label"]}</label>
        <select id="nationality-select" class="w-full p-2 rounded-md bg-white/80 text-slate-800">
          <option value="">-- Select --</option>
          ${nationalities.map((n) => `<option value="${n}">${n}</option>`).join("")}
        </select>
        <button id="check-visa-btn" class="mt-4 w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-500 transition" data-i18n="visa.checker.button">${STRINGS[lang]["visa.checker.button"]}</button>
        <div id="visa-result" class="mt-4 text-center font-semibold"></div>
      </div>
    `;

    const button = document.getElementById("check-visa-btn");
    if (button) {
      button.addEventListener("click", () => checkVisa(lang));
    }
  }

  function renderVisaContent(lang = "fr") {
    const container = document.getElementById("visa-content");
    if (!container) return;

    container.innerHTML = `
      <div class="grid md:grid-cols-2 gap-8">
        <div id="visa-guides-container" class="space-y-4"></div>
        <div id="visa-checker-container"></div>
      </div>
    `;

    renderVisaGuides(lang);
    renderVisaChecker(lang);
  }

  function checkVisa(lang = "fr") {
    const select = document.getElementById("nationality-select");
    const resultDiv = document.getElementById("visa-result");
    if (!select || !resultDiv) return;

    const nationality = select.value;
    let messageKey = "";

    if (!nationality) {
      messageKey = "visa.checker.result.select";
    } else if (nationality === "Philippines") {
      messageKey = "visa.checker.result.balikbayan";
    } else if (VISA_FREE_NATIONALITIES.includes(nationality)) {
      messageKey = "visa.checker.result.no_visa";
    } else {
      messageKey = "visa.checker.result.needs_visa";
    }

    resultDiv.textContent = STRINGS[lang][messageKey];
  }

  function renderGroups(lang = "fr") {
    const container = document.getElementById("linkGroups");
    if (!container) return;

    container.innerHTML = "";

    LINKS[lang].forEach((group) => {
      const card = document.createElement("div");
      const baseClasses = "bg-white/80 backdrop-blur rounded-2xl p-6 ring-1 ring-black/5 shadow-sm";
      card.className = group.sections ? `${baseClasses} md:col-span-2` : baseClasses;

      const title = document.createElement("h3");
      const titleBase = "font-semibold text-sky-800 mb-4";
      title.className = group.centerTitle ? `${titleBase} text-center text-xl md:text-2xl tracking-wide` : titleBase;
      title.textContent = group.group;
      card.appendChild(title);

      if (group.sections) {
        const sectionsWrapper = document.createElement("div");
        sectionsWrapper.className = "grid gap-6 md:grid-cols-2";

        group.sections.forEach((section) => {
          const sectionEl = document.createElement("div");
          sectionEl.className = "space-y-3";

          const sectionTitle = document.createElement("h4");
          sectionTitle.className = "text-sm font-semibold uppercase tracking-wide text-sky-600 text-center md:text-left";
          sectionTitle.textContent = section.title;

          const list = document.createElement("ul");
          list.className = "space-y-3";

          section.items.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `<a href="${item.href}" class="group flex items-start gap-3" target="_blank" rel="noreferrer noopener"><span class="mt-1 inline-block w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"></span><span class="text-slate-700 group-hover:text-sky-700 underline decoration-sky-200 underline-offset-4">${item.label}</span></a>`;
            list.appendChild(li);
          });

          sectionEl.appendChild(sectionTitle);
          sectionEl.appendChild(list);
          sectionsWrapper.appendChild(sectionEl);
        });

        card.appendChild(sectionsWrapper);
      } else {
        const list = document.createElement("ul");
        list.className = "space-y-3";

        group.items.forEach((item) => {
          const li = document.createElement("li");
          li.innerHTML = `<a href="${item.href}" class="group flex items-start gap-3" target="_blank" rel="noreferrer noopener"><span class="mt-1 inline-block w-2 h-2 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"></span><span class="text-slate-700 group-hover:text-sky-700 underline decoration-sky-200 underline-offset-4">${item.label}</span></a>`;
          list.appendChild(li);
        });

        card.appendChild(list);
      }

      container.appendChild(card);
    });
  }

  function applyI18n(lang = "fr") {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (STRINGS[lang][key]) {
        el.textContent = STRINGS[lang][key];
      }
    });

    const langLabel = document.getElementById("langLabel");
    if (langLabel) {
      langLabel.textContent = STRINGS[lang]["footer.lang"];
    }
  }

  function updateLangButtons(lang) {
    const frBtn = document.getElementById("setFR");
    const enBtn = document.getElementById("setEN");

    if (frBtn) {
      frBtn.className = "px-3 py-1 rounded-full border " + (lang === "fr" ? "bg-sky-600 text-white border-sky-600" : "bg-white text-sky-700 border-sky-200");
    }
    if (enBtn) {
      enBtn.className = "px-3 py-1 rounded-full border " + (lang === "en" ? "bg-sky-600 text-white border-sky-600" : "bg-white text-sky-700 border-sky-200");
    }
  }

  function setLang(lang = "fr") {
    state.lang = lang;
    localStorage.setItem("vap_lang", lang);
    document.documentElement.lang = lang;

    updateLangButtons(lang);
    applyI18n(lang);
    renderGroups(lang);
    renderVisaContent(lang);
  }

  function initLanguage() {
    const saved = localStorage.getItem("vap_lang") || "fr";
    setLang(saved);

    const toggle = document.getElementById("toggleLang");
    if (toggle) {
      toggle.addEventListener("click", () => setLang(state.lang === "fr" ? "en" : "fr"));
    }

    const frBtn = document.getElementById("setFR");
    if (frBtn) {
      frBtn.addEventListener("click", () => setLang("fr"));
    }

    const enBtn = document.getElementById("setEN");
    if (enBtn) {
      enBtn.addEventListener("click", () => setLang("en"));
    }
  }

  function initConverter() {
    const amountFrom = document.getElementById("converter-amount-from");
    const currencyFrom = document.getElementById("converter-currency-from");
    const amountTo = document.getElementById("converter-amount-to");
    const currencyTo = document.getElementById("converter-currency-to");
    const rateDiv = document.getElementById("converter-rate");

    if (!amountFrom || !currencyFrom || !amountTo || !currencyTo || !rateDiv) return;

    const updateConversion = () => {
      const from = currencyFrom.value;
      const to = currencyTo.value;
      const amount = parseFloat(amountFrom.value);

      if (Number.isNaN(amount) || !state.rates[from] || !state.rates[to]) {
        amountTo.value = "";
        rateDiv.textContent = "";
        return;
      }

      const rate = state.rates[to] / state.rates[from];
      amountTo.value = (amount * rate).toFixed(2);

      const rateText = STRINGS[state.lang]["converter.rate_text"]
        .replace("{from}", from)
        .replace("{rate}", rate.toFixed(4))
        .replace("{to}", to);
      rateDiv.textContent = rateText;
    };

    const fetchRates = async () => {
      try {
        const response = await fetch("https://api.frankfurter.app/latest?from=USD");
        const data = await response.json();
        state.rates = { ...data.rates, USD: 1 };
        updateConversion();
      } catch (error) {
        // Keep console log for debugging while keeping UI clean
        console.error("Error fetching currency rates:", error);
        rateDiv.textContent = "Could not load rates.";
      }
    };

    amountFrom.addEventListener("input", updateConversion);
    currencyFrom.addEventListener("change", updateConversion);
    currencyTo.addEventListener("change", updateConversion);

    fetchRates();
  }

  function initFooterYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  function init() {
    initFooterYear();
    initLanguage();
    initConverter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
