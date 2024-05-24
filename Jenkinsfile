pipeline {
    agent any
    stages {
        stage('Build and Run Backend') {
            steps {
                dir('backend') {
                    sh 'node --version'
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
        stage('Build and Run Frontend') {
            steps {
                dir('frontend/e-commerce') {
                    sh 'npm install'
                    sh 'npm start &'
                }
            }
        }
    }
}