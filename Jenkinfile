pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                sh "docker --version"
                sh "docker images"
                sh "docker-compose up --build"
                echo 'Hello World'
            }
        }
    }
}
