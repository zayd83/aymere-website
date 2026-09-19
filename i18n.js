// Aymere — NL/EN language switch (static, no framework)
// Usage: elements carry data-i18n="key" (innerHTML is replaced with the
// dictionary value for the active language — values may contain simple
// inline markup such as <br>, <span class="accent">, entities, etc.).
// data-i18n-placeholder="key" sets the placeholder attribute instead.
// data-i18n-aria-label="key" sets the aria-label attribute instead.

var AYMERE_I18N_NL = {
  // ---- Shared: navigation, footer, generic CTA ----
  'nav.home': `Home`,
  'nav.diensten': `Diensten`,
  'nav.oplossingen': `Oplossingen`,
  'nav.huisarts': `Huisartspraktijken`,
  'nav.retail': `Retail &amp; groothandel`,
  'nav.zakelijk': `Zakelijke dienstverlening`,
  'nav.andere': `Andere organisaties`,
  'nav.werkwijze': `Werkwijze`,
  'nav.over': `Over Aymere`,
  'nav.contact': `Contact`,
  'nav.soon': `Binnenkort`,
  'nav.toggle': `Menu openen`,
  'footer.desc': `Data-analyse, forecasting en optimalisatie voor complexe operationele beslissingen.`,
  'footer.nav.heading': `Navigatie`,
  'footer.contact.heading': `Contact`,
  'footer.legal.heading': `Juridisch`,
  'footer.linkedin': `LinkedIn`,
  'footer.privacy': `Privacy en verantwoord datagebruik`,
  'footer.terms': `Algemene voorwaarden`,
  'footer.cookies': `Cookie-instellingen`,
  'footer.copyright': `&copy; 2026 AYMERE. Alle rechten voorbehouden.`,
  'cta.plan': `Bespreek uw vraagstuk <span class="arrow">&rarr;</span>`,

  // ---- Home (index.html) ----
  'home.hero.h1': `Zie wat er gebeurt.<br>Voorspel wat eraan komt.<br>Bereken wat u het beste kunt doen<span class="dot">.</span>`,
  'home.hero.sub': `AYMERE combineert data-analyse, forecasting en optimalisatie om complexe bedrijfs- en capaciteitsvraagstukken te vertalen naar concrete stuurinformatie.`,
  'home.hero.cta2': `Bekijk onze werkwijze`,
  'home.hero.tags1': `Econometrie &middot; Operations Research &middot; Data Science`,
  'home.hero.loc': `Amsterdam &nbsp;&middot;&nbsp; Actief in Nederland`,

  'home.recog.title': `Wanneer data aanwezig is, maar richting ontbreekt`,
  'home.recog.intro': `Veel organisaties beschikken over meer gegevens dan ooit, maar missen een helder antwoord op de vragen die er werkelijk toe doen.`,
  'home.recog.item1.title': `Verspreide informatie`,
  'home.recog.item1.body': `Belangrijke informatie staat verdeeld over systemen, bestanden en afzonderlijke rapportages. Daardoor ontbreekt één betrouwbaar overzicht.`,
  'home.recog.item2.title': `Moeilijk vooruitkijken`,
  'home.recog.item2.body': `Historische cijfers laten zien wat er is gebeurd, maar geven nog geen duidelijk beeld van toekomstige vraag, drukte of capaciteitsbehoefte.`,
  'home.recog.item3.title': `Vraag en capaciteit sluiten niet aan`,
  'home.recog.item3.body': `Personeel, tijd en middelen zijn niet altijd beschikbaar op de momenten waarop ze het hardst nodig zijn.`,
  'home.recog.item4.title': `Gevolgen zijn vooraf onduidelijk`,
  'home.recog.item4.body': `Beslissingen over planning, capaciteit of processen worden genomen zonder verschillende scenario's vooraf goed te kunnen vergelijken.`,

  'home.method.title': `Van terugkijken naar vooruit beslissen`,
  'home.method.intro': `AYMERE brengt analyse, voorspelling en optimalisatie samen. Zo ontstaat niet alleen inzicht, maar ook een onderbouwde richting voor de volgende beslissing.`,
  'home.method.step1.title': `Inzicht`,
  'home.method.step1.q': `Wat gebeurt er?`,
  'home.method.step1.body': `We brengen prestaties, patronen, capaciteit en knelpunten overzichtelijk in beeld.`,
  'home.method.step2.title': `Diagnose`,
  'home.method.step2.q': `Waarom gebeurt het?`,
  'home.method.step2.body': `We onderzoeken welke factoren samenhangen met de resultaten en waar processen capaciteit of tijd verliezen.`,
  'home.method.step3.title': `Voorspelling`,
  'home.method.step3.q': `Wat komt eraan?`,
  'home.method.step3.body': `Met historische gegevens en statistische modellen ramen we toekomstige vraag, drukte, omzet of capaciteitsbehoefte.`,
  'home.method.step4.title': `Optimalisatie`,
  'home.method.step4.q': `Welke inrichting werkt waarschijnlijk het beste?`,
  'home.method.step4.body': `We vergelijken mogelijke verdelingen van personeel, tijd, capaciteit en middelen binnen de geldende randvoorwaarden.`,
  'home.method.step5.title': `Besluit`,
  'home.method.step5.q': `Wat betekent dit concreet?`,
  'home.method.step5.body': `We vertalen de uitkomsten naar begrijpelijke scenario's, stuurinformatie en praktische aanbevelingen.`,

  'home.services.title': `Onze expertise`,
  'home.services.intro': `Afhankelijk van het vraagstuk leveren we één gerichte analyse of combineren we meerdere onderdelen tot een complete oplossing.`,
  'home.services.item1.title': `Managementinformatie en dashboards`,
  'home.services.item1.body': `Breng belangrijke prestaties, capaciteit en knelpunten samen in één betrouwbaar overzicht.`,
  'home.services.item1.list': `KPI's &middot; managementrapportages &middot; operationele dashboards &middot; periodieke monitoring`,
  'home.services.item2.title': `Data-analyse`,
  'home.services.item2.body': `Ontdek patronen, afwijkingen, knelpunten en mogelijke oorzaken in bestaande bedrijfsgegevens.`,
  'home.services.item2.list': `Procesanalyse &middot; performanceanalyse &middot; segmentatie &middot; scenarioanalyse`,
  'home.services.item3.title': `Forecasting`,
  'home.services.item3.body': `Gebruik historische gegevens om toekomstige vraag, drukte, omzet of capaciteitsbehoefte beter te ramen.`,
  'home.services.item3.list': `Vraagvoorspelling &middot; capaciteitsforecast &middot; seizoenspatronen &middot; personeelsbehoefte`,
  'home.services.item4.title': `Planning en optimalisatie`,
  'home.services.item4.body': `Bereken hoe mensen, tijd, ruimtes en middelen binnen praktische randvoorwaarden beter kunnen worden verdeeld.`,
  'home.services.item4.list': `Personeelsplanning &middot; agenda-optimalisatie &middot; capaciteitsplanning &middot; resource allocation`,
  'home.services.cta': `Bekijk alle diensten <span class="arrow">&rarr;</span>`,

  'home.example.eyebrow': `Illustratief voorbeeld &middot; huisartspraktijk`,
  'home.example.title': `Hoe een vraagstuk wordt vertaald naar een oplossing`,
  'home.example.body1': `Een huisartspraktijk ervaart op bepaalde dagen hoge telefoniedruk en volle agenda's, terwijl op andere momenten beschikbare capaciteit onbenut blijft. Het is niet direct duidelijk of dit wordt veroorzaakt door de verdeling van consulttypen, personeelsroosters, spoedruimte of wisselende zorgvraag. AYMERE kan historische afspraakgegevens, geaggregeerde zorgvraag, telefoniepatronen en beschikbare personeelsuren analyseren.`,
  'home.example.body2': `Vervolgens kunnen we: piekmomenten en structurele patronen zichtbaar maken; toekomstige drukte ramen; vraag en beschikbare capaciteit naast elkaar leggen; alternatieve planningsscenario's vergelijken; de uitkomsten vertalen naar een dashboard en concreet advies.`,
  'home.example.body3': `Het doel is niet om automatisch medische beslissingen te nemen, maar om de praktijk betere operationele stuurinformatie te geven.`,
  'home.example.cta': `Bekijk oplossingen voor huisartspraktijken <span class="arrow">&rarr;</span>`,

  'home.deliver.title': `Geen los model, maar een bruikbare oplossing`,
  'home.deliver.item1.title': `Heldere probleemanalyse`,
  'home.deliver.item1.body': `Een afgebakende beschrijving van het vraagstuk, de relevante processen en de beslissingen die ondersteund moeten worden.`,
  'home.deliver.item2.title': `Inzicht in de data`,
  'home.deliver.item2.body': `Een beoordeling van beschikbare gegevens, definities, kwaliteit, volledigheid en beperkingen.`,
  'home.deliver.item3.title': `Werkende oplevering`,
  'home.deliver.item3.body': `Afhankelijk van het project: een dashboard, analyse, forecast, optimalisatiemodel, scenariotool of managementrapportage.`,
  'home.deliver.item4.title': `Implementatie en uitleg`,
  'home.deliver.item4.body': `Documentatie, toelichting en begeleiding zodat de oplossing daadwerkelijk binnen de organisatie gebruikt kan worden.`,

  'home.approach.title': `Van eerste vraag tot werkende toepassing`,
  'home.approach.step1.title': `Verkenning`,
  'home.approach.step1.body': `We bespreken het bedrijfsprobleem, de gewenste beslissing en de beschikbare gegevens.`,
  'home.approach.step2.title': `Afbakening`,
  'home.approach.step2.body': `We formuleren het vraagstuk, de benodigde data, de oplevering en de beoordelingscriteria.`,
  'home.approach.step3.title': `Analyse en ontwikkeling`,
  'home.approach.step3.body': `We onderzoeken de data en bouwen de afgesproken analyse, forecast, visualisatie of optimalisatieoplossing.`,
  'home.approach.step4.title': `Validatie`,
  'home.approach.step4.body': `We controleren aannames, datakwaliteit en uitkomsten voordat de oplossing in de praktijk wordt gebruikt.`,
  'home.approach.step5.title': `Implementatie`,
  'home.approach.step5.body': `We leveren de oplossing op, leggen de werking uit en begeleiden het gebruik.`,
  'home.approach.step6.title': `Evaluatie`,
  'home.approach.step6.body': `We beoordelen de toegevoegde waarde en bepalen of actualisatie, uitbreiding of doorlopende monitoring zinvol is.`,
  'home.approach.cta': `Lees meer over onze werkwijze <span class="arrow">&rarr;</span>`,

  'home.expertise.title': `Niet alleen zichtbaar maken<br><span class="accent">wat er gebeurde</span>`,
  'home.expertise.body': `Veel dashboards kijken vooral terug. AYMERE combineert managementinformatie met statistische analyse, forecasting en optimalisatie. Daardoor kunnen we organisaties ondersteunen bij een bredere reeks vragen: wat gebeurt er, waarom gebeurt het, wat komt eraan en welke inrichting past het beste bij de beschikbare capaciteit?`,
  'home.expertise.tag1': `Inzicht`,
  'home.expertise.tag2': `Diagnose`,
  'home.expertise.tag3': `Voorspelling`,
  'home.expertise.tag4': `Optimalisatie`,

  'home.privacy.title': `Zorgvuldig omgaan met data`,
  'home.privacy.intro': `Een goede oplossing begint met duidelijke afspraken over gegevens, toegang en gebruik. We werken waar mogelijk met de minimaal noodzakelijke data en maken vooraf inzichtelijk welke gegevens nodig zijn voor het afgesproken vraagstuk.`,
  'home.privacy.item1.title': `Dataminimalisatie`,
  'home.privacy.item1.body': `We vragen alleen om gegevens die relevant zijn voor het afgesproken doel.`,
  'home.privacy.item2.title': `Duidelijke afspraken`,
  'home.privacy.item2.body': `Vooraf worden verantwoordelijkheden, toegang, bewaartermijnen en opleveringen vastgelegd.`,
  'home.privacy.item3.title': `Menselijke beoordeling`,
  'home.privacy.item3.body': `Analyses en modellen ondersteunen besluitvorming. Kritieke beslissingen blijven onder menselijke verantwoordelijkheid.`,
  'home.privacy.cta': `Lees over privacy en verantwoord datagebruik <span class="arrow">&rarr;</span>`,

  'home.cta.title': `Welk vraagstuk wilt u beter<br><span class="accent">kunnen onderbouwen?</span>`,
  'home.cta.body': `U hoeft nog niet te weten welk dashboard, model of type analyse u nodig heeft. Begin met de operationele vraag of beslissing waar uw organisatie momenteel tegenaan loopt.`,
  'home.cta.note': `Vrijblijvende eerste verkenning &middot; circa 30 minuten`,

  // ---- Diensten ----
  'diensten.eyebrow': `Onze diensten`,
  'diensten.h1': `Van beter inzicht<br><span class="accent">tot slimmere planning.</span>`,
  'diensten.lead': `Van beter inzicht tot slimme voorspellingen en geoptimaliseerde planning.`,
  'diensten.pull': `Van inzicht<br>naar actie.`,
  'diensten.item1.pillar': `Dashboards`,
  'diensten.item1.title': `KPI-dashboards &amp; managementinformatie`,
  'diensten.item1.body': `Wij brengen belangrijke bedrijfsinformatie samen in één overzichtelijk dashboard. Hierdoor ziet u direct hoe uw organisatie presteert en waar aandacht nodig is.`,
  'diensten.item1.list': `Omzet &middot; kosten &middot; capaciteit &middot; productiviteit &middot; bezettingsgraad &middot; wachttijden &middot; personeelsinzet &middot; klant- of patiëntvolume`,
  'diensten.item1.fit': `Geschikt voor organisaties die veel data hebben, maar onvoldoende overzicht.`,
  'diensten.item2.pillar': `Voorspellen`,
  'diensten.item2.title': `Voorspellingen`,
  'diensten.item2.body': `Wij gebruiken historische gegevens en statistische modellen om toekomstige ontwikkelingen te voorspellen.`,
  'diensten.item2.list': `Vraagvoorspelling &middot; omzetforecast &middot; drukte voorspellen &middot; personeelsbehoefte &middot; capaciteitsbehoefte &middot; seizoenspatronen`,
  'diensten.item2.fit': `Geschikt voor organisaties die beter vooruit willen plannen.`,
  'diensten.item3.pillar': `Plannen`,
  'diensten.item3.title': `Planning &amp; optimalisatie`,
  'diensten.item3.body': `Wij berekenen hoe mensen, tijd en middelen zo efficiënt mogelijk kunnen worden ingezet.`,
  'diensten.item3.list': `Personeelsplanning &middot; roosteroptimalisatie &middot; capaciteitsplanning &middot; agenda-optimalisatie &middot; voorraadplanning &middot; resource allocation`,
  'diensten.item3.fit': `Geschikt voor organisaties waar capaciteit schaars is en planning complex wordt.`,
  'diensten.item4.pillar': `Analyseren`,
  'diensten.item4.title': `Data-analyse`,
  'diensten.item4.body': `Wij onderzoeken bedrijfsdata om knelpunten, patronen, verspilling en kansen zichtbaar te maken.`,
  'diensten.item4.list': `Procesanalyse &middot; performance-analyse &middot; klantanalyse &middot; scenarioanalyse &middot; knelpuntanalyse`,
  'diensten.item4.fit': `Geschikt voor organisaties die willen begrijpen waarom bepaalde resultaten ontstaan.`,
  'diensten.item5.pillar': `Monitoren`,
  'diensten.item5.title': `Doorlopende monitoring &amp; advies`,
  'diensten.item5.body': `Wij kunnen dashboards, forecasts en optimalisatiemodellen na oplevering blijven actualiseren.`,
  'diensten.item5.list': `Maandelijkse KPI-monitoring &middot; periodieke forecast &middot; herberekening van planning &middot; managementrapportage &middot; periodiek advies`,
  'diensten.item5.fit': `Geschikt voor organisaties die structureel op data willen sturen.`,

  // ---- Oplossingen ----
  'oplossingen.eyebrow': `Oplossingen per sector`,
  'oplossingen.h1': `Oplossingen voor uw sector.`,
  'oplossingen.lead': `Data-uitdagingen verschillen per organisatie. Daarom vertalen we onze expertise naar concrete oplossingen per sector.`,
  'oplossingen.pull': `Eén aanpak.<br>Toegepast per sector.`,
  'oplossingen.item1.body': `Meer grip op zorgvraag, wachttijden, personeelsplanning en capaciteit.`,
  'oplossingen.item1.cta': `Bekijk oplossingen voor huisartspraktijken <span class="arrow">&rarr;</span>`,
  'oplossingen.item2.body': `Beter voorspellen van vraag, voorraad en commerciële prestaties.`,
  'oplossingen.item3.body': `Meer grip op capaciteit, planning, productiviteit en toekomstige vraag.`,

  // ---- Huisartspraktijken ----
  'huisarts.eyebrow': `Oplossingen &middot; Huisartspraktijken`,
  'huisarts.h1': `Minder wachttijd. Betere planning. Meer grip op capaciteit.`,
  'huisarts.lead': `Aymere helpt huisartspraktijken beschikbare tijd en personeel slimmer in te zetten met data.`,
  'huisarts.problems.title': `Veel huisartspraktijken lopen tegen<br><span class="accent">dezelfde problemen aan</span>`,
  'huisarts.problems.item1': `Volle agenda's`,
  'huisarts.problems.item2': `Lange wachttijden`,
  'huisarts.problems.item3': `Hoge telefoniedruk`,
  'huisarts.problems.item4': `Personeelstekort`,
  'huisarts.problems.item5': `Moeilijke personeelsplanning`,
  'huisarts.problems.item6': `Onvoldoende inzicht in piekmomenten`,
  'huisarts.problems.item7': `Beperkte ruimte voor nieuwe patiënten`,
  'huisarts.help.title': `Hoe Aymere kan helpen`,
  'huisarts.help.item1.title': `Praktijkdashboard`,
  'huisarts.help.item1.body': `Alle belangrijke operationele cijfers van de praktijk in één overzicht.`,
  'huisarts.help.item1.list': `Gemiddelde wachttijd &middot; aantal consulten &middot; bezettingsgraad &middot; telefoniedruk &middot; no-shows &middot; beschikbare capaciteit &middot; drukte per dagdeel &middot; inzet van huisarts, assistent en POH`,
  'huisarts.help.item2.title': `Vraagvoorspelling`,
  'huisarts.help.item2.body': `Voorspel hoeveel afspraken, telefoontjes en andere zorgvragen de praktijk per dag of week kan verwachten.`,
  'huisarts.help.item2.fit': `Hierdoor kan personeel eerder worden afgestemd op verwachte drukte.`,
  'huisarts.help.item3.title': `Capaciteits- &amp; personeelsplanning`,
  'huisarts.help.item3.body': `Breng verwachte zorgvraag en beschikbare personeelsuren samen.`,
  'huisarts.help.item3.fit': `Hierdoor wordt zichtbaar wanneer te weinig of juist te veel capaciteit beschikbaar is.`,
  'huisarts.help.item4.title': `Agenda- &amp; procesoptimalisatie`,
  'huisarts.help.item4.body': `Analyseer hoe afspraken, spoedslots en verschillende typen consulten slimmer over de week kunnen worden verdeeld.`,
  'huisarts.help.item4.fit': `Beschikbare tijd wordt beter benut zonder automatisch extra personeel nodig te hebben.`,
  'huisarts.help.item5.title': `Scenarioanalyse`,
  'huisarts.help.item5.body': `Bereken vooraf wat veranderingen waarschijnlijk betekenen voor wachttijden en capaciteit.`,
  'huisarts.help.item5.list': `&ldquo;Wat gebeurt er bij 0,5 FTE extra?&rdquo; &middot; &ldquo;Kunnen we meer patiënten aannemen?&rdquo; &middot; &ldquo;Wat gebeurt er wanneer openingstijden veranderen?&rdquo; &middot; &ldquo;Wat gebeurt er wanneer consultslots anders worden verdeeld?&rdquo;`,
  'huisarts.practice.title': `Hoe ziet dat er<br><span class="accent">in de praktijk uit?</span>`,
  'huisarts.practice.body': `Een huisartspraktijk merkt dat patiënten op bepaalde dagen moeilijk een afspraak kunnen krijgen, terwijl op andere momenten capaciteit overblijft. Aymere analyseert historische afspraken, zorgvraag en personeelsbeschikbaarheid. Daaruit wordt zichtbaar op welke momenten tekorten ontstaan en hoe beschikbare uren beter kunnen worden verdeeld. De praktijk krijgt vervolgens concrete stuurinformatie via een dashboard, forecast of optimalisatieadvies.`,
  'huisarts.cta.title': `Wilt u weten waar uw praktijk<br><span class="accent">capaciteit verliest?</span>`,

  // ---- Over ----
  'over.eyebrow': `Over Aymere`,
  'over.h1': `Over Aymere.`,
  'over.lead': `Aymere is een Nederlands data-consultancybedrijf voor het mkb.`,
  'over.intro1': `Wij combineren econometrie, operations research en data science om organisaties te helpen beter te voorspellen, plannen en beslissen.`,
  'over.intro2': `Onze kracht ligt niet alleen in het analyseren van data. We vertalen complexe data naar concrete oplossingen die binnen een organisatie gebruikt kunnen worden.`,
  'over.team.eyebrow': `Ons team`,
  'over.team.m1.role': `Oprichter &middot; Data Consultant`,
  'over.team.m1.expertise': `Econometrie &middot; Operations Research &middot; Forecasting`,
  'over.team.m2.role': `Data Consultant`,
  'over.team.m2.expertise': `Data Science &middot; Statistiek &middot; Dashboarding`,
  'over.team.m3.role': `Data Consultant`,
  'over.team.m3.expertise': `Forecasting &middot; Optimalisatie &middot; Data-analyse`,
  'over.team.m4.role': `Data Consultant`,
  'over.team.m4.expertise': `Predictive Analytics &middot; Statistiek &middot; Data Science`,
  'over.team.m5.role': `Klantrelaties &middot; Woordvoerder`,
  'over.expertise.eyebrow': `Onze expertise`,
  'over.expertise.lead': `Onze technische basis waarmee we uw vraagstukken oplossen.`,
  'over.expertise.item1': `Econometrie`,
  'over.expertise.item2': `Operations Research`,
  'over.expertise.item3': `Data Science`,
  'over.expertise.item4': `Forecasting`,
  'over.expertise.item5': `Optimalisatie`,
  'over.expertise.item6': `Dashboarding`,
  'over.expertise.item7': `Statistische analyse`,

  // ---- Contact ----
  'contact.eyebrow': `Contact`,
  'contact.h1': `Laten we uw uitdaging<br><span class="accent">bespreken.</span>`,
  'contact.lead': `Wilt u meer inzicht, beter vooruit plannen of capaciteit slimmer inzetten? Neem vrijblijvend contact met ons op.`,
  'contact.founder': `Oprichter, Aymere`,
  'contact.location': `Amsterdam &middot; Nederland`,
  'contact.note': `U hoeft nog niet te weten welk model, dashboard of welke analyse u nodig heeft. Dat is onze taak. Begin met uw vraag.`,
  'contact.form.eyebrow': `Start een gesprek`,
  'contact.form.name.label': `Naam`,
  'contact.form.name.ph': `Uw naam`,
  'contact.form.org.label': `Bedrijfsnaam`,
  'contact.form.org.ph': `Uw bedrijfsnaam`,
  'contact.form.email.label': `E-mailadres`,
  'contact.form.email.ph': `u@bedrijf.nl`,
  'contact.form.phone.label': `Telefoonnummer`,
  'contact.form.phone.ph': `06 12345678`,
  'contact.form.optional': `Optioneel`,
  'contact.form.msg.label': `Uw vraag of uitdaging`,
  'contact.form.msg.ph': `Vertel ons over de vraag, uitdaging of beslissing waar u tegenaan loopt…`,
  'contact.form.submit': `Verstuur <span class="arrow">&rarr;</span>`,
  'contact.form.direct': `Plan direct een kennismaking`,
  'contact.form.note': `Bedankt — uw bericht is genoteerd. We nemen contact met u op. (Dit formulier is nog niet gekoppeld; sluit het aan op e-mail of een service voor livegang.)`,

};

