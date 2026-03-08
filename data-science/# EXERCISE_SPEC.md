# EXERCISE_SPEC.md – Übungs-Bauanleitung für Codex

## Globale Regeln

1. Für jedes Modul, das in der Tabelle unten eine Notebook-Referenz hat:
   - Öffne das referenzierte Notebook unter `notebooks/{kapitel}/`
   - Finde die Zelle(n), die zum genannten Lernziel passen
   - Vereinfache den Code auf MAX 15 Zeilen
   - Ersetze 1–3 Schlüsselzeilen durch `# ??? DEINE LÖSUNG ???`
   - Die Lücken dürfen NUR Konzepte betreffen, die im selben Modul
     erklärt wurden

2. HTML-Struktur für JEDEN Übungsblock (nach Demo, vor Quiz):

   <div class="exercise-card">
     <h4>🏋️ Übung: {TITEL}</h4>
     <p class="exercise-instruction">{AUFGABE, 2-3 Sätze}</p>
     <p class="exercise-context">📓 Öffne dein Jupyter Notebook
     oder Google Colab und probiere es selbst aus.</p>
     <pre class="language-python"><code>{STARTER-CODE}</code></pre>
     <details class="hint">
       <summary>💡 Tipp anzeigen</summary>
       <p>{HINWEIS}</p>
     </details>
     <details class="solution">
       <summary>✅ Lösung anzeigen</summary>
       <pre class="language-python"><code>{LÖSUNG}</code></pre>
       <p class="expected-output">Erwartete Ausgabe: {AUSGABE}</p>
     </details>
   </div>

3. Vereinfachungsregeln:
   - Keine Imports, die nicht im Modul erklärt werden
   - Datensätze inline definieren (max 10 Zeilen) ODER
     sklearn.datasets verwenden
   - Kein Plotting (das macht die interaktive Demo)
   - Jede Übung muss OHNE die vorherige Übung lösbar sein
   - Erwartete Ausgabe IMMER angeben (Zahlenwert oder Text)

## Referenz-Tabelle

### Lineare Regression (linear_regression.html)

| Modul | Lernziel | Notebook | Suchbegriff in Notebook |
|-------|----------|----------|------------------------|
| 2 – Geradengleichung | Steigung & Achsenabschnitt verstehen | 1_Simple_Linear_Regression_Sklearn.ipynb | `coef_`, `intercept_` |
| 3 – OLS & Residuen | Residuen berechnen | 1_Simple_Linear_Regression_Sklearn.ipynb | `y_pred - y_test` |
| 5 – Multiple Regression | Mehrere Features verwenden | 4_Multiple_Linear_Regression_Sklearn.ipynb | `X = df[['feature1', 'feature2']]` |
| 6 – Kategorische Variablen | Dummy-Encoding | 6_Categorical_Variables.ipynb | `pd.get_dummies` |
| 8 – Bias-Varianz | Polynomgrad variieren | 2_Limitations_of_Linear_Regression.ipynb | `PolynomialFeatures` |

### Gradient Descent (gradient_descent.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 2 – Ableitung | Ableitung berechnen | 1_Gradient_Descent.ipynb | `derivative`, `gradient` |
| 4 – Lernrate | Learning Rate Effekt | 1_Gradient_Descent.ipynb | `learning_rate`, `alpha` |
| 5 – GD implementieren | GD-Schleife schreiben | 3_Gradient_Descent_Codealong.ipynb | `for i in range`, `w = w -` |
| 7 – SGD | Batch vs. Stochastic | 2_Gradient_Descent_Visualization.ipynb | `SGD`, `batch` |

### Evaluation Metrics (evaluation_metrics.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 2 – Confusion Matrix | CM erstellen & lesen | 1_Confusion_Matrix.ipynb | `confusion_matrix` |
| 3 – Klassifikation | Precision/Recall berechnen | 2_Classification_Metrics.ipynb | `precision_score`, `recall_score` |
| 5 – ROC & AUC | ROC-Kurve verstehen | 2_Classification_Metrics.ipynb | `roc_curve`, `roc_auc_score` |
| 6 – Regression | MAE/RMSE berechnen | 3_Regression_Metrics.ipynb | `mean_absolute_error`, `mean_squared_error` |

### Logistische Regression (logistic_regression.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 2 – Sigmoid | Sigmoid-Werte prüfen | 1_Logistic_Regression.ipynb | `sigmoid`, `1 / (1 + np.exp` |
| 3 – Boundary | predict_proba & Threshold | 1_Logistic_Regression.ipynb | `predict_proba`, `threshold` |
| 6 – Sklearn | Kompletter Workflow | 2_Logistic_Regression_sklearn.ipynb | `LogisticRegression`, `fit`, `predict` |
| 7 – Threshold | Threshold ändern | 2_Logistic_Regression_sklearn.ipynb | `threshold`, `confusion_matrix` |
| 8 – Multiclass | Iris klassifizieren | 3_Multiclass_Classification.ipynb | `load_iris`, `classification_report` |

### Bias-Varianz (bias_variance.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 4 – Underfitting | Zu einfaches Modell erkennen | 1_Bias_Variance_Tradeoff.ipynb | `degree=1`, `underfitting` |
| 5 – Overfitting | Zu komplexes Modell erkennen | 1_Bias_Variance_Tradeoff.ipynb | `degree=15`, `overfitting` |
| 6 – Sweet Spot | Optimalen Grad finden | 1_Bias_Variance_Tradeoff.ipynb | `cross_val_score`, `best` |

### Regularisierung (regularization.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 3 – Ridge | Ridge Regression anwenden | 09.2_Regularization.ipynb | `Ridge`, `alpha` |
| 4 – Lasso | Lasso & Feature Selection | 09.2_Regularization.ipynb | `Lasso`, `coef_` |
| 5 – Elastic Net | Kombination verstehen | 09.2_Regularization.ipynb | `ElasticNet`, `l1_ratio` |
| 7 – Alpha tuning | Besten Alpha-Wert finden | 09.2_Regularization.ipynb | `RidgeCV`, `LassoCV`, `alphas` |

### Feature Engineering (feature_engineering.html)

| Modul | Lernziel | Notebook | Suchbegriff |
|-------|----------|----------|-------------|
| 2 – Missing Values | Imputation anwenden | 1.1_intro_to_fe.ipynb | `SimpleImputer`, `fillna` |
| 3 – Encoding | Kategorien umwandeln | 1.1_intro_to_fe.ipynb | `OneHotEncoder`, `get_dummies` |
| 4 – Scaling | Features skalieren | 2.1_advanced_fe.ipynb | `StandardScaler`, `MinMaxScaler` |
| 6 – Pipeline | ColumnTransformer nutzen | 2.1_advanced_fe.ipynb | `Pipeline`, `ColumnTransformer` |
