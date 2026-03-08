#import the python file we want to test
from src.unit_test_examples.division import divide
#import pytest
import pytest

def test_divide():
    assert divide(3,2) == 1.5
    assert divide(5,5) == 1
    assert divide(6,2) == 3
    assert divide(-2,0) == "Can not divide by zero"
    assert divide(10,-2) == -5
    
    
    