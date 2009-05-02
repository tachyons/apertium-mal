#!/bin/bash

LIST=`wget -O - -q http://wiki.apertium.org/wiki/Northern_Sami_and_Lule_Sami/Regression_tests | grep '<li>' | sed 's/<.*li>//g' | sed 's/ /_/g'`;

cp *.mode modes/

for LINE in $LIST; do
	dir=`echo $LINE | cut -f2 -d'(' | cut -f1 -d')'`;

	if [ $dir = "sme" ]; then
		mode="sme-smj";
	elif [ $dir = "smj" ]; then
		mode="smj-sme";
	else 
		continue;
	fi

	SL=`echo $LINE | cut -f2 -d')' | sed 's/<i>//g' | sed 's/<\/i>//g' | cut -f2 -d'*' | sed 's/→/@/g' | cut -f1 -d'@' | sed 's/(note:/@/g' | sed 's/_/ /g'`;
	TL=`echo $LINE | sed 's/(\w\w)//g' | sed 's/<i>//g' | cut -f2 -d'*' | sed 's/<\/i>_→/@/g' | cut -f2 -d'@' | sed 's/_/ /g'`;

	TR=`echo $SL | apertium -d . $mode`;

	if [[ `echo $TR` != `echo $TL` ]]; then 
		echo -e $mode"\t "$SL"\n \t-$TL\n\t+ "$TR"\n";
	else
		echo -e $mode"\t "$SL"\nWORKS\t  "$TR"\n";
	fi

done
