VERSION=0.8.4
LANG1=en
LANG2=hi
PREFIX1=$(LANG1)-$(LANG2)
PREFIX2=$(LANG2)-$(LANG1)

BASENAME=apertium-$(PREFIX1)

TARGETS_COMMON = $(PREFIX1).automorf.bin $(PREFIX1).autobil.bin $(PREFIX1).autogen.bin \
     $(PREFIX1).autopgen.bin $(PREFIX2).automorf.bin $(PREFIX2).autobil.bin \
     $(PREFIX2).autogen.bin $(PREFIX2).autopgen.bin $(PREFIX1).lextormono.bin $(PREFIX2).lextormono.bin \
     $(PREFIX1).lextorbil.bin $(PREFIX2).lextorbil.bin \
     $(PREFIX1).t1x.bin $(PREFIX1).t2x.bin $(PREFIX1).t3x.bin \
     $(PREFIX2).t1x.bin $(PREFIX2).t2x.bin $(PREFIX2).t3x.bin modes

TARGETS = $(TARGETS_COMMON) trules-$(PREFIX1).bin trules-$(PREFIX2).bin \
	  trules-$(PREFIX1).xml trules-$(PREFIX2).xml \
	  $(BASENAME).$(LANG1)-lextor.dix $(BASENAME).$(LANG2)-lextor.dix \
	  $(BASENAME).$(PREFIX1)-lextor.dix $(BASENAME).$(PREFIX2)-lextor.dix 

$(PREFIX1).automorf.bin: $(BASENAME).$(LANG1).metadix
	@xsltproc buscaPar.xsl apertium-en-hi.en.metadix | uniq > tmp1gen.xsl 	 
	@xsltproc tmp1gen.xsl apertium-en-hi.en.metadix >$(BASENAME).$(LANG1).dixtmp1 
	@rm tmp1gen.xsl
	apertium-validate-dictionary $(BASENAME).$(LANG1).dixtmp1
	lt-comp lr $(BASENAME).$(LANG1).dixtmp1 $@
#	@rm $(BASENAME).$(LANG1).dixtmp1

$(PREFIX1).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
##NO TOCAR	apertium-gen-oldbil $(BASENAME).$(PREFIX1).dix tmp$(PREFIX1).autobil.dix
	xsltproc translate-to-default-equivalent.xsl $(BASENAME).$(PREFIX1).dix >tmp$(PREFIX1).autobil.dix
	lt-comp lr tmp$(PREFIX1).autobil.dix $@
	rm tmp$(PREFIX1).autobil.dix

$(PREFIX1).autogen.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp rl $(BASENAME).$(LANG2).dix $@

$(PREFIX1).autopgen.bin: $(BASENAME).post-$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).post-$(LANG2).dix
	lt-comp lr $(BASENAME).post-$(LANG2).dix $@

$(PREFIX2).automorf.bin: $(BASENAME).$(LANG2).dix
	apertium-validate-dictionary $(BASENAME).$(LANG2).dix
	lt-comp lr $(BASENAME).$(LANG2).dix $@

$(PREFIX2).autobil.bin: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
##NO TOCAR	apertium-gen-oldbil $(BASENAME).$(PREFIX1).dix tmp$(PREFIX2).autobil.dix
	xsltproc translate-to-default-equivalent.xsl $(BASENAME).$(PREFIX1).dix >tmp$(PREFIX2).autobil.dix
	lt-comp rl tmp$(PREFIX2).autobil.dix $@
	rm tmp$(PREFIX2).autobil.dix

$(PREFIX2).autogen.bin: $(BASENAME).$(LANG1).metadix
	@xsltproc buscaPar.xsl apertium-en-hi.en.metadix | uniq > tmp2gen.xsl 	 
	@xsltproc tmp2gen.xsl apertium-en-hi.en.metadix >$(BASENAME).$(LANG1).dixtmp2
	@rm tmp2gen.xsl
	apertium-validate-dictionary $(BASENAME).$(LANG1).dixtmp2
	lt-comp rl $(BASENAME).$(LANG1).dixtmp2 $@
	@rm $(BASENAME).$(LANG1).dixtmp2

$(PREFIX2).autopgen.bin: $(BASENAME).post-$(LANG1).dix
	apertium-validate-dictionary $(BASENAME).post-$(LANG1).dix
	lt-comp lr $(BASENAME).post-$(LANG1).dix $@

trules-$(PREFIX1).bin: $(BASENAME).trules-$(PREFIX1).xml
	apertium-validate-transfer $(BASENAME).trules-$(PREFIX1).xml
	apertium-preprocess-transfer $(BASENAME).trules-$(PREFIX1).xml \
				     trules-$(PREFIX1).bin

trules-$(PREFIX2).bin: $(BASENAME).trules-$(PREFIX2).xml
	apertium-validate-transfer $(BASENAME).trules-$(PREFIX2).xml
	apertium-preprocess-transfer $(BASENAME).trules-$(PREFIX2).xml \
				     trules-$(PREFIX2).bin

trules-$(PREFIX1).xml: $(BASENAME).trules-$(PREFIX1).xml
	ln -s $(BASENAME).trules-$(PREFIX1).xml trules-$(PREFIX1).xml

trules-$(PREFIX2).xml: $(BASENAME).trules-$(PREFIX2).xml
	ln -s $(BASENAME).trules-$(PREFIX2).xml trules-$(PREFIX2).xml


$(BASENAME).$(LANG1)-lextor.dix: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	apertium-gen-lextormono rl $(BASENAME).$(PREFIX1).dix $@

$(BASENAME).$(LANG2)-lextor.dix: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	apertium-gen-lextormono lr $(BASENAME).$(PREFIX1).dix $@

