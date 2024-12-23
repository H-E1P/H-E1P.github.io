#!/bin/sh
termux-setup-storage
pkg update && pkg upgrade
pkg install libexpat openssl python
pip install -U yt-dlp
pkg install ffmpe
pkg install mpv
pkg install termux-api
mkdir ~/bin
cd ~/bin
wget https://h-e1p.github.io/termux-url-opener
wget https://h-e1p.github.io/youtube_download