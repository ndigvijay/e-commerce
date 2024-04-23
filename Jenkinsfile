pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                // Checkout code from repository
                checkout scm
                
                // Navigate to the backend directory
                dir('backend') {
                    // Install dependencies and start the backend server
                    sh 'npm install'
                    sh 'npm start'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                // Navigate to the frontend/e-commerce directory
                dir('frontend/e-commerce') {
                    // Install dependencies and start the frontend server
                    sh 'npm install'
                    sh 'npm start'
                }
            }
        }
    }
}
