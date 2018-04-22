#!/bin/sh
export PATH=$HOME/bin:/usr/local/bin:$PATH

SCRIPT_DIR=`dirname $0`
#NODE_PATH=/usr/local/lib/node_modules;
#say -v Alex -r 120 $SCRIPT_DIR
/usr/local/bin/casperjs  $SCRIPT_DIR/example06-loginWithConfig.js





