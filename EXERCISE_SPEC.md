# EXERCISE_SPEC.md

Kanonische Spezifikation für notebook-gestützte Übungen im aktiven Data-Science-Lehrpfad.

## Geltungsbereich
- Gilt für HTML-Kapitel unter `Games/education_games/data-science/`.
- Notebook-Pfade unten sind relativ zu `Games/education_games/notebooks/`.
- `Games/education_games/notebooks/` zeigt auf den bestehenden Data-Science-Notebook-Bestand.

## Globale Regeln
1. Öffne das referenzierte Notebook und suche nach den angegebenen Suchbegriffen.
2. Nutze den kleinsten zusammenhängenden Code-Block, der das Lernziel trifft.
3. Vereinfache auf maximal 15 Zeilen Starter-Code mit 1 bis 3 Lücken `# ??? DEINE LÖSUNG ???`.
4. Halte Libraries und Spaltennamen nah am Notebook; wenn der Originaldatensatz zu groß ist, ersetze ihn durch einen Mini-Datensatz mit denselben Kernspalten.
5. Jede Übung muss alleine lösbar sein und darf keine vorherige Übung voraussetzen.
6. Jede Lösung enthält:
   - erwartete Ausgabe
   - zwei Deutungsfragen
   - bei Klassifikation zusätzlich die Definition von Klasse `1` und Klasse `0` im Übungsblock
7. Jede Übung wird als „aus dem Notebook vereinfacht“ gekennzeichnet.

## Standard-Template
```html
<div class="exercise-card">
  <h4>🏋️ Übung: {Titel}</h4>
  <p class="exercise-instruction">{Aufgabe}</p>
  <p class="exercise-context">📓 Mach das in deinem Notebook (Jupyter/Colab).</p>
  <pre class="language-python"><code>{Starter-Code}</code></pre>
  <details class="hint"><summary>💡 Tipp anzeigen</summary><p>{Hint}</p></details>
  <details class="solution"><summary>✅ Lösung anzeigen</summary>
    <pre class="language-python"><code>{Lösung}</code></pre>
    <p class="expected-output">Erwartete Ausgabe: {Ausgabe}</p>
    <div class="interpret-questions">
      <p><strong>Deutung 1:</strong> Was heißt das Ergebnis in unserem Beispiel als ganzer Satz?</p>
      <p><strong>Deutung 2:</strong> Welche Folgerung oder welche nächste Stellschraube ergibt sich daraus?</p>
    </div>
  </details>
</div>
```

## Kapitel-Mapping

