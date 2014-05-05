all:
	hfst-lexc apertium-mal.mal.lexc -o mal.lexc.hfst
	hfst-twolc apertium-mal.mal.twol -o mal.twol.hfst
	hfst-compose-intersect -1 mal.lexc.hfst -2 mal.twol.hfst -o mal.hfst
	hfst-fst2fst -O -i mal.hfst -o mal.hfst.ol
