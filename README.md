# Education Games (HTML)

Browserbasierte Lernspiele als statische HTML-Seiten zu KI-Sicherheit, Data Science, Datenschutz, SQL, Python und Medienkompetenz.

## Starten

### Direkt im Browser
Viele Seiten funktionieren per Doppelklick (`file://`).

### Empfohlen: lokaler Webserver
Einige Browser-Features laufen stabiler über HTTP.

```bash
python3 -m http.server 8000
```

Dann öffnen:

```text
http://localhost:8000/
```

## Zentrale Einstiegsseite

- Übersicht aller Spiele: [`index.html`](./index.html)

## Ordnerstruktur

- `ai-security/` – KI-Sicherheit und Prompting-Awareness
- `data-science/` – Data-Science-Lernpfad (Interaktion + Code-Praxis)
- `online_security/` – Online-Sicherheitsübungen
- `vhs-passworttraining/` – 4-teiliges VHS-Kursmodul zum Thema Passwortsicherheit
- `data-protection/` – Datenschutz-Formate (u. a. VHS)
- `cloud_data/` – Cloud-Daten-Spiele
- `sql/` – SQL-Lernspiele
- `python/` – Python-Lernseiten
- `logic-and-math/` – Logik/Kombinatorik
- `media-literacy/` – Medienkompetenz

## Data Science: gepflegte Dateiliste

### Interaktive Lernseiten (Kernpfad)

1. `data-science/lineare_regression_interaktion.html`
2. `data-science/gradient_descent_interaktion.html`
3. `data-science/bias_variance_tradeoff_interaktion.html`
4. `data-science/klassifikation_metriken_interaktion.html`
5. `data-science/knn_grundlagen_interaktion.html`
6. `data-science/knn_hyperparameter_tuning_interaktion.html`
7. `data-science/distanzmetriken_und_scaling_interaktion.html`
8. `data-science/matrix_interaktion.html`
9. `data-science/matrizenmultiplikation_interaktion.html`
10. `data-science/regularization_interaktion.html`

### Code-Praxis

1. `data-science/lineare_regression_code_praxis.html`
2. `data-science/gradient_descent_code_praxis.html`
3. `data-science/predictive_modeling_code_praxis.html`

### Optionale Einstiege (vor Thema 1)

1. `data-science/bias-varianz-einsteiger/bias_varianz_einsteiger_interaktion.html`
2. `data-science/lernkompass_notebook_und_toolhilfe_interaktion.html`

Hinweis: Die Übersicht in [`index.html`](./index.html) ist auf diese Reihenfolge abgestimmt.
Hinweis: VHS-Kursmodule mit eigenem Ablauf liegen als separate Ordner im Projekt und werden ebenfalls über die zentrale Übersicht verlinkt.
Hinweis: In den Data-Science-Themen ist ein einheitlicher Formel-Leseschlüssel integriert, damit Begriffe wie `logit`, `e_hat`, `MSE` und `Bias²` konsistent erklärt werden.

## Pflegehinweise

- Dateinamen und Links immer synchron halten.
- Bei Umbenennungen zuerst `index.html` anpassen, dann testen.
- Für Data-Science-Inhalte zusätzlich `data-science/README.md` aktualisieren.

## Lizenz

TODO: Lizenz ergänzen (z. B. MIT) und ggf. Marken-/CI-Hinweise dokumentieren.
