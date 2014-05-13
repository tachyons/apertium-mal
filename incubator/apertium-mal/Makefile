all:
	hfst-lexc -v apertium-mal.mal.lexc -o mal.lexc.hfst
	hfst-twolc apertium-mal.mal.twol -o mal.twol.hfst
	hfst-compose-intersect -1 mal.lexc.hfst -2 mal.twol.hfst -o mal.hfst
	hfst-invert mal.hfst | hfst-fst2txt > mal.automorf.att
	hfst-fst2txt mal.hfst > mal.autogen.att
	lt-comp lr mal.automorf.att mal.automorf.bin
	lt-comp lr mal.automorf.att mal.autogen.bin

clean:
	rm *.bin *.att *.hfst
