#!/bin/bash

# This requires that gnu-tar is required on your system.

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd $DIR/../_publish
gtar -cvf site.tar .
gzip site.tar

scp site.tar.gz begrady@dogsbuttbrew.com:/home/begrady/public_html
ssh begrady@dogsbuttbrew.com 'bash -s' < ../scripts/_install.sh
