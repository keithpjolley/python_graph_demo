# Python Graph Demonstration

Created for:

## San Diego Python Users Group

December 2018 Meetup

Created by:
Keith P Jolley
(updated October 2024)

## Install

You probably want to use a virtual environment.

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

## Usage

There's a [Jupyter Notebook](https://jupyter.org/install) with quite
a few package dependencies. I use [Anaconda](https://www.anaconda.com/)
which satisfies the vast majority of the dependencies, but `pip`
should work just fine too.

Because I don't like typing I have a `./scripts/startjupyter.sh` script
to start the jupyter server but use what works for you. There's also a
`./scripts/fromscrach.sh` file that you can source which creates the
entire environment from scratch.

The purpose of the notebook was to serve as a slide-deck so it also uses
[RISE](https://github.com/jupyterlab-contrib/rise) but that's entirely optional.
See the RISE documentation for usage.

I also embedded [d3](https://d3js.org/) (and [Plotly](https://plotly.com/python/)
because it's my preferred graph visualization tool.

This is disabled. Ignore.
~~There is a bug in the silly Karate Club graph I put in the background of
the slideshow. When you exit out of the slide show it doesn't delete the
html div I create so it continues to run at the top of the notebook, and
if you restart the slide show it adds a second graph, and so on. I didn't
bother fixing this but be aware that it's there.~~

I compressed the Enron.csv data file to get it under the 100MB github
file size limit. You may want to uncompress it. Reading it in
uncompressed will be a little faster at the cost of ~200MB of disk space.

There are a couple of small datasets you can play with in the `data` directory.

[This notebook](https://github.com/keithpjolley/python_graph_demo) is
available on GitHub ~~and as a static web-page (disconnected from Python)
[here](https://www.jamulheavyindustries.com/presentations/pythonsd_graph/)~~

## Creating requirements

```bash
pip-compile --strip-extras --output-file=requirements.txt
```
