#!/bin/env bash

## устоновка emacs

if [[ -f /bin/emacs ]]; then
    echo -e "emacs уже устоновлен !!!!!!!"
else
    sudo add-apt-repository ppa:ubuntuhandbook1/emacs
    sudo apt update
    sudo apt install -y emacs emacs-common
fi

## Устоновка зависимостей

sudo apt install -y ispell aspell aspell-ru hunspell hunspell-ru graphviz git sbcl
