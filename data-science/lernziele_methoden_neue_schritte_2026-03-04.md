# Lernziele und Didaktische Optimierung (Neue Schritte aus Transkript 03-04)

Datum: 2026-03-04  
Bezug: Erweiterungen in `README.md` (Schritte `0a`, `5`, `6`, `7`)

## Vorgehen
- Jeder neue Schritt wurde in einzelne Lernziele zerlegt.
- Je Lernziel wurde eine bewaehrte Methode ausgewaehlt, die fuer Einsteiger ohne IT-/Mathehintergrund besonders robust ist.
- Pro Lernziel wurde die Schrittgestaltung konkret optimiert (Einstieg, Aktivitaet, Rueckmeldung, Transfer).

## Lernziel-Mapping
| Neuer Schritt | Lernziel | Bewaehrte Methode | Warum diese Methode hier am besten passt | Optimierte Schrittgestaltung |
|---|---|---|---|---|
| 0a Lernkompass | Lernende koennen in einem Notebook Aufgabe, Eingabe und erwartete Ausgabe sicher unterscheiden | Scaffolding (schrittweise Hilfen) | Das Transkript zeigt Ueberforderung bei unklaren Aufgaben; Scaffolding reduziert Startbarrieren | Start mit "Lesebrille fuer Notebooks" (3 Farben: Aufgabe, Code, Ergebnis), danach gefuehrte 1-Minuten-Uebung |
| 0a Lernkompass | Lernende finden Hyperparameter (`k`, `alpha`, `metric`) in typischen Bibliotheksaufrufen | Worked Example + Fading | Ein konkretes Vorbild verhindert Suchfrust; anschliessend Hilfeabbau foerdert Selbststaendigkeit | Erst voll geloestes Beispiel, dann halboffene Aufgabe, dann freier Transferfall |
| 5 KNN-Grundlagen | Lernende erklaeren KNN in Alltagssprache ("aehnliche Dinge liegen nah") | Guided Discovery mit konkretem Beispiel | Die KNN-Idee ist intuitiv, wenn Lernende erst selbst tippen und dann visualisiert sehen | Katzen/Huehner- oder Produktregal-Beispiel: erst Vermutung, dann Distanzlinien einblenden |
| 5 KNN-Grundlagen | Lernende unterscheiden Modus (Klassifikation) und Mittelwert (Regression) korrekt | Dual Coding (Wort + kleine Tabelle) | Begriffe werden stabiler, wenn verbale und visuelle Darstellung kombiniert werden | Zwei Mini-Karten: links Klassenmehrheit, rechts Zahlenmittel; danach 1 Entscheidungsfrage |
| 6 KNN-Hyperparameter | Lernende erkennen Overfit/Underfit als Folge falscher `k`-Wahl | Prediction-Observation-Explanation (POE) | Die Wirkung von `k` wird erst durch Vorhersage und Gegenpruefung wirklich verstanden | k-Slider mit drei Pflichtstopps (`1`, `10`, `100`) und kurzer Begruendung pro Stopp |
| 6 KNN-Hyperparameter | Lernende waehlen `k` empirisch ueber Validierungsfehler statt Bauchgefuehl | Formative Assessment | Sofortiges Feedback auf Fehlklassifikationen staerkt Diagnosekompetenz | "Teste 5 Werte" -> Tabelle mit Fehlern fuellen -> bestes `k` markieren -> Rueckmeldung |
| 7 Distanzmetriken + Scaling | Lernende waehlen zwischen euklidischer, Manhattan- und Minkowski-Distanz passend zum Kontext | Contrasting Cases | Gegenueberstellung aehnlicher, aber relevanter Faelle erleichtert Metrikwahl | Paarvergleich: Luftlinie (Berlin->Nuernberg) vs Strassennetz (Mannheim-Grid), dann Auswahl mit Begruendung |
| 7 Distanzmetriken + Scaling | Lernende begruenden, warum Skalierung vor Distanzmodellen noetig ist | Self-Explanation | Eigenes Erklaeren deckt Missverstaendnisse bei Zahlenbereichen schnell auf | Vorher/Nachher-Beispiel mit stark unterschiedlichen Achsenskalierungen, dann kurze freie Erklaerung |
| 7 Distanzmetriken + Scaling | Lernende kennen Cosinus-Aehnlichkeit als Bruecke zu Suche/LLM, ohne Formelueberfrachtung | Anchored Analogy | Fuer Einsteiger ist Anwendungsbezug wichtiger als Herleitung | "Aehnliche Suchbegriffe" als Vektoridee, danach 1 Transferfrage ("Wann waere Cosinus besser als Luftlinie?") |

## Feingranulare Optimierung pro Schritt
### Schritt 0a: Lernkompass
- Einstieg: 60-Sekunden-Orientierung "Wo schaue ich zuerst hin?"
- Aktion: Markiere in einer Beispielzelle `Aufgabe`, `Parameter`, `Output`.
- Rueckmeldung: Sofortige Aufloesung mit Positionshinweis im Notebook.
- Transfer: Gleiche Suche in einer zweiten, leicht veraenderten Zelle.

### Schritt 5: KNN-Grundlagen
- Einstieg: Alltagsfrage "Welchem Regal ordnen wir ein neues Produkt zu?"
- Aktion: Lernende waehlen Klasse zuerst ohne Formel.
- Rueckmeldung: Distanzlinien und Nachbarn werden eingeblendet.
- Transfer: Gleiche Logik fuer Regression (Mittelwert statt Mehrheitsklasse).

### Schritt 6: KNN-Hyperparameter
- Einstieg: Aussagekarte "Ein kleines `k` ist immer besser" (bewusst provokant).
- Aktion: 3 feste `k`-Werte vergleichen, Fehler zaehlen.
- Rueckmeldung: Modellgrenze und Fehlerrate simultan anzeigen.
- Transfer: Eigenen `k`-Vorschlag fuer neuen Datensatz begruenden.

### Schritt 7: Distanzmetriken und Skalierung
- Einstieg: Routenvergleich (Luftlinie vs Strassennetz).
- Aktion: Metrik je Szenario auswaehlen und kurz begruenden.
- Rueckmeldung: Entscheidungsbaum zeigt passende/ungeeignete Metrik.
- Transfer: Skalierungsaufgabe mit zwei Features in sehr unterschiedlichen Wertebereichen.

## Abnahmekriterien fuer die neuen Schritte
- Niedrigschwelligkeit: Jede Seite ist ohne Formelwissen startbar.
- Benutzerfuehrung: Jede Interaktion nennt exakt den naechsten Klick.
- Verstaendlichkeit: Jeder Fachbegriff hat ein alltagsnahes Gegenbild.
- Roter Faden: Jede neue Seite beantwortet explizit "Warum kommt als naechstes Thema Matrix?".
- Transfer: Am Ende jeder Seite mindestens eine Mini-Entscheidungsaufgabe.

## Methodische Referenzen (Auswahl)
- Scaffolding: Wood, Bruner, Ross (1976), DOI: https://doi.org/10.1016/S0022-5371(76)80081-1
- Worked Example Effect: Sweller, Cooper (1985), DOI: https://doi.org/10.1207/s1532690xci0201_3
- Self-Explanation: Chi et al. (1994), DOI: https://doi.org/10.1207/s15516709cog1803_3
- Retrieval/Formative Testing: Roediger, Karpicke (2006), DOI: https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Formative Assessment: Black, Wiliam (1998), DOI: https://doi.org/10.1080/0969595980050102
