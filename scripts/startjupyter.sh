#!/usr/bin/env bash

deactivate 2>/dev/null
set -e

tmpdir="$(mktemp -d)"
clean() {
	deactivate 2>/dev/null
	rm -rf "${tmpdir}"
}
trap 'clean' EXIT

python3 -m venv "${tmpdir}"
. "${tmpdir}/bin/activate"

pip3 --require-virtualenv install --upgrade 'poetry>=1.8,<2.0'
poetry install
poetry run jupyter notebook
