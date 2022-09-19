pipeline {
    agent any
    parameters{
        string(name: 'SPEC', defaultValue:"cypress/e2e/**/**", description: "Enter the script path that you want to execute")
        choice(name: 'Browser' , choices: ['chrome', 'edge', 'firefox'], description: "Choice the browser where you want to execute your scripts")

    }
    /**options{
        ansiColor('xterm')
    }**/
    stages {
        stage('Build') {
            steps {
                echo 'Building the application..'
            }
        }
        stage('Testing ') {
            steps {
                bat "npm install"
                bat "npx cypress open"
                bat "npx cypress run --browser=${BROWSER} --spec ${SPEC}" 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    /**post{
        always{
            publishHTML([allowMissing: false. alwaysLinkToLastBuild: false, keepAll:])
        }
    }**/
}
//follow this link: https://www.youtube.com/watch?v=Gf0gxV1bYbc&ab_channel=JoanMedia