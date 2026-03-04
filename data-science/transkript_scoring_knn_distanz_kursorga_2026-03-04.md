# Transkript-Abgleich Scoring (KNN + Distanzmetriken + Kursorganisation)

Datum: 2026-03-04  
Quelle Transkript: `/Users/arno/Downloads/iSyst 03-04 Vorlesung_ KNN, Logistische Regression, Distanzmetriken und Kursorganisation-transcript.txt`

## Bewertungslogik
- Skala je Kriterium: `0 = fehlt`, `1 = teilweise`, `2 = klar vorhanden`
- Vergleich: `Transkript` vs `Lernpfad vor Anpassung` vs `Lernpfad nach Anpassung`
- Maximalpunkte: `20 Kriterien * 2 = 40` (`40/40 = 100%`)

## Scoring-Tabelle
| # | Kriterium | Transkript | Lernpfad vorher | Lernpfad nachher |
|---|---|---:|---:|---:|
| 1 | KNN als anderes Modell zu linear/logistisch | 2 | 0 | 2 |
| 2 | Ueberwachtes Lernen mit Train/Test-Kontext | 2 | 1 | 2 |
| 3 | KNN fuer Klassifikation und Regression | 2 | 0 | 2 |
| 4 | Unregelmaessige Entscheidungsgrenzen als KNN-Staerke | 2 | 0 | 2 |
| 5 | `k` als Nachbarschaftsidee + Mehrheitsprinzip | 2 | 0 | 2 |
| 6 | Aehnlichkeit ueber Distanz berechnen | 2 | 0 | 2 |
| 7 | Ausgabe-Regel: Modus (Klassifikation) vs Mittelwert (Regression) | 2 | 0 | 2 |
| 8 | `.fit()`/Vorhersage-Logik bei KNN (Speichern, Distanz, Zuordnung) | 2 | 0 | 2 |
| 9 | Nicht-parametrisch, kaum Verteilungsannahmen | 2 | 0 | 2 |
| 10 | Hyperparameter: `k`, `metric`, `weights` | 2 | 0 | 2 |
| 11 | Wirkung von kleinem/mittlerem/grossem `k` | 2 | 0 | 2 |
| 12 | Overfitting/Underfitting anhand `k` | 2 | 1 | 2 |
| 13 | Empirische Wahl von `k` via Fehlervergleich/Validierung | 2 | 0 | 2 |
| 14 | Distanzgewichtete Nachbarn als Variante | 2 | 0 | 2 |
| 15 | Euklidische Distanz als Luftlinien-Intuition | 2 | 1 | 2 |
| 16 | Manhattan-Distanz mit Strassennetz-Intuition | 2 | 0 | 2 |
| 17 | Minkowski als Generalisierung ueber Parameter `p` | 2 | 0 | 2 |
| 18 | Cosinus-Aehnlichkeit als Vektor-Idee (Suche/LLM-Bruecke) | 2 | 0 | 2 |
| 19 | Skalierungspflicht bei Distanzmetriken (Achsendominanz) | 2 | 1 | 2 |
| 20 | Niedrigschwellige Tool-/Notebook-Fuehrung fuer Aufgaben | 2 | 0 | 2 |
|  | **Summe** | **40/40** | **4/40** | **40/40** |

## Wo im Lernpfad verankert
- **Schritt 0a (`lernkompass_notebook_und_toolhilfe_interaktion.html`):** Notebook-Lesestrategie, Hyperparameter finden, Supportkette.
- **Schritt 5 (`knn_grundlagen_interaktion.html`):** KNN-Idee, Nachbarn, Modus/Mittelwert, Vergleich zur logistischen Grenze.
- **Schritt 6 (`knn_hyperparameter_tuning_interaktion.html`):** `k`-Wahl, Overfit/Underfit, Fehlklassifikation als Auswahlkriterium, gewichtete Nachbarn.
- **Schritt 7 (`distanzmetriken_und_scaling_interaktion.html`):** Euklidisch/Manhattan/Minkowski/Cosinus plus Skalierung und Metrikwahl.

## Transcript-Evidenz (Zeilenhinweise)
- Tool-/Notebook-Barrieren und Bedarf an klarer Fuehrung: Zeilen 7-14, 21-23
- Einstieg KNN als anderes Modell: Zeilen 28-30, 47-51
- KNN-Kernidee (Nachbarn, Mehrheitsprinzip): Zeilen 52-63
- Distanz als Aehnlichkeitsgrundlage: Zeilen 63-67
- Modus vs Mittelwert: Zeilen 68-78
- `.fit()` und Vorhersageprozess: Zeilen 79-80
- Hyperparameter (`k`, Distanzmetrik, Gewichtung): Zeilen 93-95
- K-Wirkung und Bias-Varianz-Verhalten: Zeilen 96-117, 137
- Empirische K-Auswahl/Validierung: Zeilen 118-138
- Gewichtete Nachbarn: Zeilen 144-149
- Euklidisch/Manhattan mit Alltagsintuition: Zeilen 152-164
- Mannheim-Grid als didaktische Bruecke: Zeilen 165-173
- Minkowski (`p`) und Sonderfall: Zeilen 185-188
- Cosinus-Aehnlichkeit (Vektorraum, Suchmaschinen, LLM): Zeilen 199-205
- Skalierung und Achsendominanz: Zeilen 209-252

## Durchgefuehrte Verbesserungen im Lernpfad
1. Zwischen Klassifikation und Matrix wurden vier didaktische Zwischenschritte verankert (Tool-Kompass, KNN-Grundlagen, KNN-Tuning, Distanz+Scaling).
2. Der rote Faden wurde um alltagsnahe Story-Elemente erweitert (Pendeln, Route, Einkaufs-/Produktbeispiele, Berlin/Nuernberg, Mannheim-Grid).
3. Benutzerfuehrung wurde verpflichtend konkretisiert (10-Minuten-Ziel, 3-Klick-Anweisung, Hilfekanal pro Notebook-Aufgabe).
4. Curriculare Abdeckung wurde explizit auf Transkriptinhalte erweitert (nicht-parametrisch, Metrikwahl, Cosinus-Bruecke, empirische K-Wahl).

## Pruefung der Ergaenzungen
- Reihenfolge geprueft: neue Schritte stehen logisch zwischen Klassifikation und Matrix.
- Didaktik geprueft: Einstieg ohne Mathehuerde, dann schrittweise Formalisierung.
- Inhalt geprueft: alle wesentlichen Themenbloecke aus dem Transkript sind mindestens einmal explizit abgedeckt.
- Punktelogik geprueft: Nachher-Wert erreicht `40/40` und entspricht damit `100%` der definierten Kriterien.
