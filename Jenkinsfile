pipeline {
    agent any

    stages {
        stage('Check all software version') {
            steps {
                sh 'git --version'
                sh 'docker --version'
                sh 'docker-compose --version'
            }
        }
        stage('build the images using docker compose') {
            steps {
                sh 'docker-compose up --build -d'
                sh 'docker images'
            }
            
        }
    }
}
