# Python Graph Demonstration

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
