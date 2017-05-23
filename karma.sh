#!/bin/bash

#kill $(ps aux | grep "karma start" | grep -v grep | awk '{print $2}') &> /dev/null

karma start karma.conf.js --single-run=true $@

# grab last status code
CODE=$?;

# return status code from phpunit for jenkins
exit $CODE;
