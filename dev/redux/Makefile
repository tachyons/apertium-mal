all:
	hfst-lexc -v apertium-mal.mal.lexc -o mal.lexc.hfst
	hfst-twolc apertium-mal.mal.twol -o mal.twol.hfst
	hfst-compose-intersect -1 mal.lexc.hfst -2 mal.twol.hfst -o mal.autogen.hfst
	hfst-invert mal.autogen.hfst -o mal.automorf.hfst
	hfst-fst2fst -O -i mal.automorf.hfst -o mal.automorf.ohfst

clean:
	rm *.hfst *.ohfst
