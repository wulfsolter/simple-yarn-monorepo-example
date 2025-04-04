#!/bin/sh -e
# helper script to build the right app/package according to WORKSPACE env var

usage() {
  echo "OVERVIEW: Build according to WORKSPACE value."
  exit
}

if [ "$1" = '-h' ] || [ "$1" = '--help' ]; then
  usage
fi

(
  PROJECT_ROOT="$(cd $(dirname $0)/..; pwd)"

  cd $PROJECT_ROOT

  yarn workspace $WORKSPACE build
)
