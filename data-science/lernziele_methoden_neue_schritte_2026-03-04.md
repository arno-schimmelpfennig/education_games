# Lernziele und Didaktische Optimierung (Neue Schritte aus Transkript 03-04)

Datum: 2026-03-04  
Bezug: Erweiterungen in `README.md` (Schritte `0a`, `5`, `6`, `7`)

## Vorgehen
- Jeder neue Schritt wurde in einzelne Lernziele zerlegt.
- Je Lernziel wurde eine bewährte Methode ausgewählt, die für Einsteiger ohne IT-/Mathehintergrund besonders robust ist.
- Pro Lernziel wurde die Schrittgestaltung konkret optimiert (Einstieg, Aktivität, Rückmeldung, Transfer).

## Lernziel-Mapping
| Neuer Schritt | Lernziel | Bewährte Methode | Warum diese Methode hier am besten passt | Optimierte Schrittgestaltung |
|---|---|---|---|---|
| 0a Lernkompass | Lernende können in einem Notebook Aufgabe, Eingabe und erwartete Ausgabe sicher unterscheiden | Scaffolding (schrittweise Hilfen) | Das Transkript zeigt Überforderung bei unklaren Aufgaben; Scaffolding reduziert Startbarrieren | Start mit "Lesebrille für Notebooks" (3 Farben: Aufgabe, Code, Ergebnis), danach geführte 1-Minuten-Übung |
| 0a Lernkompass | Lernende finden Hyperparameter (`k`, `alpha`, `metric`) in typischen Bibliotheksaufrufen | Worked Example + Fading | Ein konkretes Vorbild verhindert Suchfrust; anschließend Hilfeabbau fördert Selbstständigkeit | Erst voll gelöstes Beispiel, dann halboffene Aufgabe, dann freier Transferfall |
| 5 KNN-Grundlagen | Lernende erklären KNN in Alltagssprache ("ähnliche Dinge liegen nah") | Guided Discovery mit konkretem Beispiel | Die KNN-Idee ist intuitiv, wenn Lernende erst selbst tippen und dann visualisiert sehen | Katzen/Hühner- oder Produktregal-Beispiel: erst Vermutung, dann Distanzlinien einblenden |
| 5 KNN-Grundlagen | Lernende unterscheiden Modus (Klassifikation) und Mittelwert (Regression) korrekt | Dual Coding (Wort + kleine Tabelle) | Begriffe werden stabiler, wenn verbale und visuelle Darstellung kombiniert werden | Zwei Mini-Karten: links Klassenmehrheit, rechts Zahlenmittel; danach 1 Entscheidungsfrage |
| 6 KNN-Hyperparameter | Lernende erkennen Overfit/Underfit als Folge falscher `k`-Wahl | Prediction-Observation-Explanation (POE) | Die Wirkung von `k` wird erst durch Vorhersage und Gegenprüfung wirklich verstanden | k-Slider mit drei Pflichtstopps (`1`, `10`, `100`) und kurzer Begründung pro Stopp |
| 6 KNN-Hyperparameter | Lernende wählen `k` empirisch über Validierungsfehler statt Bauchgefühl | Formative Assessment | Sofortiges Feedback auf Fehlklassifikationen stärkt Diagnosekompetenz | "Teste 5 Werte" -> Tabelle mit Fehlern füllen -> bestes `k` markieren -> Rückmeldung |
| 7 Distanzmetriken + Scaling | Lernende wählen zwischen euklidischer, Manhattan- und Minkowski-Distanz passend zum Kontext | Contrasting Cases | Gegenüberstellung ähnlicher, aber relevanter Fälle erleichtert Metrikwahl | Paarvergleich: Luftlinie (Berlin->Nürnberg) vs Straßennetz (Mannheim-Grid), dann Auswahl mit Begründung |
| 7 Distanzmetriken + Scaling | Lernende begründen, warum Skalierung vor Distanzmodellen nötig ist | Self-Explanation | Eigenes Erklären deckt Missverständnisse bei Zahlenbereichen schnell auf | Vorher/Nachher-Beispiel mit stark unterschiedlichen Achsenskalierungen, dann kurze freie Erklärung |
| 7 Distanzmetriken + Scaling | Lernende kennen Cosinus-Ähnlichkeit als Brücke zu Suche/LLM, ohne Formelüberfrachtung | Anchored Analogy | Für Einsteiger ist Anwendungsbezug wichtiger als Herleitung | "Ähnliche Suchbegriffe" als Vektoridee, danach 1 Transferfrage ("Wann wäre Cosinus besser als Luftlinie?") |

## Feingranulare Optimierung pro Schritt
### Schritt 0a: Lernkompass
- Einstieg: 60-Sekunden-Orientierung "Wo schaue ich zuerst hin?"
- Aktion: Markiere in einer Beispielzelle `Aufgabe`, `Parameter`, `Output`.
- Rückmeldung: Sofortige Auflösung mit Positionshinweis im Notebook.
- Transfer: Gleiche Suche in einer zweiten, leicht veränderten Zelle.

### Schritt 5: KNN-Grundlagen
- Einstieg: Alltagsfrage "Welchem Regal ordnen wir ein neues Produkt zu?"
- Aktion: Lernende wählen Klasse zuerst ohne Formel.
- Rückmeldung: Distanzlinien und Nachbarn werden eingeblendet.
- Transfer: Gleiche Logik für Regression (Mittelwert statt Mehrheitsklasse).

### Schritt 6: KNN-Hyperparameter
- Einstieg: Aussagekarte "Ein kleines `k` ist immer besser" (bewusst provokant).
- Aktion: 3 feste `k`-Werte vergleichen, Fehler zählen.
- Rückmeldung: Modellgrenze und Fehlerrate simultan anzeigen.
- Transfer: Eigenen `k`-Vorschlag für neuen Datensatz begründen.

### Schritt 7: Distanzmetriken und Skalierung
- Einstieg: Routenvergleich (Luftlinie vs Straßennetz).
- Aktion: Metrik je Szenario auswählen und kurz begründen.
- Rückmeldung: Entscheidungsbaum zeigt passende/ungeeignete Metrik.
- Transfer: Skalierungsaufgabe mit zwei Features in sehr unterschiedlichen Wertebereichen.

## Abnahmekriterien für die neuen Schritte
- Niedrigschwelligkeit: Jede Seite ist ohne Formelwissen startbar.
- Benutzerführung: Jede Interaktion nennt exakt den nächsten Klick.
- Verständlichkeit: Jeder Fachbegriff hat ein alltagsnahes Gegenbild.
- Roter Faden: Jede neue Seite beantwortet explizit "Warum kommt als nächstes Thema Matrix?".
- Transfer: Am Ende jeder Seite mindestens eine Mini-Entscheidungsaufgabe.

## Methodische Referenzen (Auswahl)
- Scaffolding: Wood, Bruner, Ross (1976), DOI: https://doi.org/10.1016/S0022-5371(76)80081-1
- Worked Example Effect: Sweller, Cooper (1985), DOI: https://doi.org/10.1207/s1532690xci0201_3
- Self-Explanation: Chi et al. (1994), DOI: https://doi.org/10.1207/s15516709cog1803_3
- Retrieval/Formative Testing: Roediger, Karpicke (2006), DOI: https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Formative Assessment: Black, Wiliam (1998), DOI: https://doi.org/10.1080/0969595980050102