var AYMERE_I18N_EN = {
  // ---- Shared: navigation, footer, generic CTA ----
  'nav.home': `Home`,
  'nav.diensten': `Services`,
  'nav.oplossingen': `Solutions`,
  'nav.huisarts': `GP practices`,
  'nav.retail': `Retail &amp; wholesale`,
  'nav.zakelijk': `Professional services`,
  'nav.over': `About Aymere`,
  'nav.contact': `Contact`,
  'nav.soon': `Coming soon`,
  'nav.toggle': `Open menu`,
  'footer.nav.heading': `Navigation`,
  'footer.contact.heading': `Contact`,
  'footer.legal.heading': `Legal`,
  'footer.linkedin': `LinkedIn`,

  // ---- Home (index.html) ---- (NL rewritten; EN pending)

  // ---- Diensten ----
  'diensten.eyebrow': `Our services`,
  'diensten.h1': `From better insight<br><span class="accent">to smarter planning.</span>`,
  'diensten.lead': `From better insight to smart forecasts and optimised planning.`,
  'diensten.pull': `From insight<br>to action.`,
  'diensten.item1.pillar': `Dashboards`,
  'diensten.item1.title': `KPI dashboards &amp; management information`,
  'diensten.item1.body': `We bring key business information together in one clear dashboard, so you can see straight away how your organisation is performing and where attention is needed.`,
  'diensten.item1.list': `Revenue &middot; costs &middot; capacity &middot; productivity &middot; occupancy rate &middot; waiting times &middot; staff deployment &middot; customer or patient volume`,
  'diensten.item1.fit': `Suited to organisations that have plenty of data but not enough overview.`,
  'diensten.item2.pillar': `Forecast`,
  'diensten.item2.title': `Forecasting`,
  'diensten.item2.body': `We use historical data and statistical models to forecast future developments.`,
  'diensten.item2.list': `Demand forecasting &middot; revenue forecast &middot; predicting busy periods &middot; staffing needs &middot; capacity needs &middot; seasonal patterns`,
  'diensten.item2.fit': `Suited to organisations that want to plan further ahead.`,
  'diensten.item3.pillar': `Plan`,
  'diensten.item3.title': `Planning &amp; optimisation`,
  'diensten.item3.body': `We calculate how people, time and resources can be deployed as efficiently as possible.`,
  'diensten.item3.list': `Staff planning &middot; roster optimisation &middot; capacity planning &middot; schedule optimisation &middot; inventory planning &middot; resource allocation`,
  'diensten.item3.fit': `Suited to organisations where capacity is scarce and planning becomes complex.`,
  'diensten.item4.pillar': `Analyse`,
  'diensten.item4.title': `Data analysis`,
  'diensten.item4.body': `We examine business data to reveal bottlenecks, patterns, waste and opportunities.`,
  'diensten.item4.list': `Process analysis &middot; performance analysis &middot; customer analysis &middot; scenario analysis &middot; bottleneck analysis`,
  'diensten.item4.fit': `Suited to organisations that want to understand why certain results occur.`,
  'diensten.item5.pillar': `Monitor`,
  'diensten.item5.title': `Ongoing monitoring &amp; advice`,
  'diensten.item5.body': `We can keep dashboards, forecasts and optimisation models up to date after delivery.`,
  'diensten.item5.list': `Monthly KPI monitoring &middot; periodic forecast &middot; replanning &middot; management reporting &middot; periodic advice`,
  'diensten.item5.fit': `Suited to organisations that want to steer on data structurally.`,

  // ---- Oplossingen ----
  'oplossingen.eyebrow': `Solutions by sector`,
  'oplossingen.h1': `Solutions for your sector.`,
  'oplossingen.lead': `Data challenges differ per organisation. That's why we translate our expertise into concrete solutions per sector.`,
  'oplossingen.pull': `One approach.<br>Applied per sector.`,
  'oplossingen.item1.body': `More control over care demand, waiting times, staff planning and capacity.`,
  'oplossingen.item1.cta': `View solutions for GP practices <span class="arrow">&rarr;</span>`,
  'oplossingen.item2.body': `Better forecasting of demand, inventory and commercial performance.`,
  'oplossingen.item3.body': `More control over capacity, planning, productivity and future demand.`,

  // ---- Huisartspraktijken ----
  'huisarts.eyebrow': `Solutions &middot; GP practices`,
  'huisarts.h1': `Less waiting time. Better planning. More control over capacity.`,
  'huisarts.lead': `Aymere helps GP practices deploy available time and staff more intelligently using data.`,
  'huisarts.problems.title': `Many GP practices run into<br><span class="accent">the same problems</span>`,
  'huisarts.problems.item1': `Full schedules`,
  'huisarts.problems.item2': `Long waiting times`,
  'huisarts.problems.item3': `High phone call pressure`,
  'huisarts.problems.item4': `Staff shortages`,
  'huisarts.problems.item5': `Difficult staff scheduling`,
  'huisarts.problems.item6': `Insufficient insight into peak moments`,
  'huisarts.problems.item7': `Limited room for new patients`,
  'huisarts.help.title': `How Aymere can help`,
  'huisarts.help.item1.title': `Practice dashboard`,
  'huisarts.help.item1.body': `All key operational figures for the practice in a single overview.`,
  'huisarts.help.item1.list': `Average waiting time &middot; number of consultations &middot; occupancy rate &middot; phone call pressure &middot; no-shows &middot; available capacity &middot; busyness per part of day &middot; deployment of GP, assistant and nurse practitioner`,
  'huisarts.help.item2.title': `Demand forecasting`,
  'huisarts.help.item2.body': `Predict how many appointments, phone calls and other care requests the practice can expect per day or week.`,
  'huisarts.help.item2.fit': `This allows staffing to be aligned with expected busyness earlier.`,
  'huisarts.help.item3.title': `Capacity &amp; staff planning`,
  'huisarts.help.item3.body': `Bring expected care demand and available staff hours together.`,
  'huisarts.help.item3.fit': `This reveals when too little or too much capacity is available.`,
  'huisarts.help.item4.title': `Schedule &amp; process optimisation`,
  'huisarts.help.item4.body': `Analyse how appointments, urgent slots and different consultation types can be distributed more intelligently across the week.`,
  'huisarts.help.item4.fit': `Available time is used better without automatically needing extra staff.`,
  'huisarts.help.item5.title': `Scenario analysis`,
  'huisarts.help.item5.body': `Calculate in advance what changes are likely to mean for waiting times and capacity.`,
  'huisarts.help.item5.list': `&ldquo;What happens with 0.5 FTE extra?&rdquo; &middot; &ldquo;Can we take on more patients?&rdquo; &middot; &ldquo;What happens if opening hours change?&rdquo; &middot; &ldquo;What happens if consultation slots are divided differently?&rdquo;`,
  'huisarts.practice.title': `What does that look like<br><span class="accent">in practice?</span>`,
  'huisarts.practice.body': `A GP practice notices that patients struggle to get an appointment on certain days, while capacity goes unused at other times. Aymere analyses historical appointments, care demand and staff availability. This reveals at which moments shortages arise and how available hours can be better distributed. The practice then receives concrete steering information via a dashboard, forecast or optimisation advice.`,
  'huisarts.cta.title': `Want to know where your practice<br><span class="accent">is losing capacity?</span>`,

  // ---- Over ----
  'over.eyebrow': `About Aymere`,
  'over.h1': `About Aymere.`,
  'over.lead': `Aymere is a Dutch data consultancy for SMEs.`,
  'over.intro1': `We combine econometrics, operations research and data science to help organisations forecast, plan and decide better.`,
  'over.intro2': `Our strength lies not only in analysing data. We translate complex data into concrete solutions that can actually be used within an organisation.`,
  'over.team.eyebrow': `Our team`,
  'over.team.m1.role': `Founder &middot; Data Consultant`,
  'over.team.m1.expertise': `Econometrics &middot; Operations Research &middot; Forecasting`,
  'over.team.m2.role': `Data Consultant`,
  'over.team.m2.expertise': `Data Science &middot; Statistics &middot; Dashboarding`,
  'over.team.m3.role': `Data Consultant`,
  'over.team.m3.expertise': `Forecasting &middot; Optimisation &middot; Data Analysis`,
  'over.team.m4.role': `Data Consultant`,
  'over.team.m4.expertise': `Predictive Analytics &middot; Statistics &middot; Data Science`,
  'over.team.m5.role': `Client Relations &middot; Spokesperson`,
  'over.expertise.eyebrow': `Our expertise`,
  'over.expertise.lead': `The technical foundation we use to solve your questions.`,
  'over.expertise.item1': `Econometrics`,
  'over.expertise.item2': `Operations Research`,
  'over.expertise.item3': `Data Science`,
  'over.expertise.item4': `Forecasting`,
  'over.expertise.item5': `Optimisation`,
  'over.expertise.item6': `Dashboarding`,
  'over.expertise.item7': `Statistical Analysis`,

  // ---- Contact ----
  'contact.eyebrow': `Contact`,
  'contact.h1': `Let's discuss<br><span class="accent">your challenge.</span>`,
  'contact.lead': `Want more insight, better forward planning or smarter use of capacity? Get in touch, no obligation.`,
  'contact.founder': `Founder, Aymere`,
  'contact.location': `Amsterdam &middot; The Netherlands`,
  'contact.note': `You don't need to know yet what model, dashboard or analysis you need. That's our job. Start with your question.`,
  'contact.form.eyebrow': `Start a conversation`,
  'contact.form.name.label': `Name`,
  'contact.form.name.ph': `Your name`,
  'contact.form.org.label': `Company name`,
  'contact.form.org.ph': `Your company name`,
  'contact.form.email.label': `Email address`,
  'contact.form.email.ph': `you@company.com`,
  'contact.form.phone.label': `Phone number`,
  'contact.form.phone.ph': `06 12345678`,
  'contact.form.optional': `Optional`,
  'contact.form.msg.label': `Your question or challenge`,
  'contact.form.msg.ph': `Tell us about the question, challenge or decision you're facing…`,
  'contact.form.submit': `Send <span class="arrow">&rarr;</span>`,
  'contact.form.direct': `Book an introduction directly`,
  'contact.form.note': `Thanks — your message has been noted. We'll be in touch. (This form isn't connected yet; wire it up to email or a service before launch.)`,

};

