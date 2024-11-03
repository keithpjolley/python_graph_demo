#!/usr/bin/env bash
#
# this file is meant to be sourced.
#
deactivate
rm -rf /tmp/venv
python3 -m venv /tmp/venv
. /tmp/venv/bin/activate
pip install --upgrade pip==24.3.1 pip-tools==7.4.1
pip-compile --strip-extras --output-file=requirements.txt
pip install -r requirements.txt
./scripts/startjupyter.sh
