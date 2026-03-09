#!/bin/bash

set -e

IPSET_NAME="blockbots"
LIST_URL="https://raw.githubusercontent.com/abiazizi/buynow/main/blockbots.txt"

# install dependency jika belum ada
command -v ipset >/dev/null 2>&1 || apt-get update && apt-get install -y ipset
command -v iptables >/dev/null 2>&1 || apt-get install -y iptables
command -v curl >/dev/null 2>&1 || apt-get install -y curl

# buat ipset
ipset create $IPSET_NAME hash:net -exist

# tambahkan rule iptables
iptables -C INPUT -m set --match-set $IPSET_NAME src -j DROP 2>/dev/null || \
iptables -I INPUT -m set --match-set $IPSET_NAME src -j DROP

# kosongkan list lama
ipset flush $IPSET_NAME

# isi dari github
curl -s $LIST_URL | grep -v '^#' | xargs -I {} ipset add $IPSET_NAME {} -exist
