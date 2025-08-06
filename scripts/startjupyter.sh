#!/usr/bin/env bash

deactivate 2>/dev/null
set -e

tmpdir="$(mktemp -d)"
clean() {
	deactivate 2>/dev/null
	rm -rf "${tmpdir}"
}
trap 'clean' EXIT

# I recently installed python3.14 before GA and it 
# causes problems so hardcode a working version for now.
# It normally would be fine to just leave this as
# `python3`.
python3.13 -m venv "${tmpdir}"
# shellcheck disable=SC1091
. "${tmpdir}/bin/activate"

pip3 --require-virtualenv install --upgrade 'poetry>=1.8,<2.0'
poetry install
poetry run jupyter notebook
