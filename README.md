# Python Graph Demonstration

[![Trunk](https://github.com/keithpjolley/python_graph_demo/actions/workflows/trunk-check.yaml/badge.svg?branch=main)](https://github.com/keithpjolley/python_graph_demo/actions/workflows/trunk-check.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=keithpjolley_python_graph_demo\&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=keithpjolley_python_graph_demo)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=keithpjolley_python_graph_demo\&metric=bugs)](https://sonarcloud.io/summary/new_code?id=keithpjolley_python_graph_demo)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=keithpjolley_python_graph_demo\&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=keithpjolley_python_graph_demo)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=keithpjolley_python_graph_demo\&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=keithpjolley_python_graph_demo)

<!-- [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=keithpjolley_python_graph_demo&metric=coverage)](https://sonarcloud.io/summary/new_code?id=keithpjolley_python_graph_demo) -->

Created for:

## San Diego Python Users Group

December 2018 Meetup

Created by:
Keith P Jolley
(updated October 2024)

## Install

Run `./scripts/startjupyter.sh` to start the jupyter server. It creates
a python virtual environment in `/tmp/venv` and installs the requirements
then starts a jupyter server.  From there click on the `graphs.ipynb`
notebook.

## Usage

The purpose of the notebook was to serve as a slide-deck so it also uses
[RISE](https://github.com/jupyterlab-contrib/rise) but that's entirely optional.
See the RISE documentation for usage.

I also embedded [d3](https://d3js.org/) (and [Plotly](https://plotly.com/python/)
because it's my preferred graph visualization tool.

I compressed the Enron.csv data file to get it under the 100MB github
file size limit. You may want to uncompress it. Reading it in
uncompressed will be a little faster at the cost of ~200MB of disk space.

There are a couple of small datasets you can play with in the `data` directory.

This notebook is available on
[GitHub](https://github.com/keithpjolley/python_graph_demo/).