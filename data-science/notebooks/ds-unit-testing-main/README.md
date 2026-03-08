[![Shipping files](https://github.com/neuefische/ds-unit-testing/actions/workflows/workflow-02.yml/badge.svg?branch=main&event=workflow_dispatch)](https://github.com/neuefische/ds-unit-testing/actions/workflows/workflow-02.yml)

# Python Packaging and Unit Testing

This repo contains a notebook explaining how you can put python functions into python files, import them again to your jupyter notebooks or other python files and even package them into python packages. Also you will find notebooks that explain general unit tests and tests targeted for data science projects.

1. [01-intro-to-python-packaging.ipynb](01-intro-to-python-packaging.ipynb): Explains the Python Packaging
2. [02-intro-to-unit-testing.ipynb](02-intro-to-unit-testing.ipynb): Explains the general Unit Testing
3. [03-unit-testing-data-science.ipynb](03-unit-testing-data-science.ipynb): Explains the Testing for Data Science Projects

Also there are some directories you should pay attention to:

1. [src](src)
2. [tests](tests)

In this directories you will find the python files that are metioned in the notebooks and that contains the function and tests from the notebooks.

The way to success:
Please work together as Pair-Programmers through all the notebooks.


### Environment
Use the requirements file in this repo to create a new environment for this task.

### Setup
For this purpose you use following commands:

```sh
pyenv local 3.11.3
python -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```