### Lineare Regression
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/lineare_regression_interaktion.html` | 2 | `ds-linear-regression-main/1_Simple_Linear_Regression_Sklearn.ipynb` | `coef_`, `intercept_` | Steigung und Achsenabschnitt als Modelloutput lesen | `coef_`, `intercept_` |
| `data-science/lineare_regression_interaktion.html` | 3 | `ds-linear-regression-main/1_Simple_Linear_Regression_Sklearn.ipynb` | `y_hat`, `residual` | Residuen als Abstand zwischen echt und vorhergesagt deuten | Residuen |
| `data-science/lineare_regression_interaktion.html` | 4 | `ds-linear-regression-main/1_Simple_Linear_Regression_Sklearn.ipynb` | `r2_score` | R² als erklärte Struktur lesen | `R²` |
| `data-science/lineare_regression_interaktion.html` | 5 | `ds-linear-regression-main/4_Multiple_Linear_Regression_Sklearn.ipynb` | `X = df[[`, `r2_score` | Mehrere Features und ihre Koeffizienten lesen | Koeffizienten, `R²` |

### Bias, Varianz und Regularisierung
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/bias_variance.html` | 4 | `ds-predictive-regression-main/1_Bias_Variance_Tradeoff.ipynb` | `degree=1`, `root_mean_squared_error` | Underfitting als zu hohen Fehler verstehen | Train-/Test-RMSE |
| `data-science/bias_variance.html` | 5 | `ds-predictive-regression-main/1_Bias_Variance_Tradeoff.ipynb` | `degree=8`, `root_mean_squared_error` | Overfitting als Lücke zwischen Train und Test lesen | Train-/Test-RMSE |
| `data-science/regularization_ml.html` | 3 | `ds-predictive-regression-main/2_Regularization.ipynb` | `Ridge`, `mean_squared_error` | Ridge über geschrumpfte Koeffizienten und RMSE deuten | Koeffizient, RMSE |
| `data-science/regularization_ml.html` | 4 | `ds-predictive-regression-main/2_Regularization.ipynb` | `Lasso`, `coef_` | Lasso als Sparsamkeit und Feature-Selektion lesen | Koeffizienten |
| `data-science/regularization_ml.html` | 5 | `ds-predictive-regression-main/2_Regularization.ipynb` | `ElasticNet`, `l1_ratio` | Elastic Net als Mischform lesen | Koeffizient |
| `data-science/regularization_ml.html` | 7 | `ds-predictive-regression-main/2_Regularization.ipynb` | `alpha`, `mean_squared_error` | Bestes Alpha über Validierungsfehler wählen | bestes `alpha` |

### Gradient Descent
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/gradient_descent_interaktion.html` | 2 | `ds-gradient-descent-main/1_Gradient_Descent.ipynb` | `gradient`, `derivative` | Gradient als lokale Steigung lesen | Gradient |
| `data-science/gradient_descent_interaktion.html` | 3 | `ds-gradient-descent-main/3_Gradient_Descent_Codealong.ipynb` | `w = w -`, `alpha` | Update-Regel als wiederholten Verbesserungs-Schritt deuten | neuer Parameterwert |
| `data-science/gradient_descent_interaktion.html` | 4 | `ds-gradient-descent-main/1_Gradient_Descent.ipynb` | `learning_rate`, `alpha` | Lernrate als Geschwindigkeitsregler lesen | Kostenverlauf |
| `data-science/gradient_descent_interaktion.html` | 7 | `ds-gradient-descent-main/2_Gradient_Descent_Visualization.ipynb` | `SGD`, `batch` | SGD als Update pro Einzelpunkt verstehen | Gewichtsverlauf |

### Evaluation Metrics
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/klassifikation_metriken_interaktion.html` | 1 | `ds-evaluation-metrics-main/2_Classification_Metrics.ipynb` | `accuracy_score` | Accuracy in Alltagssprache deuten | `Accuracy` |
| `data-science/klassifikation_metriken_interaktion.html` | 2 | `ds-evaluation-metrics-main/1_Confusion_Matrix.ipynb` | `confusion_matrix` | Fehlerarten getrennt lesen | `Confusion Matrix` |
| `data-science/klassifikation_metriken_interaktion.html` | 3 | `ds-evaluation-metrics-main/2_Classification_Metrics.ipynb` | `precision_score`, `recall_score` | Precision und Recall im Kontext gegeneinander lesen | `Precision`, `Recall` |
| `data-science/klassifikation_metriken_interaktion.html` | 5 | `ds-evaluation-metrics-main/2_Classification_Metrics.ipynb` | `f1_score` | F1 als Balance-Wert verstehen | `F1` |
| `data-science/klassifikation_metriken_interaktion.html` | 6 | `ds-evaluation-metrics-main/2_Classification_Metrics.ipynb` | `roc_curve`, `roc_auc_score` | ROC und AUC über Thresholds deuten | `ROC`, `AUC` |
| `data-science/klassifikation_metriken_interaktion.html` | 7 | `ds-evaluation-metrics-main/3_Regression_Metrics.ipynb` | `mean_absolute_error`, `mean_squared_error`, `r2_score` | Regressionsfehler in Originaleinheit lesen | `MAE`, `MSE`, `RMSE`, `R²` |

### Logistische Regression
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/logistic_regression.html` | 2 | `ds-logistic-regression-main/1_Logistic_Regression.ipynb` | `sigmoid`, `expit` | Wahrscheinlichkeit statt Rohwert lesen | Sigmoid-Wert |
| `data-science/logistic_regression.html` | 3 | `ds-logistic-regression-main/1_Logistic_Regression.ipynb` | `predict_proba`, `threshold` | Threshold als Entscheidungsregel verstehen | harte Klassen |
| `data-science/logistic_regression.html` | 4 | `ds-logistic-regression-main/1_Logistic_Regression.ipynb` | `log_loss`, `np.log` | falsche Selbstsicherheit deuten | `Log-Loss` |
| `data-science/logistic_regression.html` | 6 | `ds-logistic-regression-main/2_Logistic_Regression_sklearn.ipynb` | `LogisticRegression`, `fit`, `predict`, `confusion_matrix` | kompletten sklearn-Workflow lesen | Vorhersagen, Matrix |
| `data-science/logistic_regression.html` | 7 | `ds-logistic-regression-main/2_Logistic_Regression_sklearn.ipynb` | `predict_proba`, `confusion_matrix` | Threshold-Änderung in Folgen übersetzen | Vorhersagen, Matrix |
| `data-science/logistic_regression.html` | 8 | `ds-logistic-regression-main/3_Multiclass_Classification.ipynb` | `load_iris`, `classification_report` | Mehrklassen-Output lesen | Gewinnerklasse, `classification_report` |

### Feature Engineering
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/feature_engineering.html` | 2 | `ds-feature-engineering-main/1.1_intro_to_fe.ipynb` | `SimpleImputer`, `fit_transform` | imputierten Ersatzwert richtig deuten | imputierter Wert |
| `data-science/feature_engineering.html` | 3 | `ds-feature-engineering-main/1.1_intro_to_fe.ipynb` | `OneHotEncoder`, `drop='first'` | Dummy-Spalten und Referenzkategorie lesen | Tabellenform |
| `data-science/feature_engineering.html` | 4 | `ds-feature-engineering-main/2.1_advanced_fe.ipynb` | `MinMaxScaler`, `StandardScaler` | Skalierung als Werte-Transformation lesen | skalierter Wert |
| `data-science/feature_engineering.html` | 6 | `ds-feature-engineering-main/2.1_advanced_fe.ipynb` | `ColumnTransformer`, `Pipeline` | Pipeline-Reihenfolge deuten | Pipeline-Schritte |

### KNN, Decision Trees und Ensembles
| Kapiteldatei | Modul | Notebook | Suchbegriffe | Lernziel | Output |
|---|---|---|---|---|---|
| `data-science/knn_grundlagen_interaktion.html` | 5 | `ds-distance-metrics-knn-main/3_KNN_sklearn.ipynb` | `KNeighborsClassifier`, `accuracy_score`, `recall_score` | KNN-Vorhersagen mit Accuracy und Recall lesen | Vorhersagen, `Accuracy`, `Recall` |
| `data-science/decision_trees_interaktion.html` | 4 | `ds-decision-tree-main/1_Decision_Trees_Visualization.ipynb` | `max_depth`, `DecisionTreeClassifier` | Baumtiefe und Generalisierung zusammen lesen | Tiefe, Scores |
| `data-science/decision_trees_interaktion.html` | 7 | `ds-decision-tree-main/2_Decision_Trees_Classification.ipynb` | `roc_auc_score`, `score(` | Train/Test-Vergleich deuten | Train-/Test-Score, AUC |
| `data-science/ensemble_methods_interaktion.html` | 2 | `ds-ensemble-methods-main/1_Voting_Ensemble_Methods.ipynb` | `VotingClassifier`, `accuracy_score` | Voting-Ausgabe in Modellentscheidung übersetzen | Klassenvorhersage |
| `data-science/ensemble_methods_interaktion.html` | 3 | `ds-random-forest-new-main/1_Random_Forest_Codealong.ipynb` | `RandomForestClassifier`, `roc_auc_score`, `precision_score`, `recall_score` | Forest-Qualität nicht nur als Zahl, sondern als Trennleistung lesen | `ROC AUC`, `Precision`, `Recall` |
| `data-science/ensemble_methods_interaktion.html` | 6 | `ds-random-forest-new-main/1_Random_Forest_Codealong.ipynb` | `feature_importance` | wichtigstes Merkmal in Alltagssprache deuten | `Feature Importance` |
