#!/bin/bash

# This script builds the PRODUCTION version of the site.
# Once tests are run locally (using run.sh), the site can be deployed
# using the deploy.sh script.
#
# Changes should be saved to the bitbucket git repo.

DEPLOY=NO
GITHUB=NO

while [[ $# > 0 ]]
do
key="$1"

case $key in
    -d|--deploy)
      DEPLOY="YES"
    ;;
    -g|--github)
      GITHUB="YES"
    ;;
    -h|--help)
      echo "$0 [-h|--help] [-g|--github] [-d|--deploy]"
      exit
    ;;
    *)
      # unknown option
    ;;
esac
shift # past argument or value
done

BUILD_DIR="_publish"
echo "Building Site"
if [ $GITHUB == "YES" ]
then
  BUILD_DIR="docs"
fi

rm -Rf $BUILD_DIR
hugo --baseUrl="http://dogsbuttbrew.com" --destination="$BUILD_DIR"

if [ $DEPLOY == "YES" ]
then
  echo "Deploying"
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
  . $DIR/deploy.sh
fi
