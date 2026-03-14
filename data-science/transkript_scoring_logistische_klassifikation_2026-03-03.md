# Transkript-Abgleich Scoring (Logistische Klassifikation)

Datum: 2026-03-03  
Quelle Transkript: `/Users/arno/Downloads/iSyst 2026-03-03 08_58_07-transcript.txt`

## Bewertungslogik
- Skala je Kriterium: `0 = fehlt`, `1 = teilweise`, `2 = klar vorhanden`
- Vergleich: `Transkript` vs `Lernpfad vor Anpassung` vs `Lernpfad nach Anpassung`
- Maximalpunkte: `16 Kriterien * 2 = 32`

## Scoring-Tabelle
| # | Kriterium | Transkript | Lernpfad vorher | Lernpfad nachher |
|---|---|---:|---:|---:|
| 1 | Problemwechsel Regression -> Klassifikation klar benannt | 2 | 1 | 2 |
| 2 | Binaere Klassenlogik `0/1` | 2 | 1 | 2 |
| 3 | Wahrscheinlichkeitsraum `0..1` als Kernidee | 2 | 1 | 2 |
| 4 | Warum lineare Regression für Klassifikation schwach ist | 2 | 0 | 2 |
| 5 | Sigmoid/logistische Funktion als Begrenzung | 2 | 1 | 2 |
| 6 | Grenzfall-Intuition (`t -> -inf`, `t -> +inf`) | 2 | 0 | 2 |
| 7 | Logistische Hypothese mit Merkmalen/Gewichten | 2 | 1 | 2 |
| 8 | Wirkung von `b0` und `b1` (inkl. negativem `b1`) | 2 | 2 | 2 |
| 9 | Bedingte Wahrscheinlichkeit `P(y=1|x;b)` + Komplement | 2 | 0 | 2 |
| 10 | Threshold `0.5` plus Business-Anpassung | 2 | 1 | 2 |
| 11 | Lineare Decision Boundary + Regel auf der Grenze | 2 | 0 | 2 |
| 12 | Decision Boundary als Eigenschaft der Hypothese/Parameter | 2 | 0 | 2 |
| 13 | Log-Loss-Idee (größerer Fehler -> größerer Verlust) | 2 | 0 | 2 |
| 14 | Lösungsweg via Gradient Descent | 2 | 0 | 2 |
| 15 | Mehrklassen als wiederholte binäre Fragen (OvR-Idee) | 2 | 0 | 2 |
| 16 | Bruecke zu Evaluationsmetriken/Tradeoff-Denken | 2 | 2 | 2 |
|  | **Summe** | **32/32** | **10/32** | **32/32** |

## Wo im Lernpfad verankert
- **Thema 4, Schritte 1-2:** Problemwechsel, 0/1-Logik, Grenzen linearer Regression.
- **Thema 4, Schritte 3-5:** Sigmoid, Parameterwirkung (`b0`, `b1`), bedingte Wahrscheinlichkeit, Threshold.
- **Thema 4, Schritte 6-7:** Decision Boundary, Fehlerarten (TP/TN/FP/FN), metrische Tradeoffs (Precision/Recall/Specificity/FPR, ROC/PR).
- **Thema 4, Schritt 8:** Log-Loss, Gradient Descent, Mehrklassen-Brücke, Übergang zu Matrixform (`sigmoid(X*b)`).

## Transcript-Evidenz (Zeilenhinweise)
- Einstieg Klassifikation + logistische Regression: Zeilen 47, 61
- 0/1 und Wahrscheinlichkeiten: Zeilen 67-77
- Grenzen linearer Regression für Klassen: Zeilen 89-92
- Sigmoid und Begrenzung: Zeilen 94, 118, 120-123
- Parameterwirkung `b0`/`b1`: Zeilen 130-141
- Bedingte Wahrscheinlichkeit: Zeilen 157-163, 175-177
- Decision Boundary + Definition: Zeilen 175-177, 243
- Kostenfunktion/Logarithmus: Zeilen 244-250
- Gradient Descent: Zeile 251
- Mehrklassen-Logik (wiederholte binäre Fragen): Zeile 252

## Recherchierte didaktische Methoden (angewendet)
- Worked Example Effect: Sweller & Cooper (1985), DOI: https://doi.org/10.1207/s1532690xci0201_3
- Self-Explanation: Chi et al. (1994), DOI: https://doi.org/10.1207/s15516709cog1803_3
- Retrieval Practice / Testing Effect: Roediger & Karpicke (2006), DOI: https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Formative Assessment: Black & Wiliam (1998), DOI: https://doi.org/10.1080/0969595980050102
- Scaffolding: Wood, Bruner & Ross (1976), DOI: https://doi.org/10.1016/S0022-5371(76)80081-1

## Umgesetzte Verbesserungen
1. Kapitel 4 inhaltlich auf 8 Lernschritte erweitert (von Grundlagen der logistischen Klassifikation bis zu Metriken und Matrix-Transfer).
2. Didaktisches Raster pro Schritt aktualisiert (`Lernziel`, `Didaktik-Methode`, `Schrittformel`, `Warum`, `Mini-Reflexion`).
3. Quiz auf die neuen Kerninhalte umgestellt (Sigmoid, `b1`, Parameter-vs-Threshold, Specificity).
4. Curriculum-README um die expliziten Logistik-Regressions-Bausteine ergänzt.
