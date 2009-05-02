#!/usr/bin/perl

use warnings;
use strict;
use utf8;

my @cons = ("\xe0\xa4\x95", "\xe0\xa4\x96", "\xe0\xa4\x97", "\xe0\xa4\x98", 
            "\xe0\xa4\x99", "\xe0\xa4\x9a", "\xe0\xa4\x9b", "\xe0\xa4\x9c",
            "\xe0\xa4\x9d", "\xe0\xa4\x9e", "\xe0\xa4\x9f", "\xe0\xa4\xa0", 
            "\xe0\xa4\xa1", "\xe0\xa4\xa2", "\xe0\xa4\xa3", "\xe0\xa4\xa4", 
            "\xe0\xa4\xa5", "\xe0\xa4\xa6", "\xe0\xa4\xa7", "\xe0\xa4\xa8", 
            "\xe0\xa4\xaa", "\xe0\xa4\xab", "\xe0\xa4\xac", "\xe0\xa4\xad", 
            "\xe0\xa4\xae", "\xe0\xa4\xaf", "\xe0\xa4\xb0", "\xe0\xa4\xb2", 
            "\xe0\xa4\xb5", "\xe0\xa4\xb6", "\xe0\xa4\xb7", "\xe0\xa4\xb8", 
            "\xe0\xa4\xb9"); 

#The only example I have has अ embedded in the consonant, which may not be 
#right for all (but it seems to be)

my @ligs = ("",
"\xe0\xa4\xbe",
"\xe0\xa4\xbf",
"\xe0\xa5\x80",
"\xe0\xa5\x81",
"\xe0\xa5\x82",
"\xe0\xa5\x83",
"\xe0\xa5\x84",
"\xe0\xa5\xa2",
#"\xe0\xa5\xa3", #does not exist in Sanskrit
"\xe0\xa5\x87",
"\xe0\xa5\x88",
"\xe0\xa5\x8b",
"\xe0\xa5\x8c");

my @ligt = qw/a A i I u U q Q L e E o O/;
my @cont = qw/k K g G f c C j J F t T d D N w W x X n p P b B m y r l v S R s h/;

my $c;
my $l;

for ($c=0; $c <= $#cons; $c++)
{
	for ($l=0; $l <= $#ligs; $l++)
	{
		print "    <e><p><l>$cons[$c]$ligs[$l]</l><r>$cont[$c]$ligt[$l]</r></p></e>\n";
	}
	print "\n";
};


