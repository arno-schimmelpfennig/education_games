# Data Science Lernpfad (Didaktik + Umsetzungsregeln)

Dieses Dokument fixiert die Ausrichtung des gesamten Data-Science-Pfads, damit neue Seiten auch ohne Chat-Kontext konsistent weitergebaut werden.

## Zielgruppe
- Einsteiger mit Berufsbezug.
- Teilnehmende ohne IT- oder Mathe-Vorkenntnisse.
- Teilnehmende mit aelteren Vorkenntnissen, die schnell wieder einsteigen wollen.
- Fokus: vom Verstehen direkt in anwendbare Projektpraxis.

## Didaktischer Kern
- Von Theorie in Anwendung: erst visuelle Intuition, dann Python-Workflow.
- Niedrigschwelliger Einstieg: jede Seite startet mit Alltagssprache statt Fachbegriffen.
- Jeder Themenblock beantwortet immer:
  - Was kann diese Methode?
  - Wo liegt ihre Grenze?
  - Warum kommt als naechstes Thema eine andere Herangehensweise?
- Schrittlogik: Aufgaben-/Beobachtungsanweisung im Schritt, Aufloesung im Folgekontext.
- Benutzerfuehrung: "Was tue ich jetzt?" ist in jedem Schritt sofort sichtbar.
- Sprache: einfach, konkret, fachlich korrekt.

## Lernpfad-Reihenfolge
### Einsteiger-Start (optional vor dem Kernpfad)
0. `bias-varianz-einsteiger/bias_varianz_einsteiger_interaktion.html` (ohne Mathe, Fokus auf Bias/Varianz-Grundintuition)
0a. `lernkompass_notebook_und_toolhilfe_interaktion.html` (neu, niedrigschwellige Orientierung fuer Notebook-Aufgaben, Hilfekette und Begriffe)
0b. `unit_testing_interaktion.html` (optional: pytest, TDD, Fixtures, Data-Testing als Querschnittskompetenz; kein Pflicht-Folgeschritt nach KNN)

### Kernpfad (an Sitzung 1 + Folgetermin ausgerichtet)
1. `lineare_regression_interaktion.html`
2. `bias_variance.html`
3. `variance_ml.html`
4. `regularization_ml.html`
5. `gradient_descent_interaktion.html`
6. `klassifikation_metriken_interaktion.html` (Evaluation Metrics: Konfusionsmatrix, Precision/Recall, Threshold, ROC/AUC, Regressionsmetriken)
7. `logistic_regression.html` (neu: Sigmoid, Entscheidungsgrenze, Log-Loss, Threshold, Multiclass)
8. `feature_engineering.html` (neu: Imputation, Encoding, Scaling, Binning, Feature Expansion, Pipeline als Browser-Kapitel)
9. `model_tuning.html` (neu: Scaling, Cross Validation, Grid Search, Random Search, Pipelines, Decision Boundaries und Diabetes-Challenge als Werkstatt-Kapitel)
10. `knn_grundlagen_interaktion.html` (neu: KNN-Idee, Klassifikation/Regression, Mehrheitsentscheid)
11. `knn_hyperparameter_tuning_interaktion.html` (neu: Wahl von `k`, Overfit/Underfit, Validierungslogik, Gewichtung)
12. `distanzmetriken_und_scaling_interaktion.html` (neu: Euklidisch, Manhattan, Minkowski, Cosinus, Skalierung)
12a. `decision_trees_interaktion.html` (neu: Ja/Nein-Fragen, Purity, Gini, Rekursion, Pruning)
12b. `ensemble_methods_interaktion.html` (neu: Voting, Bagging, Random Forest, Boosting, Stacking, Feature Importance)
12c. `ml_finale_xgboost.html` (neu: Boosting-Mechanik, XGBoost, Overfitting, Stakeholder-Dilemma, Decision Boundaries, Bias-Varianz-Matrix)
13. `matrix_interaktion.html`
14. `matrizenmultiplikation_interaktion.html`

