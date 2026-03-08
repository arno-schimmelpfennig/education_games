import pandas as pd 
import numpy as np 

def impute(series):
    mean_val = series.mean()
    return series.fillna(mean_val)


# Add your functions to impute min and max