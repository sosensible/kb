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

      }
    }

    stage('three') {
      steps {
        echo 'step three'
      }
    }

  }
}