### Archivierte Altseiten
- Ersetzte Legacy-Seiten liegen unter `archive/legacy_lernpfad/`.
- Dazu gehoeren die frueheren Bias-/Regularisierungsseiten und die alten Code-Praxis-Seiten.
- Der aktive neue Lernpfad verlinkt nicht mehr auf diese Dateien.

Hinweis: Die neuen Schritte 0a, 5, 6 und 7 wurden aus dem Transkript 03-04 abgeleitet und sind fachlich verpflichtend fuer den roten Faden.
Hinweis zur Reihenfolge: Im aktiven Kernpfad fuehrt `Evaluation Metrics` zu `logistic_regression.html`, dann zu `feature_engineering.html`, danach zu `model_tuning.html` und erst dann zu `knn_grundlagen_interaktion.html`. `unit_testing_interaktion.html` ist ein optionaler Querschnittsbaustein und kein Standard-Nachfolger von KNN.
Hinweis zum Abschluss des klassischen ML-Blocks: Nach `ensemble_methods_interaktion.html` folgt jetzt `ml_finale_xgboost.html` als zusammenfassendes Finale, bevor der Pfad in `matrix_interaktion.html` weitergeht.

## Roter Faden (Pfadlogik mit Storytelling)
Story-Figur fuer den Einstieg: **Mira (34), lebt in Koeln, pendelt, kauft ein, plant ihr Monatsbudget und will Daten "alltagstauglich" verstehen.**

0. Bias-Varianz-Einsteiger:
Niedrigschwelliger Einstieg ueber Punktwolken: Bias = Schieflage, Varianz = Streuung.
0a. Lernkompass:
Mira lernt zuerst, wie sie Aufgaben in Notebooks liest, wo Hyperparameter stehen und welche Hilfe sie in welcher Reihenfolge nutzt.
1. Lineare Regression:
Mira schaetzt z. B. Stromkosten aus Verbrauch: ein Zusammenhang wird sichtbar und interpretierbar (`m`, `b`, Residuen).
2. Bias-Variance:
Mehr Flexibilitaet ist nicht automatisch besser; Generalisierung, Signal und Rauschen muessen gegeneinander abgewogen werden.
3. Varianz im ML:
Mira sieht an Wetterstationen und Eisverkauf, warum neue Stichproben zu ruhigen oder nervoesen Vorhersagen fuehren und wie Lernkurven beim Diagnostizieren helfen.
4. Regularisierung:
Mira lernt mit der Modell-Diaet, wie Ridge, Lasso und Elastic Net zu nervoese Modelle zuegeln und warum Alpha kein Ratespiel sein darf.
5. Gradient Descent:
Was vorher manuell justiert wurde, wird als Optimierungsschritt automatisiert gelernt.
6. Evaluation Metrics:
Mira lernt, warum Accuracy allein oft taeuscht, wie Konfusionsmatrix, Precision, Recall, F1 und AUC gelesen werden und welche Regressionsmetriken bei Prognosen sinnvoll sind.
7. Logistische Regression:
Mira sieht, wie aus einem Score ueber die Sigmoid-Funktion eine Wahrscheinlichkeit wird, wie Thresholds Entscheidungen verschieben und warum Log-Loss falsche Sicherheit hart bestraft.
8. Feature Engineering:
Mira merkt, dass Rohdaten noch keine verdaulichen Modell-Zutaten sind: fehlende Werte, Textspalten, Skalen und Pipelines muessen sauber vorbereitet werden.
9. Model Tuning:
Mira richtet die Modell-Werkstatt ein: gleiche Skalen, mehrere Probeessen, systematische Reglersuche und saubere Fließbaender gegen Leakage.
10. KNN-Grundlagen:
Mira sortiert ein neues Produkt in die "aehnlichsten" Produktgruppen ein: Aehnlichkeit statt fester Formel.
11. KNN-Hyperparameter:
Mira sieht, wie `k=1` zu nervoes reagiert, `k=100` zu grob wird und ein mittleres `k` oft robuster ist.
12. Distanzmetriken + Skalierung:
Berlin->Nuernberg als Luftlinie (euklidisch) vs. Strassennetz (manhattan) plus Skalierung, damit keine Achse unfair dominiert.
13. Matrix:
Mehrere Einflussfaktoren werden als Eingabestruktur fuer Modelle organisiert.
14. Matrizenmultiplikation:
Die gleiche Logik wird als skalierbare Rechenform `X*w+b` gebuendelt.
15. Praxis-Transfer:
Alles wird in einen reproduzierbaren Workflow ueberfuehrt (Split, Tuning, Residuen, Outlier) und direkt in die Kapiteluebungen integriert.

