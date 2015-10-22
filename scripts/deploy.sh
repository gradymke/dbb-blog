#/bin/bash

cd _publish
tar -cvf site.tar .
gzip site.tar
