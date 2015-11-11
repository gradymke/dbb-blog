#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/../_publish
tar -cvf site.tar .
gzip site.tar

scp site.tar.gz begrady@dogsbuttbrew.com:/home/begrady/public_html
ssh begrady@dogsbuttbrew.com 'bash -s' < ../scripts/_install.sh