## Neue Schritte aus dem Transkript 03-04 (didaktisch aufbereitet)
| Neuer Schritt | Alltagsbeispiel (Europa) | Kern-Lernziel | Bewaehrte Methode | Konkrete Benutzerfuehrung |
|---|---|---|---|---|
| 0a Lernkompass | "Wo finde ich den Parameter in meinem Notebook?" | Lernende koennen Aufgaben lesen, Parameter finden und Hilfe systematisch nutzen | Scaffolding + Cognitive Apprenticeship | 3-Klick-Anleitung, "Wenn du haengst"-Box, Begriff->Ort Mapping |
| 5 KNN-Grundlagen | Neues Objekt zwischen Katzen/Huehnern einsortieren | KNN-Idee, `k` als Nachbarschaft, Modus/Mittelwert | Worked Example + Guided Discovery | Erst Vorhersage durch Lernende, dann Aufloesung mit Visual |
| 6 KNN-Hyperparameter | Zu enge vs. zu grobe Nachbarschaft in Stadtteilen | Underfit/Overfit verstehen, `k` empirisch waehlen | Prediction-Observation-Explanation + Formative Assessment | k-Slider, Fehlklassifikationszaehler, Checkfrage pro aenderung |
| 7 Distanz + Scaling | Berlin->Nuernberg Luftlinie vs. Strassenroute, Mannheim-Grid | Distanzmetrik bewusst waehlen und Skalierung begruenden | Contrasting Cases + Self-Explanation | Zwei Kartenbilder, "Welche Metrik passt?"-Entscheidungsbaum, kurzer Transfertask |
| 7a Feature Engineering | Pinguin-Datensatz als Daten-Kueche | Imputation, Encoding, Scaling, neue Features und Pipeline logisch verbinden | Scaffolding + Teaching with Analogies + formative Quizzes | Modulnavigation, localStorage-Fortschritt, interaktive Tabellen, Drag-and-Drop, Pipeline-Abschlussaufgabe |

## Verbindliche UX-Regeln
- Diagramme muessen Achsen klar benennen (inkl. Einheiten).
- Relevante Modellparameter sichtbar machen (z. B. `m`, `b`, `w`, `X*w+b`, `lambda`, `k`, `metric`, `weights`).
- Jede Seite beginnt mit "Was lerne ich in 10 Minuten?".
- Jede Aktion im UI hat eine Kurz-Anweisung ("1. Regler bewegen, 2. Beobachten, 3. Begruenden").
- Regler bekommen Tooltips mit:
  - Was verstelle ich?
  - Warum ist das relevant?
- Reset-Option fuer manuelle Eingriffe bereitstellen.
- Inhalte duerfen nicht abgeschnitten sein; Sidebar und Hauptbereich muessen scrollbar sein.
- Lernpfad-Block in der Sidebar standardmaessig bis Schritt 5 eingeklappt halten.
- Quiz/Replay nur am Ende eines Themas zeigen (wenn Quiz auf der Seite vorhanden ist).
- In den Fortgeschrittenen-Themen ist Mini-Quiz + Freischaltlogik aktiv (mind. 2/3 korrekt fuer den naechsten Link).
- Zwischen Themen klare Navigation vor/zurueck ermoeglichen.
- Fuer Notebook-nahe Aufgaben immer einen Hilfekanal zeigen:
  - Wo steht das im Notebook?
  - Wo finde ich es in der Bibliotheks-Doku?
  - Welche Frage kann ich im Support-Channel stellen?
