pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**',
                               allowEmptyArchive: true

            archiveArtifacts artifacts: 'allure-report/**',
                               allowEmptyArchive: true
        }
    }
}