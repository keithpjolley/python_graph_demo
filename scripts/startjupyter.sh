#!/bin/bash
#
# kjolley
# squalor heights, ca, usa
# Fri Dec 21 06:53:31 PST 2018
#
deactivate 2>/dev/null || true # Fails if not in a virtualenv, that's OK.
. /tmp/venv/bin/activate
jupyter notebook # --ip=127.0.0.1 --port=8888