- Jede aktive Seite im neuen Lernpfad nutzt den gemeinsamen Sprachumschalter aus `lernstand_manager.js`.
- Sprachwechsel erfolgt im Header ueber Flaggen fuer `DE` und `EN`.
- Fuer neue Seiten immer `data-i18n-de` und `data-i18n-en` nutzen; bei HTML-Inhalten `data-i18n-html-de` und `data-i18n-html-en`.
- Fuer ARIA-Labels und Platzhalter `data-i18n-aria-label-*`, `data-i18n-title-*` und `data-i18n-placeholder-*` verwenden.

## Curriculare Abdeckung
### Linear Regression
- Univariate Intuition, Interpretation von Steigung/Intercept.
- Uebergang zu multivariat via Matrixdarstellung.
- Grundidee der Modellanpassung und Fehlerreduktion.
- Code-Praxis: `scikit-learn`, `statsmodels` OLS, MAE/R2, Residuen.

### Gradient Descent
- Recap-Bruecke aus Linear Regression/Training (`.fit()`) inklusive Normal Equation vs. iterative Optimierung.
- Loss-Verstaendnis: Modellfitting ueber Minimierung einer MSE-nahen Loss-Funktion `J(w)`.
- Vergleich Batch, Mini-Batch und Stochastic Gradient Descent (Stabilitaet vs. Geschwindigkeit).
- Momentum als zusaetzliches Optimierungskonzept zur Glattung/Beschleunigung.
- End-of-topic Mini-Quiz mit Freischaltung des Bias-Variance-Themas.
- Praxisuebungen werden direkt in den neuen Kapitel-Seiten eingebettet.

### Klassifikation + Metriken (vor Matrix)
- Problemwechsel klar machen: Regression (freie Zahlen) vs. Klassifikation (Ja/Nein mit 0/1).
- Warum lineare Regression fuer Klassen oft scheitert (Ausreisser-Effekt, ungueltiger Wertebereich <0 bzw. >1).
- Sigmoid/logistische Funktion als Begrenzung auf `[0,1]` inklusive einfacher Grenzfall-Intuition.
- Logistische Hypothese in einfacher Form: Score `t = b0 + b1*x` und Wahrscheinlichkeit `p = sigmoid(t)`.
- Parameterwirkung sichtbar machen: `b0` verschiebt, `b1` steuert Richtung/Steilheit, negatives `b1` spiegelt.
- Bedingte Wahrscheinlichkeit und Notation aufbauen: `P(y=1|x;b)` sowie `P(y=0)=1-P(y=1)`.
- Decision Boundary als Modelleigenschaft erklaeren (nicht als starre Dateneigenschaft), inkl. Schwellenregel.
- Gleichung als Gleichgewicht erklaeren (`=` als Wertgleichheit) und Variable als Platzhalter einfuehren.
- Bruch, Dezimalzahl und Prozent fuer Metrik-Verstaendnis sichern.
- Konfusionsmatrix mit TP/TN/FP/FN als Fehlerarten statt nur richtig/falsch lesen.
- Accuracy, Precision, Recall, F1 und Specificity mit Kontextbezug unterscheiden.
- Threshold-Wahl inklusive Tradeoff (False Positive vs. False Negative) sichtbar machen.
- ROC-Idee (TPR gegen FPR) als diagnostische Bruecke zum Modellvergleich einbauen.
- Log-Loss als Kostenidee erklaeren (groesserer Fehler -> groesserer Verlust) und Loesen via Gradient Descent verknuepfen.
- Mehrklassen-Bruecke als wiederholte binaere Fragen (One-vs-Rest-Idee).

### KNN + Distanzmetriken + Tool-Kompass (neu aus Transkript 03-04)
- KNN als alternativer, nicht-parametrischer Ansatz zu linearen/logistischen Grenzen.
- KNN fuer Klassifikation und Regression: Modus vs. Mittelwert.
- Hyperparameter in KNN: `k`, Distanzmetrik, Gewichtung.
- Overfit/Underfit ueber `k` sichtbar machen (`k=1`, mittleres `k`, sehr grosses `k`).
- `k` empirisch ueber Validierung/Testfehler waehlen (kein "magischer" Theorie-Wert).
- Euklidische, Manhattan- und Minkowski-Distanz verstehen und situativ vergleichen.
- Cosinus-Aehnlichkeit als Bruecke zu Suchmaschinen und LLM-Vektorraum-Idee.
- Skalierung (Normalisierung/Standardisierung) als Pflicht vor Distanz-basierten Modellen.
- Feature Engineering als eigenstaendiger Workflow-Schritt: fehlende Werte, Kategorien, Skalierung, Binning, Interaktionen und Leakage-Vermeidung.
- Unterschied zwischen `.fit`, `.transform` und `.fit_transform` wiederholt im Preprocessing-Kontext anwenden.
- `ColumnTransformer` und `Pipeline` als reproduzierbare Kombination fuer gemischte Datentypen verstehen.
- Tool-Kompass fuer Notebook-Aufgaben: Parameter auffinden, Fragen strukturieren, Supportkanal nutzen.

