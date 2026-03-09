#!/bin/bash

set -e

IPSET_NAME="blockbots"
LIST_URL="https://raw.githubusercontent.com/abiazizi/buynow/main/blockbots.txt"

ipset create $IPSET_NAME hash:net -exist

iptables -C INPUT -m set --match-set $IPSET_NAME src -j DROP 2>/dev/null || \
iptables -I INPUT -m set --match-set $IPSET_NAME src -j DROP

ipset flush $IPSET_NAME

curl -s $LIST_URL | grep -v '^#' | xargs -I {} ipset add $IPSET_NAME {} -exist