(function () {
  var STORAGE_KEY = 'aymere-lang';
  var DEFAULT_LANG = 'nl';
  var DICTS = { nl: AYMERE_I18N_NL, en: AYMERE_I18N_EN };

  function getLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'nl' || stored === 'en') return stored;
    } catch (e) { /* localStorage unavailable — fall back to default */ }
    return DEFAULT_LANG;
  }

  function translate(key) {
    var dict = DICTS[getLang()] || DICTS[DEFAULT_LANG];
    return dict[key];
  }

  function apply(lang) {
    var dict = DICTS[lang] || DICTS[DEFAULT_LANG];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
    });
    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-lang-toggle]').forEach(function (toggle) {
      toggle.querySelectorAll('[data-lang-option]').forEach(function (btn) {
        var active = btn.getAttribute('data-lang-option') === lang;
        btn.setAttribute('aria-current', active ? 'true' : 'false');
      });
    });
  }

  function setLang(lang) {
    if (lang !== 'nl' && lang !== 'en') return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
    apply(lang);
  }

  function init() {
    apply(getLang());
    document.querySelectorAll('[data-lang-option]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-option'));
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed for main.js (e.g. the contact-form stub message) and for debugging.
  window.AYMERE_T = translate;
  window.AYMERE_SET_LANG = setLang;
  window.AYMERE_GET_LANG = getLang;
})();
