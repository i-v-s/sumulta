#! /bin/sh
java -jar ~/closure/compiler.jar --charset UTF-8 --js ajax.js dom.js api.js js.js --js_output_file ../lib.js
#cat ajax.js dom.js api.js js.js > ../lib.js
#java -jar ~/closure/compiler.jar --js ../geom/*.js --js_output_file ../geom.js