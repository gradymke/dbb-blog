#!/bin/bash

# This script builds the PRODUCTION version of the site.
# Once tests are run locally (using run.sh), the site can be deployed
# using the deploy.sh script.
#
# Changes should be saved to the bitbucket git repo.

DEPLOY=NO

while [[ $# > 0 ]]
do
key="$1"

case $key in
    -d|--deploy)
      DEPLOY="YES"
    ;;
    -h|--help)
      echo "$0 [-h|--help] [-d|--deploy]"
      exit
    ;;
    *)
      # unknown option
    ;;
esac
shift # past argument or value
done

echo "Building Site"
rm -Rf _publish
hugo --baseUrl="http://dogsbuttbrew.com" --destination="_publish"

if [ $DEPLOY == "YES" ]
then
  echo "Deploying"
  DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
  . $DIR/deploy.sh
fi