### Unit Testing + TDD (optional, querschnittlich)
- Unit Tests als "TÜV" für Code: kleine Funktionen gezielt und reproduzierbar prüfen.
- pytest-Grundlagen: `assert`, Testfunktionen, Fixtures und `@pytest.mark.parametrize`.
- Data-Science-Testing mit pandas: `assert_series_equal`, `assert_frame_equal`, Imputation und Transformationen prüfen.
- TDD-Zyklus Red -> Green -> Refactor als praktische Denkweise für neue Funktionen und kleine Projekte.
- Abschlussprojekt mit testbarem Taschenrechner als Brücke von Notebook-Übungen zu sauberer Projektstruktur.

### Bias-Variance + Regularization + Predictive Modeling
- Underfitting/Overfitting und Bias-Variance-Tradeoff.
- Harte vs. weiche Regularisierungskonzepte (Nebenbedingung vs. Penalty-Term in der Kostenfunktion).
- L1/L2 als Lasso/Ridge in interaktiver Darstellung, inklusive Wirkung von `alpha/lambda = 0` bis hoch.
- Elastic Net als Mischform mit `r = l1_ratio` fuer korrelierte Merkmale.
- Train/Test-Split als Pflicht fuer Generalisierungsbewertung.
- Parameter-Tuning (alpha/lambda) im Workflow.
- Residuenmuster lesen, Outlier-Einstieg mit z-Score.
- MSE/MAE als robuste Vergleichsmetriken (R2 mit Vorsicht interpretieren).
- Unterschied `.fit`, `.transform`, `.fit_transform` im Preprocessing-Kontext.

## Vorlage fuer neue Themenseiten
- Intro-Kasten: "Was lerne ich hier und warum im Job relevant?"
- 5-7 Lernschritte mit:
  - Schritttext (Aufgabe/Beobachtung)
  - Diskussionsfrage
  - ggf. Aufloesung des vorherigen Schritts
- Pro Schritt eine Mini-Reflexion ("Warum ist das plausibel?").
- Sichtbare Metrik-Chips.
- Kontrollpanel mit Tooltips + Reset.
- Sidebar-Block "Lernpfad danach" eingeklappt bis Schritt 5.
- Uebungen direkt im Kapitel zwischen Demo und Quiz einbetten.
- Abschluss mit 3-Fragen-Quiz + klarer Empfehlung "Was als naechstes?".

## Pflegehinweise
- Dateinamen im Stil `*_interaktion.html` oder thematisch klaren Kapiteldateien wie `feature_engineering.html` halten.
- Begriffe einheitlich verwenden: Steigung `m`, Intercept `b`, Gewichte `w`, Vorhersage `y-hat`.
- Header keine Theme-Umschalter mehr geben. Der gemeinsame Header-Bereich ist fuer Navigation, Fortschritt und Sprachwechsel reserviert.
- Bei curricularen Aenderungen zuerst dieses README aktualisieren, dann Seiteninhalte.
- Ziel-Dateien fuer die neuen Schritte:
  - `lernkompass_notebook_und_toolhilfe_interaktion.html`
  - `knn_grundlagen_interaktion.html`
  - `knn_hyperparameter_tuning_interaktion.html`
  - `distanzmetriken_und_scaling_interaktion.html`
  - `model_tuning.html`
  - `decision_trees_interaktion.html`
  - `ensemble_methods_interaktion.html`
  - `ml_finale_xgboost.html`
  - `unit_testing_interaktion.html`
