BASENAME=apertium-en-hi
LANG1=en
LANG2=hi
LEXTOR=lextor-data
PREFIX12=$(LANG1)-$(LANG2)
PREFIX21=$(LANG2)-$(LANG1)

LEFT=3
RIGHT=3
SIZE=100

all: 
	@echo "Please provide the lexical selection model you want to train:"
	@echo "'"$(PREFIX12)"' or '"$(PREFIX21)"'"
	@exit 0

$(PREFIX12): $(PREFIX12).lextor

$(PREFIX21): $(PREFIX21).lextor

$(PREFIX12).lextor: $(LEXTOR)/$(LANG1).pos.txt $(LEXTOR)/$(LANG2).tlmodel $(LEXTOR)/$(LANG1).stopwords \
		$(LEXTOR)/$(LANG1).wlist $(PREFIX12).lextormono.bin $(PREFIX12).lextorbil.bin
	apertium-lextor --trainlch $(LEXTOR)/$(LANG1).stopwords $(LEXTOR)/$(LANG1).wlist $(SIZE) $(LEFT) $(RIGHT) \
	$(LEXTOR)/$(LANG1).pos.txt $(LEXTOR)/$(LANG2).tlmodel $(PREFIX12).lextormono.bin \
	$(PREFIX12).lextorbil.bin $@ 2> $(LEXTOR)/$(LANG1).slmodel.log


$(PREFIX21).lextor: $(LEXTOR)/$(LANG2).pos.txt $(LEXTOR)/$(LANG1).tlmodel $(LEXTOR)/$(LANG2).stopwords \
		$(LEXTOR)/$(LANG2).wlist $(PREFIX21).lextormono.bin $(PREFIX21).lextorbil.bin
	apertium-lextor --trainlch $(LEXTOR)/$(LANG2).stopwords $(LEXTOR)/$(LANG2).wlist $(SIZE) $(LEFT) $(RIGHT) \
	$(LEXTOR)/$(LANG2).pos.txt $(LEXTOR)/$(LANG1).tlmodel $(PREFIX21).lextormono.bin \
	$(PREFIX21).lextorbil.bin $@ 2> $(LEXTOR)/$(LANG2).slmodel.log

$(LEXTOR)/$(LANG2).tlmodel: $(LEXTOR)/$(LANG2).stopwords $(LEXTOR)/$(LANG1).wlist-translation $(LEXTOR)/$(LANG2).pos.txt
	apertium-lextor --trainwrd $(LEXTOR)/$(LANG2).stopwords $(LEXTOR)/$(LANG1).wlist-translation $(SIZE) $(LEFT) $(RIGHT) \
	$(LEXTOR)/$(LANG2).pos.txt $@ 2> $(LEXTOR)/$(LANG2).tlmodel.log

$(LEXTOR)/$(LANG1).tlmodel: $(LEXTOR)/$(LANG1).stopwords $(LEXTOR)/$(LANG2).wlist-translation $(LEXTOR)/$(LANG1).pos.txt
	apertium-lextor --trainwrd $(LEXTOR)/$(LANG1).stopwords $(LEXTOR)/$(LANG2).wlist-translation $(SIZE) $(LEFT) $(RIGHT) \
	$(LEXTOR)/$(LANG1).pos.txt $@ 2> $(LEXTOR)/$(LANG1).tlmodel.log

$(LEXTOR)/$(LANG1).pos.txt: $(PREFIX12).automorf.bin $(PREFIX12).prob $(LEXTOR)/$(LANG1).txt
	apertium-preprocess-corpus-lextor . $(PREFIX12) $(LEXTOR)/$(LANG1).txt $@

$(LEXTOR)/$(LANG2).pos.txt: $(PREFIX21).automorf.bin $(PREFIX21).prob $(LEXTOR)/$(LANG2).txt
	apertium-preprocess-corpus-lextor . $(PREFIX21) $(LEXTOR)/$(LANG2).txt $@

$(LEXTOR)/$(LANG1).stopwords: $(LEXTOR)/$(LANG1).pos.txt
	touch $(LEXTOR)/$(LANG1).stopwords

$(LEXTOR)/$(LANG2).stopwords: $(LEXTOR)/$(LANG2).pos.txt
	touch $(LEXTOR)/$(LANG2).stopwords

$(LEXTOR)/$(LANG1).wlist: $(BASENAME).$(LANG1)-lextor.dix
	apertium-gen-wlist-lextor $(BASENAME).$(LANG1)-lextor.dix $@

$(LEXTOR)/$(LANG2).wlist: $(BASENAME).$(LANG2)-lextor.dix
	apertium-gen-wlist-lextor $(BASENAME).$(LANG2)-lextor.dix $@

$(LEXTOR)/$(LANG1).wlist-translation: $(LEXTOR)/$(LANG1).wlist $(PREFIX12).lextormono.bin $(PREFIX12).lextorbil.bin
	apertium-gen-wlist-lextor-translation --mono $(PREFIX12).lextormono.bin \
	--bil $(PREFIX12).lextorbil.bin --wlist $(LEXTOR)/$(LANG1).wlist > $@

$(LEXTOR)/$(LANG2).wlist-translation: $(LEXTOR)/$(LANG2).wlist $(PREFIX21).lextormono.bin $(PREFIX21).lextorbil.bin
	apertium-gen-wlist-lextor-translation --mono $(PREFIX21).lextormono.bin \
	--bil $(PREFIX21).lextorbil.bin --wlist $(LEXTOR)/$(LANG2).wlist > $@

$(LEXTOR)/$(LANG1).txt:
	@echo "Error: File "$(LEXTOR)/$(LANG1).txt" could not be found."
	@echo "Please provide that corpus to train lexical selection models for '"$(LANG1)"'"
	@exit 1

$(LEXTOR)/$(LANG2).txt:
	@echo "Error: File "$(LEXTOR)/$(LANG2).txt" could not be found."
	@echo "Please provide that corpus to train lexical selection models for '"$(LANG2)"'"
	@exit 1

clean:
	rm -f $(PREFIX12).lextor $(PREFIX21).lextor
