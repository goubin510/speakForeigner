echo "-- SpeakForeigner --"

while [ "$INPUT_STRING" != "azerty" ]
do
	echo "input : "

	read INPUT_STRING
	echo ""

	node speakForeigner.js $INPUT_STRING

	echo "---"
done