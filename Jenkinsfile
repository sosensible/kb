pipeline {
  agent any
  stages {
    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            sh 'git --version'
          }
        }

        stage('') {
          steps {
            fileExists 'compose-dev.yaml'
          }
        }

      }
    }

    stage('Speak') {
      steps {
        sh 'echo \'build flow working\''
      }
    }

    stage('Create') {
      steps {
        writeFile(file: 'new.txt', text: 'The file is created.')
      }
    }

  }
}