#!/bin/bash

set -e

IPSET_BLOCK="blockbots"
IPSET_WHITE="searchengine"

LIST_URL="https://raw.githubusercontent.com/abiazizi/buynow/main/blockbots.txt"

echo "install dependency"
apt-get update -y >/dev/null 2>&1 || true
apt-get install -y ipset curl >/dev/null 2>&1 || true

echo "create ipset"
ipset create $IPSET_BLOCK hash:net -exist
ipset create $IPSET_WHITE hash:net -exist

echo "download block list"
curl -s $LIST_URL | while read ip
do
    ipset add $IPSET_BLOCK $ip -exist
done

echo "add search engine whitelist"

# Googlebot
ipset add $IPSET_WHITE 66.249.64.0/19 -exist
ipset add $IPSET_WHITE 64.233.160.0/19 -exist
ipset add $IPSET_WHITE 72.14.192.0/18 -exist
ipset add $IPSET_WHITE 74.125.0.0/16 -exist

# Bingbot
ipset add $IPSET_WHITE 13.66.139.0/24 -exist
ipset add $IPSET_WHITE 40.77.167.0/24 -exist
ipset add $IPSET_WHITE 52.167.144.0/24 -exist
ipset add $IPSET_WHITE 157.55.39.0/24 -exist
ipset add $IPSET_WHITE 207.46.13.0/24 -exist

# DuckDuckBot
ipset add $IPSET_WHITE 40.88.21.0/24 -exist
ipset add $IPSET_WHITE 20.191.45.0/24 -exist


echo "iptables rules"

# whitelist dulu
iptables -C INPUT -m set --match-set $IPSET_WHITE src -j ACCEPT 2>/dev/null || \
iptables -I INPUT -m set --match-set $IPSET_WHITE src -j ACCEPT

# baru block bot
iptables -C INPUT -m set --match-set $IPSET_BLOCK src -j DROP 2>/dev/null || \
iptables -I INPUT -m set --match-set $IPSET_BLOCK src -j DROP

echo "done"
