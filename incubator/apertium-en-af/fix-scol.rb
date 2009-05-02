#!/usr/bin/env ruby

input = STDIN.read.split("^").reject { |tok| tok == "" }

for token in input do
    token = token.sub(/[ ]*([^$]*)[$][ ]*/, '\1') # Strip spaces and the $ symbol
    m = /([^<]*)(<([^>]*)>)?(.*)?/.match(token)
    lemma, pos, tags = m[1], m[3], m[4]
    
    if pos == nil
        pos = 'unknown'
    end

    tags = tags.split(">").collect { |s| s[1..s.length-1] }.join("|")

    if lemma != '.'
        print "#{lemma}\t#{pos}\t#{tags}\n"
    else
        print "<s>\n"
    end
end