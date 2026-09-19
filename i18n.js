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
  'nav.andere': `Andere organisaties`,
  'nav.werkwijze': `Werkwijze`,
  'nav.over': `Over Aymere`,
  'nav.contact': `Contact`,
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
  'diensten.eyebrow': `Diensten`,
  'diensten.h1': `Van inzicht naar een onderbouwde beslissing`,
  'diensten.lead': `We combineren analyse, visualisatie, forecasting en optimalisatie op basis van het vraagstuk dat uw organisatie wil oplossen.`,
  'diensten.fitLabel': `Geschikt wanneer`,
  'diensten.deliverLabel': `Mogelijke opleveringen`,

  'diensten.item1.pillar': `Dashboards`,
  'diensten.item1.title': `Managementinformatie en KPI-dashboards`,
  'diensten.item1.intro': `We brengen relevante bedrijfsinformatie samen in een helder en bruikbaar overzicht. Niet zoveel mogelijk cijfers, maar de informatie die nodig is om prestaties te volgen en tijdig bij te sturen.`,
  'diensten.item1.fit1': `&mdash; informatie verspreid staat over meerdere bronnen`,
  'diensten.item1.fit2': `&mdash; rapportages veel handmatig werk kosten`,
  'diensten.item1.fit3': `&mdash; KPI-definities niet overal gelijk worden gebruikt`,
  'diensten.item1.fit4': `&mdash; management onvoldoende actueel overzicht heeft`,
  'diensten.item1.deliver1': `&mdash; operationeel dashboard`,
  'diensten.item1.deliver2': `&mdash; managementdashboard`,
  'diensten.item1.deliver3': `&mdash; KPI-structuur en definities`,
  'diensten.item1.deliver4': `&mdash; periodieke managementrapportage`,
  'diensten.item1.deliver5': `&mdash; monitoring van capaciteit, productiviteit, bezetting of wachttijden`,
  'diensten.item1.sourcesLabel': `Mogelijke databronnen`,
  'diensten.item1.sources': `Excel- en CSV-bestanden, planningssystemen, financiële software, CRM, telefonie en andere operationele systemen, afhankelijk van beschikbare export- of koppelmogelijkheden.`,
  'diensten.item1.cta': `Bespreek een dashboardvraagstuk <span class="arrow">&rarr;</span>`,

  'diensten.item2.pillar': `Diagnose`,
  'diensten.item2.title': `Data-analyse en diagnose`,
  'diensten.item2.intro': `We onderzoeken wat er in de organisatie gebeurt en welke patronen, knelpunten of afwijkingen zichtbaar worden in de beschikbare gegevens.`,
  'diensten.item2.fit1': `&mdash; resultaten onverwacht veranderen`,
  'diensten.item2.fit2': `&mdash; processen structureel vastlopen`,
  'diensten.item2.fit3': `&mdash; capaciteit verloren lijkt te gaan`,
  'diensten.item2.fit4': `&mdash; verschillende afdelingen of bronnen elkaar tegenspreken`,
  'diensten.item2.fit5': `&mdash; een belangrijke beslissing eerst onderzocht moet worden`,
  'diensten.item2.deliver1': `&mdash; verkennende analyse`,
  'diensten.item2.deliver2': `&mdash; proces- of performanceanalyse`,
  'diensten.item2.deliver3': `&mdash; segmentanalyse`,
  'diensten.item2.deliver4': `&mdash; oorzaken- en samenhanganalyse`,
  'diensten.item2.deliver5': `&mdash; scenarioanalyse`,
  'diensten.item2.deliver6': `&mdash; managementrapport met bevindingen en aanbevelingen`,
  'diensten.item2.cta': `Bespreek een analysevraag <span class="arrow">&rarr;</span>`,

  'diensten.item3.pillar': `Voorspellen`,
  'diensten.item3.title': `Forecasting en voorspellende modellen`,
  'diensten.item3.intro': `Historische gegevens kunnen worden gebruikt om toekomstige vraag, werkdruk, omzet of benodigde capaciteit beter te ramen. Iedere voorspelling bevat onzekerheid. Daarom maken we aannames, bandbreedtes en beperkingen inzichtelijk.`,
  'diensten.item3.fit1': `&mdash; vraag of werkdruk sterk wisselt`,
  'diensten.item3.fit2': `&mdash; seizoenspatronen aanwezig zijn`,
  'diensten.item3.fit3': `&mdash; personeels- of voorraadbeslissingen vooruit moeten worden genomen`,
  'diensten.item3.fit4': `&mdash; historische gemiddelden onvoldoende houvast bieden`,
  'diensten.item3.deliver1': `&mdash; vraagvoorspelling`,
  'diensten.item3.deliver2': `&mdash; omzetforecast`,
  'diensten.item3.deliver3': `&mdash; capaciteitsforecast`,
  'diensten.item3.deliver4': `&mdash; personeelsbehoefteraming`,
  'diensten.item3.deliver5': `&mdash; analyse van seizoenspatronen`,
  'diensten.item3.deliver6': `&mdash; dashboard met forecast en onzekerheidsmarges`,
  'diensten.item3.cta': `Bespreek een forecastvraagstuk <span class="arrow">&rarr;</span>`,

  'diensten.item4.pillar': `Plannen`,
  'diensten.item4.title': `Planning en optimalisatie`,
  'diensten.item4.intro': `Wanneer mensen, tijd, ruimtes of middelen schaars zijn, berekenen we welke verdeling binnen de gestelde voorwaarden het beste aansluit op het gekozen doel.`,
  'diensten.item4.fit1': `&mdash; planning veel handmatig werk kost`,
  'diensten.item4.fit2': `&mdash; verschillende belangen en randvoorwaarden samenkomen`,
  'diensten.item4.fit3': `&mdash; vraag en capaciteit onvoldoende aansluiten`,
  'diensten.item4.fit4': `&mdash; meerdere scenario's objectief moeten worden vergeleken`,
  'diensten.item4.deliver1': `&mdash; personeels- of roosteroptimalisatie`,
  'diensten.item4.deliver2': `&mdash; capaciteitsplanning`,
  'diensten.item4.deliver3': `&mdash; agenda-optimalisatie`,
  'diensten.item4.deliver4': `&mdash; resource allocation`,
  'diensten.item4.deliver5': `&mdash; scenariotool`,
  'diensten.item4.deliver6': `&mdash; optimalisatiemodel met praktisch implementatieadvies`,
  'diensten.item4.cta': `Bespreek een planningsvraagstuk <span class="arrow">&rarr;</span>`,

  'diensten.item5.pillar': `Monitoren`,
  'diensten.item5.title': `Monitoring en doorontwikkeling`,
  'diensten.item5.intro': `Een dashboard, forecast of model kan periodiek worden bijgewerkt wanneer nieuwe gegevens beschikbaar komen. Zo blijft de oplossing aansluiten op veranderingen in de organisatie.`,
  'diensten.item5.supportLabel': `Mogelijke ondersteuning`,
  'diensten.item5.support1': `&mdash; periodieke actualisatie`,
  'diensten.item5.support2': `&mdash; kwaliteitscontrole`,
  'diensten.item5.support3': `&mdash; monitoring van KPI's`,
  'diensten.item5.support4': `&mdash; herberekening van forecasts`,
  'diensten.item5.support5': `&mdash; herijking van modellen`,
  'diensten.item5.support6': `&mdash; uitbreiding met nieuwe databronnen of vraagstukken`,
  'diensten.item5.cta': `Bespreek doorlopende ondersteuning <span class="arrow">&rarr;</span>`,

  'diensten.close.title': `Niet zeker welke dienst past?`,
  'diensten.close.body': `Dat hoeft ook niet. Vertel ons welk probleem, proces of besluit u wilt onderzoeken. Wij bepalen vervolgens welke aanpak daarbij past.`,
  'diensten.close.cta': `Begin met uw vraagstuk <span class="arrow">&rarr;</span>`,

  // ---- Oplossingen ----
  'oplossingen.eyebrow': `Oplossingen`,
  'oplossingen.h1': `Expertise toegepast op uw operationele werkelijkheid`,
  'oplossingen.lead': `De techniek kan vergelijkbaar zijn, maar het vraagstuk, de randvoorwaarden en de beschikbare gegevens verschillen per organisatie. Daarom beginnen we altijd bij de praktijk.`,

  'oplossingen.item1.body': `Meer inzicht in zorgvraag, wachttijden, telefoniedruk, agenda's, personeelscapaciteit en beschikbare ruimte.`,
  'oplossingen.item1.listLabel': `Mogelijke vraagstukken`,
  'oplossingen.item1.q1': `&mdash; Wanneer ontstaan structurele piekmomenten?`,
  'oplossingen.item1.q2': `&mdash; Hoe sluiten roosters aan op de verwachte zorgvraag?`,
  'oplossingen.item1.q3': `&mdash; Waar blijft capaciteit onbenut?`,
  'oplossingen.item1.q4': `&mdash; Wat is het waarschijnlijke effect van extra personeelsuren?`,
  'oplossingen.item1.q5': `&mdash; Hoe kunnen verschillende consulttypen beter worden verdeeld?`,
  'oplossingen.item1.q6': `&mdash; Welke KPI's geven de praktijk werkelijk stuurinformatie?`,
  'oplossingen.item1.cta': `Bekijk oplossingen voor huisartspraktijken <span class="arrow">&rarr;</span>`,

  'oplossingen.item2.title': `Andere organisaties`,
  'oplossingen.item2.body': `AYMERE ondersteunt ook organisaties buiten de huisartsenzorg bij vraagstukken rond prestaties, capaciteit, forecasting, personeelsinzet en planning.`,
  'oplossingen.item2.listLabel': `Voorbeelden`,
  'oplossingen.item2.ex1': `&mdash; Toekomstige vraag of omzet ramen`,
  'oplossingen.item2.ex2': `&mdash; Personeelsbehoefte voorspellen`,
  'oplossingen.item2.ex3': `&mdash; Verlies van tijd of capaciteit onderzoeken`,
  'oplossingen.item2.ex4': `&mdash; Operationele KPI's samenbrengen`,
  'oplossingen.item2.ex5': `&mdash; Scenario's vooraf doorrekenen`,
  'oplossingen.item2.ex6': `&mdash; Complexe planning optimaliseren`,
  'oplossingen.item2.close': `We werken niet vanuit een standaard sectorpakket, maar onderzoeken eerst of het vraagstuk, de data en onze expertise goed op elkaar aansluiten.`,
  'oplossingen.item2.cta': `Leg uw vraagstuk aan ons voor <span class="arrow">&rarr;</span>`,

  // ---- Huisartspraktijken ----
  'huisarts.eyebrow': `Oplossingen voor huisartspraktijken`,
  'huisarts.h1': `Meer grip op zorgvraag, planning en beschikbare capaciteit`,
  'huisarts.lead': `AYMERE helpt huisartspraktijken operationele patronen zichtbaar te maken, toekomstige drukte beter te ramen en verschillende capaciteits- en planningsscenario's te vergelijken.`,
  'huisarts.ctaSector': `Bespreek uw praktijksituatie <span class="arrow">&rarr;</span>`,
  'huisarts.hero.note': `Een eerste gesprek kan plaatsvinden zonder patiëntgegevens te delen.`,

  'huisarts.problems.title': `Herkenbare operationele vraagstukken`,
  'huisarts.problems.item1.title': `Wisselende drukte`,
  'huisarts.problems.item1.body': `De zorgvraag, telefoniedruk en agenda's zijn niet iedere dag of ieder dagdeel gelijk belast.`,
  'huisarts.problems.item2.title': `Beperkt inzicht in capaciteit`,
  'huisarts.problems.item2.body': `Het is lastig om in één overzicht te zien hoeveel tijd daadwerkelijk beschikbaar en benut is.`,
  'huisarts.problems.item3.title': `Roosters sluiten niet altijd aan`,
  'huisarts.problems.item3.body': `De beschikbare personeelsuren en de momenten waarop de zorgvraag piekt, vallen niet altijd samen.`,
  'huisarts.problems.item4.title': `Lange of wisselende wachttijden`,
  'huisarts.problems.item4.body': `Het is niet direct duidelijk welke patronen, consulttypen of capaciteitsbeperkingen bijdragen aan wachttijden.`,
  'huisarts.problems.item5.title': `No-shows en vrijgekomen plekken`,
  'huisarts.problems.item5.body': `Uitval en annuleringen kunnen beschikbare tijd creëren die niet altijd opnieuw wordt benut.`,
  'huisarts.problems.item6.title': `Moeilijke scenario's`,
  'huisarts.problems.item6.body': `Het effect van extra FTE, gewijzigde openingstijden of een andere agenda-indeling is vooraf moeilijk te beoordelen.`,

  'huisarts.help.title': `Mogelijke oplossingen`,
  'huisarts.help.item1.title': `Praktijkdashboard`,
  'huisarts.help.item1.body': `Breng operationele indicatoren overzichtelijk samen, zoals afspraken, no-shows, telefoniedruk, wachttijden, capaciteit en drukte per dagdeel.`,
  'huisarts.help.item2.title': `Vraagvoorspelling`,
  'huisarts.help.item2.body': `Raam hoeveel afspraken, telefoontjes of andere zorgvragen op toekomstige momenten kunnen worden verwacht.`,
  'huisarts.help.item3.title': `Capaciteitsanalyse`,
  'huisarts.help.item3.body': `Vergelijk verwachte zorgvraag met beschikbare uren van huisartsen, assistenten en andere praktijkmedewerkers.`,
  'huisarts.help.item4.title': `Agenda- en procesanalyse`,
  'huisarts.help.item4.body': `Onderzoek hoe verschillende afspraaktypen, spoedruimte en beschikbare uren over de week zijn verdeeld.`,
  'huisarts.help.item5.title': `Scenarioanalyse`,
  'huisarts.help.item5.body': `Vergelijk bijvoorbeeld wat verandert bij 0,5 FTE extra, wanneer openingstijden wijzigen of wanneer consultslots anders worden verdeeld.`,
  'huisarts.help.item5.q1': `&mdash; Wat verandert er bij 0,5 FTE extra?`,
  'huisarts.help.item5.q2': `&mdash; Wat gebeurt er wanneer openingstijden wijzigen?`,
  'huisarts.help.item5.q3': `&mdash; Wat is het verwachte effect van een andere verdeling van consultslots?`,
  'huisarts.help.item5.q4': `&mdash; Wanneer ontstaat naar verwachting een tekort aan capaciteit?`,
  'huisarts.help.item5.q5': `&mdash; Onder welke voorwaarden kunnen mogelijk meer patiënten worden bediend?`,

  'huisarts.data.title': `Welke gegevens kunnen relevant zijn?`,
  'huisarts.data.intro': `Welke gegevens nodig zijn, hangt af van het gekozen vraagstuk. Mogelijke bronnen zijn:`,
  'huisarts.data.source1': `&mdash; geaggregeerde afspraakgegevens`,
  'huisarts.data.source2': `&mdash; consulttypen`,
  'huisarts.data.source3': `&mdash; no-shows en annuleringen`,
  'huisarts.data.source4': `&mdash; beschikbare personeelsuren`,
  'huisarts.data.source5': `&mdash; roosters`,
  'huisarts.data.source6': `&mdash; telefonievolumes en wachttijden`,
  'huisarts.data.source7': `&mdash; drukte per dag of dagdeel`,
  'huisarts.data.source8': `&mdash; geaggregeerde patiëntvolumes`,
  'huisarts.data.source9': `&mdash; financiële of operationele gegevens, wanneer relevant`,
  'huisarts.data.close': `We beginnen met de minimaal noodzakelijke gegevens. Voor een eerste verkenning zijn geen patiëntgegevens nodig.`,

  'huisarts.pilot.title': `Pilotwerkwijze`,
  'huisarts.pilot.intro': `Een gecontroleerde route van analyse naar praktijk.`,
  'huisarts.pilot.step1.title': `Vraagstuk afbakenen`,
  'huisarts.pilot.step1.body': `We kiezen één concreet operationeel probleem en bepalen hoe toegevoegde waarde wordt beoordeeld.`,
  'huisarts.pilot.step2.title': `Data en privacy beoordelen`,
  'huisarts.pilot.step2.body': `We onderzoeken welke gegevens beschikbaar en noodzakelijk zijn en welke privacyafspraken nodig zijn.`,
  'huisarts.pilot.step3.title': `Historische analyse`,
  'huisarts.pilot.step3.body': `We onderzoeken patronen, datakwaliteit en de haalbaarheid van de gekozen aanpak.`,
  'huisarts.pilot.step4.title': `Prototype ontwikkelen`,
  'huisarts.pilot.step4.body': `We bouwen een eerste dashboard, analyse, forecast of optimalisatieoplossing.`,
  'huisarts.pilot.step5.title': `Historisch valideren`,
  'huisarts.pilot.step5.body': `We toetsen hoe de oplossing presteert op reeds bekende perioden en situaties.`,
  'huisarts.pilot.step6.title': `Shadow mode`,
  'huisarts.pilot.step6.body': `Waar passend draait de oplossing tijdelijk mee zonder zelfstandig processen of beslissingen aan te sturen.`,
  'huisarts.pilot.step7.title': `Gecontroleerde pilot`,
  'huisarts.pilot.step7.body': `Alleen wanneer de eerdere stappen voldoende vertrouwen geven, wordt de toepassing beperkt in de praktijk getest.`,
  'huisarts.pilot.step8.title': `Evaluatie`,
  'huisarts.pilot.step8.body': `We beoordelen bruikbaarheid, nauwkeurigheid, beperkingen en eventuele vervolgstappen.`,

  'huisarts.faq.title': `Veelgestelde vragen`,
  'huisarts.faq.q1': `Moeten wij overstappen naar een ander HIS?`,
  'huisarts.faq.a1': `Niet automatisch. Eerst wordt onderzocht welke export- of koppelmogelijkheden binnen de bestaande systemen beschikbaar zijn. Tijdens een eerste pilot kan soms met gecontroleerde exports worden gewerkt.`,
  'huisarts.faq.q2': `Hebben jullie patiëntgegevens nodig?`,
  'huisarts.faq.a2': `Niet voor het eerste gesprek. Ook tijdens een analyse streven we naar dataminimalisatie en het vermijden van direct identificerende gegevens wanneer die niet noodzakelijk zijn.`,
  'huisarts.faq.q3': `Vervangt AYMERE medische besluitvorming?`,
  'huisarts.faq.a3': `Nee. De huidige dienstverlening richt zich op operationele analyse, forecasting, planning en capaciteitsvraagstukken. Medische beslissingen blijven onder verantwoordelijkheid van bevoegde zorgprofessionals.`,
  'huisarts.faq.q4': `Hoeveel tijd kost dit onze medewerkers?`,
  'huisarts.faq.a4': `Dat hangt af van het vraagstuk en de toegankelijkheid van de data. Vooraf wordt duidelijk gemaakt welke input, uitleg en controles van de praktijk nodig zijn.`,
  'huisarts.faq.q5': `Krijgen we alleen een dashboard?`,
  'huisarts.faq.a5': `Niet noodzakelijk. Afhankelijk van het vraagstuk kan de oplevering bestaan uit een analyse, forecast, scenariotool, optimalisatiemodel, dashboard, managementrapport of combinatie daarvan.`,
  'huisarts.faq.q6': `Kunnen resultaten worden gegarandeerd?`,
  'huisarts.faq.a6': `Nee. De bruikbaarheid hangt onder andere af van datakwaliteit, beschikbare historie, gekozen aannames en implementatie. Deze beperkingen worden vooraf en tijdens het project inzichtelijk gemaakt.`,

  'huisarts.cta.title': `Welk operationeel vraagstuk speelt in uw praktijk?`,
  'huisarts.cta.body': `Bespreek vrijblijvend waar uw praktijk momenteel tegenaan loopt. U hoeft vooraf geen technische oplossing te kiezen en tijdens het eerste gesprek hoeven geen patiëntgegevens te worden gedeeld.`,

  // ---- Over ----
  'over.eyebrow': `Over AYMERE`,
  'over.h1': `Complexe data begrijpelijk maken. Beslissingen beter onderbouwen.`,
  'over.intro1': `AYMERE is een Amsterdams data- en intelligencebureau. We combineren econometrie, operations research en data science om operationele vraagstukken te analyseren, toekomstige ontwikkelingen te ramen en mogelijke keuzes te vergelijken.`,
  'over.intro2': `Onze ambitie is niet om organisaties zoveel mogelijk cijfers te geven. We willen complexe informatie vertalen naar een oplossing die begrijpelijk, controleerbaar en bruikbaar is in de dagelijkse praktijk.`,

  'over.principles.eyebrow': `Principes`,
  'over.principles.title': `Hoe wij willen werken`,
  'over.principles.item1.title': `Beginnen bij het probleem`,
  'over.principles.item1.body': `We kiezen geen techniek voordat duidelijk is welke vraag of beslissing moet worden ondersteund.`,
  'over.principles.item2.title': `Eerlijk over onzekerheid`,
  'over.principles.item2.body': `Voorspellingen en modellen zijn geen zekerheden. Aannames, bandbreedtes en beperkingen moeten zichtbaar blijven.`,
  'over.principles.item3.title': `Bruikbaar boven indrukwekkend`,
  'over.principles.item3.body': `Een complexe oplossing heeft weinig waarde wanneer niemand ermee kan werken. Daarom zijn uitleg en implementatie onderdeel van het project.`,
  'over.principles.item4.title': `Zorgvuldig met data`,
  'over.principles.item4.body': `We streven naar duidelijke doelen, minimale gegevensverwerking en passende afspraken over toegang en gebruik.`,

  'over.team.eyebrow': `Ons team`,
  'over.team.m1.role': `Founder &amp; Client Strategy`,
  'over.team.m1.bio': `Richt zich op de vertaling van operationele vraagstukken naar een passende aanpak, in nauwe afstemming met de klant. Eerste aanspreekpunt voor nieuwe samenwerkingen.`,
  'over.team.m2.role': `Data &amp; Analytics`,
  'over.team.m2.bio': `Onderzoekt patronen, knelpunten en samenhang in bedrijfsdata. Vertaalt data-analyse naar bruikbare inzichten.`,
  'over.team.m3.role': `Forecasting &amp; Optimization`,
  'over.team.m3.bio': `Ontwikkelt voorspellende modellen en optimalisatieoplossingen voor capaciteits- en planningsvraagstukken.`,
  'over.team.m4.role': `Data Science &amp; Predictive Analytics`,
  'over.team.m4.bio': `Werkt aan statistische modellen en voorspellende analyses die operationele beslissingen onderbouwen.`,
  'over.team.m5.role': `Client Relations`,
  'over.team.m5.bio': `Onderhoudt het contact met klanten tijdens en na een project en zorgt dat de oplossing goed aansluit op de praktijk.`,

  'over.close.title': `Expertise is pas waardevol wanneer zij toepasbaar wordt`,
  'over.close.body': `Daarom combineren we technische analyse met duidelijke communicatie, realistische implementatie en aandacht voor de mensen die met de uitkomsten moeten werken.`,

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

  // ---- Werkwijze (werkwijze.html) ----
  'werkwijze.eyebrow': `Werkwijze`,
  'werkwijze.h1': `Eerst het juiste vraagstuk. Daarna de techniek.`,
  'werkwijze.lead': `Een model of dashboard heeft alleen waarde wanneer het aansluit op een concrete beslissing, betrouwbare gegevens en de dagelijkse praktijk van de organisatie.`,

  'werkwijze.step1.title': `Verkennen`,
  'werkwijze.step1.intro': `We bespreken:`,
  'werkwijze.step1.li1': `&mdash; welk probleem wordt ervaren`,
  'werkwijze.step1.li2': `&mdash; welke beslissing ondersteund moet worden`,
  'werkwijze.step1.li3': `&mdash; wie de oplossing gaat gebruiken`,
  'werkwijze.step1.li4': `&mdash; welke systemen en gegevens beschikbaar zijn`,
  'werkwijze.step1.li5': `&mdash; welke randvoorwaarden gelden`,

  'werkwijze.step2.title': `Afbakenen`,
  'werkwijze.step2.intro': `We leggen vast:`,
  'werkwijze.step2.li1': `&mdash; de centrale onderzoeksvraag`,
  'werkwijze.step2.li2': `&mdash; scope en uitzonderingen`,
  'werkwijze.step2.li3': `&mdash; benodigde gegevens`,
  'werkwijze.step2.li4': `&mdash; verwachte oplevering`,
  'werkwijze.step2.li5': `&mdash; verantwoordelijkheden`,
  'werkwijze.step2.li6': `&mdash; planning`,
  'werkwijze.step2.li7': `&mdash; criteria voor evaluatie`,

  'werkwijze.step3.title': `Data beoordelen`,
  'werkwijze.step3.intro': `We controleren onder andere:`,
  'werkwijze.step3.li1': `&mdash; definities`,
  'werkwijze.step3.li2': `&mdash; volledigheid`,
  'werkwijze.step3.li3': `&mdash; actualiteit`,
  'werkwijze.step3.li4': `&mdash; ontbrekende waarden`,
  'werkwijze.step3.li5': `&mdash; dubbeltellingen`,
  'werkwijze.step3.li6': `&mdash; inconsistenties`,
  'werkwijze.step3.li7': `&mdash; representativiteit`,
  'werkwijze.step3.li8': `&mdash; privacy- en toegangsvoorwaarden`,

  'werkwijze.step4.title': `Ontwikkelen`,
  'werkwijze.step4.intro': `Afhankelijk van het project ontwikkelen we:`,
  'werkwijze.step4.li1': `&mdash; analyse`,
  'werkwijze.step4.li2': `&mdash; dashboard`,
  'werkwijze.step4.li3': `&mdash; forecast`,
  'werkwijze.step4.li4': `&mdash; scenariotool`,
  'werkwijze.step4.li5': `&mdash; optimalisatiemodel`,
  'werkwijze.step4.li6': `&mdash; managementrapportage`,

  'werkwijze.step5.title': `Valideren`,
  'werkwijze.step5.body': `We testen aannames, berekeningen en uitkomsten. Waar relevant vergelijken we modeluitkomsten met historische realiteit en brengen we onzekerheid in beeld.`,

  'werkwijze.step6.title': `Implementeren`,
  'werkwijze.step6.intro': `We leveren niet alleen bestanden of modellen op, maar leggen ook uit:`,
  'werkwijze.step6.li1': `&mdash; hoe de oplossing werkt`,
  'werkwijze.step6.li2': `&mdash; hoe uitkomsten moeten worden geïnterpreteerd`,
  'werkwijze.step6.li3': `&mdash; welke beperkingen bestaan`,
  'werkwijze.step6.li4': `&mdash; wie verantwoordelijk is voor gebruik en actualisatie`,

  'werkwijze.step7.title': `Evalueren &amp; verbeteren`,
  'werkwijze.step7.body': `Na implementatie kan worden beoordeeld of de oplossing voldoende bruikbaar is, moet worden aangepast of periodiek moet worden geactualiseerd.`,

  // ---- Privacy (privacy.html) ----
  'privacy.h1': `Privacy en verantwoord datagebruik`,
  'privacy.intro': `AYMERE werkt met data om organisaties beter inzicht te geven in operationele processen en beslissingen. Zorgvuldige omgang met die data is daarom een vast onderdeel van ieder project.`,
  'privacy.item1.title': `Doelbinding`,
  'privacy.item1.body': `Vooraf wordt bepaald voor welk concreet doel gegevens worden gebruikt. Gegevens worden niet zonder overleg voor andere doeleinden ingezet.`,
  'privacy.item2.title': `Dataminimalisatie`,
  'privacy.item2.body': `We streven ernaar alleen gegevens te gebruiken die noodzakelijk zijn voor het afgesproken vraagstuk.`,
  'privacy.item3.title': `Toegang`,
  'privacy.item3.body': `Toegang tot projectgegevens wordt beperkt tot personen die deze voor hun werkzaamheden nodig hebben.`,
  'privacy.item4.title': `Bewaartermijnen`,
  'privacy.item4.body': `Voor ieder project moeten passende afspraken worden gemaakt over opslag, bewaartermijnen, overdracht en verwijdering.`,
  'privacy.item5.title': `Zorggegevens`,
  'privacy.item5.body': `Bij zorggerelateerde projecten wordt extra terughoudend omgegaan met persoonsgegevens. Waar mogelijk wordt gewerkt met geaggregeerde, gepseudonimiseerde of niet direct identificerende gegevens.`,
  'privacy.item6.title': `Menselijke verantwoordelijkheid`,
  'privacy.item6.body': `Analyses en modellen dienen ter ondersteuning. Zij vervangen niet automatisch professionele, bestuurlijke of medische verantwoordelijkheid.`,
  'privacy.item7.title': `Overeenkomsten`,
  'privacy.item7.body': `Waar nodig worden afspraken vastgelegd in een opdrachtbevestiging, geheimhoudingsovereenkomst, verwerkersovereenkomst of andere passende overeenkomst.`,
  'privacy.item8.title': `Contact`,
  'privacy.item8.body': `Vragen over privacy en gegevensverwerking kunnen worden gericht aan: <a href="mailto:contact@aymere.nl" style="color:inherit;text-decoration:underline">contact@aymere.nl</a>`,

};

var AYMERE_I18N_EN = {
  // ---- Shared: navigation, footer, generic CTA ----
  'nav.home': `Home`,
  'nav.diensten': `Services`,
  'nav.oplossingen': `Solutions`,
  'nav.huisarts': `GP practices`,
  'nav.over': `About Aymere`,
  'nav.contact': `Contact`,
  'nav.toggle': `Open menu`,
  'footer.nav.heading': `Navigation`,
  'footer.contact.heading': `Contact`,
  'footer.legal.heading': `Legal`,
  'footer.linkedin': `LinkedIn`,

  // ---- Home (index.html) ---- (NL rewritten; EN pending)

  // ---- Diensten ----
  // ---- Diensten (NL rewritten; EN pending) ----

  // ---- Oplossingen ----
  // ---- Oplossingen (NL rewritten; EN pending) ----

  // ---- Huisartspraktijken ----
  // ---- Huisartspraktijken (NL rewritten; EN pending) ----

  // ---- Over ----
  // ---- Over AYMERE (NL rewritten; EN pending) ----

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
