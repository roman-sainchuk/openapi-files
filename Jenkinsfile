pipeline {
    agent {
        docker { 
            image 'redocly/cli' 
            args '-u root'
        }
    }

    stages {
        stage('Push to redocly') {
            steps {
                sh '''
                    apk add --no-cache git;
                    git config --global --add safe.directory "$WORKSPACE";
                    
                    DEFAULT_BRANCH="";
                    REPO_URL="";
                    REPOSITORY="";
                    NAMESPACE="";

                    if [[ "$BRANCH_IS_PRIMARY" == "true" ]]; then
                        DEFAULT_BRANCH=$BRANCH_NAME;
                    fi

                    if [[ -n "$REPO_URL" ]]; then
                        COMMIT_URL=$REPO_URL/commit/$GIT_COMMIT;
                    fi
                    
                    echo "CURRENT_BRANCH=$BRANCH_NAME";
                    echo "DEFAULT_BRANCH=$DEFAULT_BRANCH";
                    echo "COMMIT_SHA=$GIT_COMMIT";
                    echo "COMMIT_MESSAGE=$(git log --format=%B $GIT_COMMIT^!)";
                    echo "COMMIT_URL=$COMMIT_URL";
                    echo "COMMIT_TIMESTAMP=$(git log --format=%cI $GIT_COMMIT^!)";
                    echo "AUTHOR=$(git log --format='%an <%ae>' $GIT_COMMIT^!)";
                    echo "REPOSITORY=$REPOSITORY";
                    echo "NAMESPACE=$NAMESPACE";
                '''
            }
        }
    }
}