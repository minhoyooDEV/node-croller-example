#!/bin/sh
export PATH=$HOME/bin:/usr/local/bin:$PATH

SCRIPT_DIR=`dirname $0`
/usr/local/bin/casperjs  $SCRIPT_DIR/example06-loginWithConfig.js





