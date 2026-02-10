# Team Number – Project Title  
CG4 – **Pre-owned Car Price Prediction via Cross-Validated Meta-Ensembles and Feature Composites**

---

## Team Info

- **22471A05F6 — Garikapati Aishwarya**  
  [LinkedIn](https://www.linkedin.com/in/aishwaryag22/)  
  *Work Done:* Exploratory Data Analysis (EDA), feature engineering, result interpretation, and documentation.

- **22471A05J5 — Pagadala Sirisha**  
  [LinkedIn](https://www.linkedin.com/in/sirisha-pagadala-231b32287/)  
  *Work Done:* Data preprocessing, handling missing values and outliers, categorical encoding, and dataset preparation.

- **22471A05G7 — Kurapati Anusha**  
  [LinkedIn](https://www.linkedin.com/in/anusha-kurapati-92a864276/)  
  *Work Done:* Model training, hyperparameter tuning, ensemble design, performance evaluation, and Flask deployment.

---
<div style="font-size: 0.9em;">

## Abstract

---
<div style="font-size: 0.85em; line-height: 1.5;">
In this study we present a machine learning-based methodology to the assessment of pre-owned car prices in the Indian automotive market. We used a Kaggle provided used_cars dataset of over 5,000 vehicle listings to which we applied domain relevant features and evaluated multiple regression models including Decision Tree, Random Forest, XGBoost, CatBoost, and a stacked ensemble model. Comprehensive data preparation included outlier removal using the Interquartile Range, categorical transformation, and feature creation such as price per kilometer and horsepower-to-age ratio. Model optimization was performed using Grid Search with cross-validation to ensure stability and performance. Among the evaluated models, the stacked ensemble (Ridge Regression, XGBoost, LightGBM) achieved the best results with an R² of 0.9886, RMSE of ₹1.79 Lakhs, and MAE of ₹0.90 Lakhs. CatBoost also showed strong standalone performance with an R² of 0.9848. For real-world deployment, a Flask-based web service was implemented for instant price prediction. Overall, this work demonstrates that machine learning significantly improves the accuracy, reliability, and accessibility of used car valuation.
</div>

---

## Paper Reference (Inspiration)

👉 **Paper Title:** Car Price Prediction using Machine Learning  
[Paper](https://www.researchgate.net/publication/381342641_Car_Price_Prediction_using_Machine_Learning)
**Author Names:** 
Muhammad Ahmad; Muhammad Ali Farooq; Muhammad Zunnurain Hussain; Muhammad Zulkifl Hasan; Muzzamil Mustafa; Aqsa Khalid  
**Source:** Original conference / IEEE paper used as inspiration for the modeling approach.

---

## Our Improvement Over Existing Paper

Compared to the referenced work, this project improves prediction accuracy through advanced ensemble learning, cross-validated hyperparameter tuning, and domain-specific feature composites. In addition, a real-time Flask-based deployment was implemented, making the model practical for real-world usage rather than purely theoretical evaluation.

---

## About the Project

### What the project does  
The system predicts the market price of a used car based on its specifications such as brand, year, fuel type, kilometers driven, engine capacity, power, transmission type, and ownership history.

### Why it is useful  
Used car pricing is often inconsistent and subjective. This model provides a data-driven valuation that helps buyers avoid overpaying, assists sellers in setting competitive prices, and supports platforms and financial institutions with reliable pricing insights.

### General Project Workflow  

**Input →** Car details entered by the user  
**Processing →** Data cleaning, encoding, scaling, and feature engineering  
**Model →** Trained regression and stacked ensemble models  
**Output →** Predicted car price in Indian Rupees

---

## Dataset Used

👉 **Used Cars Dataset (Kaggle)**  
[Dataset URL](https://www.kaggle.com/datasets/taeefnajib/used-car-price-prediction-dataset)
### Dataset Details

- **Total records:** ~5,000 car listings  
- **Features:** Brand, model, year, fuel type, transmission, kilometers driven, engine size, power, ownership type  
- **Target variable:** Selling price (INR)  
- **Market:** Indian automotive market  

---

## Dependencies Used

- pandas  
- numpy  
- scikit-learn  
- XGBoost  
- LightGBM  
- CatBoost  
- matplotlib  
- seaborn  
- Flask  

---

## EDA & Preprocessing

- Analyzed price distribution and feature correlations  
- Identified strong relationships between price, age, mileage, brand, and engine power  
- Removed extreme outliers using IQR  
- Handled missing values using median imputation  
- Encoded categorical features using label and one-hot encoding  
- Scaled numerical features  
- Created composite features such as:
  - Price per kilometer  
  - Horsepower-to-age ratio  

---

## Model Training Info

- Trained multiple regression models:
  - Decision Tree  
  - Random Forest  
  - XGBoost  
  - LightGBM  
  - CatBoost  
- Hyperparameters optimized using Grid Search with cross-validation  
- Built a stacked ensemble using Ridge Regression as a meta-learner over XGBoost and LightGBM predictions  

---

## Model Testing / Evaluation

- Train-test split used for evaluation  
- Metrics used:
  - R² Score  
  - RMSE  
  - MAE
  - MAPE
- Cross-validation ensured model stability and reduced overfitting  

---

## Results

- **Best Model:** Stacked Ensemble  
- **R² Score:** 0.9886  
- **RMSE:** ₹1.79 
- **MAE:** ₹0.90 

CatBoost achieved a strong standalone R² score of **0.9848**, confirming the effectiveness of gradient boosting methods for this task.

---

## Limitations & Future Work

- Dataset size is relatively limited and region-specific  
- Rare car models and extreme prices may still introduce prediction errors  
- Future work includes:
  - Training on larger multi-city datasets  
  - Incorporating real-time market trends  
  - Supporting electric and hybrid vehicles  
  - Exploring deep learning–based regression models  

---

## Deployment Info

[Link]()

- Flask-based web application  
- REST API accepts car features as input  
- Returns predicted car price instantly  
- Can be integrated with automotive websites or internal dealer tools


---
