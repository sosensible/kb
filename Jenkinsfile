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
            echo 'Step two'
          }
        }

        stage('make file') {
          steps {
            writeFile(file: 'test.txt', text: 'We should have a file called test.txt now.')
          }
        }

        stage('Input Please') {
          steps {
            input(message: 'We are waiting for you', id: 'wait-check', ok: 'Go', submitter: 'John', submitterParameter: 'jdf')
          }
        }

      }
    }

    stage('three') {
      steps {
        echo 'step three'
      }
    }

  }
}