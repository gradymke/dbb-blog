#!/bin/bash

# This script builds the PRODUCTION version of the site.
# Once tests are run locally (using run.sh), the site can be deployed
# using the deploy.sh script.
#
# Changes should be saved to the bitbucket git repo.

hugo --config="config_prod.yaml" server