$(PREFIX1).lextormono.bin: $(BASENAME).$(LANG1)-lextor.dix
	lt-comp lr $(BASENAME).$(LANG1)-lextor.dix $@

$(PREFIX2).lextormono.bin: $(BASENAME).$(LANG2)-lextor.dix
	lt-comp lr $(BASENAME).$(LANG2)-lextor.dix $@


$(BASENAME).$(PREFIX1)-lextor.dix: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	apertium-gen-lextorbil rl $(BASENAME).$(PREFIX1).dix $@

$(BASENAME).$(PREFIX2)-lextor.dix: $(BASENAME).$(PREFIX1).dix
	apertium-validate-dictionary $(BASENAME).$(PREFIX1).dix
	apertium-gen-lextorbil lr $(BASENAME).$(PREFIX1).dix $@

$(PREFIX1).lextorbil.bin: $(BASENAME).$(PREFIX1)-lextor.dix
	lt-comp lr $(BASENAME).$(PREFIX1)-lextor.dix $@

$(PREFIX2).lextorbil.bin: $(BASENAME).$(PREFIX2)-lextor.dix
	lt-comp lr $(BASENAME).$(PREFIX2)-lextor.dix $@

$(PREFIX1).t1x.bin: $(BASENAME).$(PREFIX1).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX1).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t1x $@

$(PREFIX1).t2x.bin: $(BASENAME).$(PREFIX1).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX1).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t2x $@

$(PREFIX1).t3x.bin: $(BASENAME).$(PREFIX1).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX1).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX1).t3x $@

$(PREFIX2).t1x.bin: $(BASENAME).$(PREFIX2).t1x
	apertium-validate-transfer $(BASENAME).$(PREFIX2).t1x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t1x $@

$(PREFIX2).t2x.bin: $(BASENAME).$(PREFIX2).t2x
	apertium-validate-interchunk $(BASENAME).$(PREFIX2).t2x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t2x $@

$(PREFIX2).t3x.bin: $(BASENAME).$(PREFIX2).t3x
	apertium-validate-postchunk $(BASENAME).$(PREFIX2).t3x
	apertium-preprocess-transfer $(BASENAME).$(PREFIX2).t3x $@


EXTRA_DIST=$(BASENAME).$(LANG1).metadix $(BASENAME).$(PREFIX1).dix \
	   $(BASENAME).post-$(LANG1).dix $(BASENAME).post-$(LANG2).dix \
	   $(BASENAME).$(LANG2).dix $(BASENAME).$(LANG1).tsx \
	   $(BASENAME).$(LANG2).tsx $(BASENAME).trules-$(PREFIX1).xml \
	   $(BASENAME).trules-$(PREFIX2).xml $(PREFIX1).prob $(PREFIX2).prob \
	   buscaPar.xsl principal.xsl apertium-en-hi.en.metadix \
	   $(PREFIX1).lextor $(PREFIX2).lextor \
	   $(PREFIX1)-supervised.make $(PREFIX1)-unsupervised.make \
	   $(PREFIX2)-supervised.make $(PREFIX2)-unsupervised.make \
	   $(LANG1)-tagger-data/README $(LANG2)-tagger-data/README \
	   lextor-data/README lextor.make translate-to-default-equivalent.xsl \
	   $(BASENAME).$(PREFIX1).t1x $(BASENAME).$(PREFIX1).t2x \
	   $(BASENAME).$(PREFIX1).t3x $(BASENAME).$(PREFIX2).t1x \
	   $(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).t3x \
	   modes.xml

apertium_en_hi_DATA=$(PREFIX1).automorf.bin $(PREFIX2).automorf.bin \
		    $(PREFIX1).autobil.bin $(PREFIX2).autobil.bin \
		    $(PREFIX1).autogen.bin $(PREFIX2).autogen.bin \
		    $(PREFIX1).autopgen.bin $(PREFIX2).autopgen.bin \
		    $(PREFIX1).prob $(PREFIX2).prob trules-$(PREFIX1).xml \
		    trules-$(PREFIX2).xml trules-$(PREFIX1).bin \
		    trules-$(PREFIX2).bin \
		    $(PREFIX1).lextormono.bin $(PREFIX2).lextormono.bin \
		    $(PREFIX1).lextorbil.bin $(PREFIX2).lextorbil.bin \
		    $(PREFIX1).t1x.bin $(PREFIX1).t2x.bin $(PREFIX1).t3x.bin \
		    $(PREFIX2).t1x.bin $(PREFIX2).t2x.bin $(PREFIX2).t3x.bin \
		    $(PREFIX1).mode $(PREFIX2).mode

apertium_en_hidir=$(prefix)/share/apertium/apertium-$(PREFIX1)/
apertium_en_modesdir=$(prefix)/share/apertium/modes/

$(PREFIX1).mode: modes.xml
	apertium-gen-modes modes.xml

$(PREFIX2).mode: modes.xml
	apertium-gen-modes modes.xml

modes: modes.xml
	apertium-gen-modes modes.xml

install-data-local:
	apertium-gen-modes modes.xml apertium-$(PREFIX1)
	$(INSTALL_DATA) $(PREFIX1).mode $(apertium_en_modesdir)
	$(INSTALL_DATA) $(PREFIX2).mode $(apertium_en_modesdir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t1x $(BASENAME).$(PREFIX1).t2x $(apertium_en_hidir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX1).t3x $(BASENAME).$(PREFIX2).t1x $(apertium_en_hidir)
	$(INSTALL_DATA) $(BASENAME).$(PREFIX2).t2x $(BASENAME).$(PREFIX2).t3x $(apertium_en_hidir)


CLEANFILES = -rf $(TARGETS) modes

