#!/bin/bash

cd _publish
tar -cvf site.tar .
gzip site.tar

scp site.tar.gz begrady@dogsbuttbrew.com:/home/begrady/public_html
ssh begrady@dogsbuttbrew.com 'bash -s' < ../scripts/_install.sh
