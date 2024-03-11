#!/bin/env bash


echo -e "начало устоновки программ"
if [[ -f /bin/dialog ]]; then
 sudo apt install -y dialog
fi

array="mc sbcl git curl spell aspell aspell-ru graphviz openjdk-19-jre-headless hunspell hunspell-ru buku zsh clangd cmake build-essential"



echo "$array"
# for item in ${array[*]}
# do
#    sudo apt install -y $item
# done

# echo -e "система готова программы устоновленны"

# zsh по умолчанию

chsh -s $(which zsh)
