all:
	xmllint --xinclude apertium-id-ms.id.dix.xml > apertium-id-ms.id.dix
	xmllint --xinclude apertium-id-ms.ms.dix.xml > apertium-id-ms.ms.dix
	xmllint --xinclude apertium-id-ms.id-ms.dix.xml > apertium-id-ms.id-ms.dix

	lt-comp lr apertium-id-ms.id.dix id-ms.automorf.bin
	lt-comp lr apertium-id-ms.ms.dix ms-id.automorf.bin

	lt-comp lr apertium-id-ms.id-ms.dix id-ms.autobil.bin
	lt-comp rl apertium-id-ms.id-ms.dix ms-id.autobil.bin

	lt-comp rl apertium-id-ms.ms.dix id-ms.autogen.bin
	lt-comp rl apertium-id-ms.id.dix ms-id.autogen.bin
	
	apertium-validate-transfer apertium-id-ms.id-ms.t1x
	apertium-preprocess-transfer apertium-id-ms.id-ms.t1x id-ms.t1x.bin
	apertium-validate-interchunk apertium-id-ms.id-ms.t2x
	apertium-preprocess-transfer apertium-id-ms.id-ms.t2x id-ms.t2x.bin
	apertium-validate-postchunk apertium-id-ms.id-ms.t3x
	apertium-preprocess-transfer apertium-id-ms.id-ms.t3x id-ms.t3x.bin

	#clean up temp files
	rm apertium-id-ms.id.dix apertium-id-ms.ms.dix apertium-id-ms.id-ms.dix
clean:
	rm -f *.bin apertium-id-ms.id.dix apertium-id-ms.ms.dix apertium-id-ms.id-ms.dix

test:
	echo 'Silakan klik tombol "lanjut" untuk meneruskan ke tahap berikutnya' | lt-proc id-ms.automorf.bin | apertium-tagger -g id-ms.prob | apertium-pretransfer | apertium-transfer apertium-id-ms.id-ms.t1x id-ms.t1x.bin id-ms.autobil.bin | apertium-interchunk apertium-id-ms.id-ms.t2x id-ms.t2x.bin | apertium-postchunk apertium-id-ms.id-ms.t3x id-ms.t3x.bin | lt-proc -g id-ms.autogms.bin

