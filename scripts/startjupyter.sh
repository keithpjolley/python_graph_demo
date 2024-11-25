#!/usr/bin/env bash

me="${0##*/}"

deactivate 2>/dev/null

set -e

if [[ ! -d /tmp/venv ]]; then
	echo "INFO: ${me}: Creating virtualenv in /tmp/venv"
	python3 -m venv /tmp/venv
	echo
fi

echo "INFO: ${me}: Sourcing virtualenv in /tmp/venv"
source /tmp/venv/bin/activate
hash -r

echo
echo "INFO: ${me}: Installing pip and pip-tools in virtualenv"
pip3 --require-virtualenv install --upgrade pip==24.3.1 pip-tools==7.4.1

if [[ ! -f requirements.txt ]]; then
	echo
	echo "INFO: ${me}: requirements.txt not found, compiling it from requirements.in"
	pip-compile --strip-extras --output-file=requirements.txt requirements.in
fi

echo
echo "INFO: ${me}: Installing requirements.txt in virtualenv"
pip3 --require-virtualenv install --requirement requirements.txt

# To see what takes so long to load the first time:
# pip3 --require-virtualenv install tuna
# python -X importtime -c "import pandas, numpy, scipy, networkx, matplotlib.pyplot, heapq, colorsys, sklearn.preprocessing, json, IPython.display, operator, graphviz, copy, matrepr" 2> /tmp/all.log
# tuna /tmp/all.log

# I don't think this helps. The problem is that the first time the
# modules are called it takes a _long_ time to load. I was hoping
# that pre-compiling them would help, but it doesn't seem to.
echo
echo "INFO: ${me}: Compiling all python files in /tmp/venv/lib"
python -m compileall -qj0 /tmp/venv/lib

# Import all the modules in the notebook to pre-compile them. Do in
# parallel to speed things up. The sklearn takes 27 seconds on my
# laptop, pandas 15s, and matplolib 4s. The rest are negligible.
# So, this shaves about 20 seconds off the startup time.
echo
echo "INFO: ${me}: Pre-compile modules"
# < graphs.ipynb sed '/import/!d;s/ *"//g;s#\\n,##;s#\..*##' | awk '{print $2}' | sort | parallel python -c '"import {}"'
# pip list | awk 'NR>2&&!/-/{print $1}' | parallel python3 -c "'import {}'" #2>/dev/null
# sed -n 's/ *//;s/#.*//;s/-.*//;s/=.*//p' requirements.txt | sort -u | xargs -I% python -c "import %"
(sed -En '/^[A-Za-z0-9_]+==/s/==.*//p' requirements.in || true) | parallel python -c '"import {}"'

echo
echo "INFO: ${me}: Running jupyter notebook"
jupyter notebook # --ip=127.0.0.1 --port=8888
