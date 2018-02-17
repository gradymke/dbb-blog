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
BASE_URL="http://dogsbuttbrew.com"
echo "Building Site"
if [ $GITHUB == "YES" ]
then
  BUILD_DIR="docs"
  BASE_URL="https://gradymke.github.io/dbb-blog"
fi

rm -Rf $BUILD_DIR
hugo --baseUrl="$BASE_URL" --destination="$BUILD_DIR"

if [ $DEPLOY == "YES" ]
then
  echo "Deploying"
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
  . $DIR/deploy.sh
fi
