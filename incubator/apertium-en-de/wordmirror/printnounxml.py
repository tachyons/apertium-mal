# Francis Tyers

from WordMirror import WordMirrorNounInflection;

def print_xml(inflection, noun): #{

	casesymbols = { "Nominative": "nom", "Dative": "dat", "Accusative": "acc", "Genitive": "gen" };

	numbersymbols = { "No Article": "sg", "Plural No Article": "pl" };

	print '    <pardef n="' + noun +  '__n">';

	gender = inflection['Gender'];
	if(gender == 'n'): #{
		gender = 'nt';
	#}
	
	for key in inflection.keys(): #{
		if(key in ['Gender', 'Word Type', 'Plural']): #{
			continue;
		#}

		for (case, infl1) in inflection[key].items(): #{
			if(key not in numbersymbols.keys()): #{
				continue;
			#}

			for infl2 in infl1.split("/"): #{
				print '      <e> <!-- ' + key + ' -->';
				print '        <p>';

				if(infl2 == noun): #{
					print '          <l/>';
				#}
				if(infl2 != noun): #{
					print '          <l>' + infl2.replace(noun, '') + '</l>';
				#}

				print '          <r><s n="n"/><s n="' + gender + '"/><s n="' + casesymbols[case] +'"/><s n="' + numbersymbols[key] + '"/></r>';
				print '        </p>';
				print '      </e>';
			#}
		#}
	#}
	
	print '    </pardef>';

def usage(): #{
	print 'python printnounxml.py <noun>';
#}

if __name__ == "__main__": #{
	import sys;

	if(len(sys.argv) <= 1): #{
		usage();
		sys.exit();
	#}
	inflect = WordMirrorNounInflection(sys.argv[1]);
	print_xml(inflect, sys.argv[1]);
#}
