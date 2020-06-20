#!/usr/local/bin/zsh

rpl '<link>https://channel-clayton.uni-ak.ac.at/podcast</link>' '<link>https://channel-clayton.uni-ak.ac.at</link>' _site/*.rss

for file in _site/*.rss
do
   echo $file
   cat $file|grep -v http://podlove.org/deep-link >$file.1
   mv $file.1 $file
   cat $file|grep -v '<comments>' >$file.1
   mv $file.1 $file
done


. episodes/fix_links.sh
