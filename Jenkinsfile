pipeline {
    agent any

    stages {
        stage('Check all version') {
            steps {
                sh 'git --version'
                sh 'docker --version'
                sh 'docker-compose --version'
            }
        }
    }
}
