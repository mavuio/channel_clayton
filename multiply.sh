for i in {01..14}
do
   echo "Create episode $i: "
   cmd="cp '2020-07-22-episode00.md' '2020-06-19-episode$i.md'"
   echo $cmd
   eval $cmd
done
