# Data Science Lernpfad (Didaktik + Umsetzungsregeln)

Dieses Dokument fixiert die Ausrichtung des gesamten Data-Science-Pfads, damit neue Seiten auch ohne Chat-Kontext konsistent weitergebaut werden.

## Zielgruppe
- Einsteiger mit Berufsbezug.
- Teilnehmende mit aelteren Vorkenntnissen, die schnell wieder einsteigen wollen.
- Fokus: vom Verstehen direkt in anwendbare Projektpraxis.

## Didaktischer Kern
- Von Theorie in Anwendung: erst visuelle Intuition, dann Python-Workflow.
- Jeder Themenblock beantwortet immer:
  - Was kann diese Methode?
  - Wo liegt ihre Grenze?
  - Warum kommt als naechstes Thema eine andere Herangehensweise?
- Schrittlogik: Aufgaben-/Beobachtungsanweisung im Schritt, Aufloesung im Folgekontext.
- Sprache: einfach, konkret, fachlich korrekt.

## Lernpfad-Reihenfolge
### Kernpfad (an Sitzung 1 + Folgetermin ausgerichtet)
1. `lineare_regression_interaktion.html`
2. `gradient_descent_interaktion.html`
3. `bias_variance_tradeoff_interaktion.html`
4. `matrix_interaktion.html`
5. `matrizenmultiplikation_interaktion.html`
6. `regularization_interaktion.html`

### Code-Praxis-Erweiterungen (modulweise oder gesammelt)
7. `lineare_regression_code_praxis.html` (fokussiert auf Regression + OLS)
8. `gradient_descent_code_praxis.html` (fokussiert auf GD-Implementierung, Batch/Mini-Batch/SGD, Momentum)
9. `predictive_modeling_code_praxis.html` (fokussiert auf Train/Test, Ridge/Lasso, Evaluation)

Hinweis: Erweiterungsseiten werden in den Interaktionsseiten als Popup geoeffnet.

## Roter Faden (Pfadlogik)
1. Lineare Regression:
Ein Zusammenhang mit einem Einflussfaktor wird sichtbar und interpretierbar (`m`, `b`, Residuen).
2. Gradient Descent:
Was vorher manuell justiert wurde, wird als Optimierungsschritt automatisiert gelernt.
3. Bias-Variance:
Mehr Flexibilitaet ist nicht automatisch besser; Generalisierung, Signal und Rauschen muessen gegeneinander abgewogen werden.
4. Matrix:
Mehrere Einflussfaktoren werden als Eingabestruktur fuer Modelle organisiert.
5. Matrizenmultiplikation:
Die gleiche Logik wird als skalierbare Rechenform `X*w+b` gebuendelt.
6. Regularization:
Ridge/Lasso steuern die Komplexitaet gezielt (Stabilitaet vs. Detailtreue/Selektion).
7. Predictive Modeling Praxis:
Alles wird in einen reproduzierbaren Workflow ueberfuehrt (Split, Tuning, Residuen, Outlier).

## Verbindliche UX-Regeln
- Diagramme muessen Achsen klar benennen (inkl. Einheiten).
- Relevante Modellparameter sichtbar machen (z. B. `m`, `b`, `w`, `X*w+b`, `lambda`).
- Regler bekommen Tooltips mit:
  - Was verstelle ich?
  - Warum ist das relevant?
- Reset-Option fuer manuelle Eingriffe bereitstellen.
- Inhalte duerfen nicht abgeschnitten sein; Sidebar und Hauptbereich muessen scrollbar sein.
- Lernpfad-Block in der Sidebar standardmaessig bis Schritt 5 eingeklappt halten.
- Quiz/Replay nur am Ende eines Themas zeigen (wenn Quiz auf der Seite vorhanden ist).
- In den Fortgeschrittenen-Themen ist Mini-Quiz + Freischaltlogik aktiv (mind. 2/3 korrekt fuer den naechsten Link).
- Zwischen Themen klare Navigation vor/zurueck ermoeglichen.

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
- Separate Code-Praxis-Seite mit reiner Python-Implementierung und Visualisierung (`gradient_descent_code_praxis.html`).

### Bias-Variance + Regularization + Predictive Modeling
- Underfitting/Overfitting und Bias-Variance-Tradeoff.
- L1/L2 als Lasso/Ridge in interaktiver Darstellung.
- Train/Test-Split als Pflicht fuer Generalisierungsbewertung.
- Parameter-Tuning (alpha/lambda) im Workflow.
- Residuenmuster lesen, Outlier-Einstieg mit z-Score.
- MSE/MAE als robuste Vergleichsmetriken (R2 mit Vorsicht interpretieren).
- Unterschied `.fit`, `.transform`, `.fit_transform` im Preprocessing-Kontext.

## Vorlage fuer neue Themenseiten
- Intro-Kasten: "Was lerne ich hier und warum im Job relevant?"
- 4-6 Lernschritte mit:
  - Schritttext (Aufgabe/Beobachtung)
  - Diskussionsfrage
  - ggf. Aufloesung des vorherigen Schritts
- Sichtbare Metrik-Chips.
- Kontrollpanel mit Tooltips + Reset.
- Sidebar-Block "Lernpfad danach" eingeklappt bis Schritt 5.
- Sidebar-Block "Erweiterung" als auffaelliger Popup-Trigger zur passenden Code-Praxis-Seite.

## Pflegehinweise
- Dateinamen im Stil `*_interaktion.html` oder `*_code_praxis.html` halten.
- Begriffe einheitlich verwenden: Steigung `m`, Intercept `b`, Gewichte `w`, Vorhersage `y-hat`.
- Bei curricularen Aenderungen zuerst dieses README aktualisieren, dann Seiteninhalte.
