# WordMirror scraper
# Stephen Paulger <stephen.paulger@gmail.com>
#
# Usage:
# Command line test
# python WordMirror.py haus
# nb. there is an issue in the command line test output with umlauts
#     this is not a problem if you access the string objects rather
#     than printing the result dict directly
#
# Within a program
# import WordMirror
# result = WordMirror.WordMirrorNounInflection("Ecke")
# print result["Gender"]
# print result["Indefinite Article"]["Genitive"]

from urllib2 import urlopen

def WordMirrorNounInflection(noun):

	url = "http://www.wordmirror.com/inflect.php?lang=en&lp=de_en&q=%s&version=0&pos=noun" % (noun)

	webdoc = urlopen(url).read()
	doclines = webdoc.splitlines()

	readingIntro = False
	readingMain = False

	mainCount = 0
	mainTableHeading = 0
	caseNum = 0

	inflect = {}

	for line in doclines:
		# Introduction begins with <!-- introductory table -->
		# and ends with <!-- end of introductory table -->
		if line.find("introductory table") >= 0:
			readingIntro = not readingIntro

		if readingIntro and line.endswith(":"):
			key = line[line.find(">")+1:-1]
		elif readingIntro and line.find("<td>") >= 0:
			inflect[key] = line[line.find("<td>")+4:]

		# Main table begins with <!-- main table -->
		# and ends with <!-- end of main table -->
		# except the beginning line is duplicated so we must ignore the first.
		if line.find("main table") >= 0:
			mainCount += 1

		# Exit the loop after the main table is read
		if mainCount > 2:
			break
		elif mainCount <2:
			continue

		# We read the table headings, the first one isn't any use to us
		# so we skip it
		if line.find("tableheading") >= 0:
			mainTableHeading += 1
			if mainTableHeading < 2:
				continue

			# If we got here, then the table heading is one we're
			# interested in
			key = line[line.find(">")+1:-5].replace("<br>"," ")
			inflect[key] = {}
			caseNum = 0
			continue

		cases = ["Nominative", "Accusative", "Dative", "Genitive"]

		if line.endswith("</td>"):
			inflect[key][cases[caseNum]] = line[line.find(">")+1:-5]
			caseNum +=1

	return inflect

def getParadigms(dixFile, wordType):
	from xml.dom import minidom
	from xml import xpath

	doc = minidom.parse("apertium-en-de.de.dix").documentElement
	xpath = '/dictionary/pardefs/pardef[substring-after(@n,"__")="%s"]' % (wordType)
	return xpath.Evaluate(xpath, doc)

def matchParadigm(dixFile, wordType, paradigm):
	pardefs = getParadigms(dixFile, wordType)
	for pardef in pardefs:
		print pardef.toxml()
		

if __name__ == "__main__":
	import sys
	inflect = WordMirrorNounInflection(sys.argv[1])
	print inflect

