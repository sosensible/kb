pipeline {
  agent any
  stages {
    stage('one') {
      steps {
        echo 'step one'
      }
    }

    stage('two') {
      parallel {
        stage('two') {
          steps {
            echo 'Step two ${MYBUILD} $MYBUILD'
          }
        }

        stage('make file') {
          steps {
            sh 'mkdir --parents build'
            writeFile(file: 'build/test$BUILD_ID.txt', text: 'We should have a file called test$BUILD_ID.txt now.')
          }
        }

        stage('Input Please') {
          steps {
            input(message: 'We are waiting for you "${BRANCH_NAME}"', id: 'wait-check', ok: 'Go', submitter: 'John', submitterParameter: 'jdf')
          }
        }

      }
    }

    stage('three') {
      parallel {
        stage('three') {
          steps {
            echo 'step three'
          }
        }

        stage('copy') {
          steps {
            sh '''# sudo scp -r ./build dojo@10.0.0.6:/home/dojo/build
echo "path: ${PATH}"'''
          }
        }

        stage('artifacts') {
          steps {
            archiveArtifacts(allowEmptyArchive: true, artifacts: 'build/*.*')
          }
        }

      }
    }

  }
  environment {
    MYBUILD = '$BUILD_ID'
  }
}