VERSION=0.1
LANG1=sa
LANG2=XX
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON = $(PREFIX1).automorf.bin 

TARGETS = $(TARGETS_COMMON) 

$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).$(LANG1).dix
	lt-comp lr $(BASENAME).$(LANG1).dix $@


EXTRA_DIST=$(BASENAME).$(LANG1).dix modes.xml
           
apertium_sa_XXdir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_sa_XX_DATA=$(PREFIX1).automorf.bin 
apertium_sa_XXmodesdir=$(prefix)/share/apertium/modes/

CLEANFILES = $(TARGETS)

install-data-local:
	$(prefix)/bin/apertium-gen-modes modes.xml apertium-$(PREFIX1)
	$(INSTALL_DATA) $(PREFIX1)-morph.mode $(apertium_sa_XXmodesdir)
