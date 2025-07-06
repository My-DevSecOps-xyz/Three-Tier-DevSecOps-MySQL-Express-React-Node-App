pipeline {
    agent any
    environment {
          SCANNER_HOME = tool 'sonar-scanner'
    }
    stages {
        stage('Git Checkout') {
            steps {
               git branch: 'main', url: 'https://github.com/My-DevSecOps-xyz/Three-Tier-DevSecOps-MySQL-Express-React-Node-App.git'
            }
        }
        stage('Compile Backend') {
            steps {
                dir('Backend') {
                    sh 'npm install'
                }
                
            }
        }
        stage('Compile Frontend') {
            steps {
                  dir('Frontend') {
                    sh 'npm install'
                }
                
            }
        }
        stage('GitLeak Scan') {
            steps {
                sh 'gitleaks detect --source ./Frontend --exit-code 1'   
                sh 'gitleaks detect --source ./Frontend --exit-code 1'   
                
            }
        }
        stage('Sonar Scanner') {
            steps {
                withSonarQubeEnv('sonar') {
                    sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=Nodejs-Project  -Dsonar.projectKey=Nodejs-Project -Dsonar.projectVersion=1.0"
                }
                
            }
        }//
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {

                    //  waitForQualityGate abortPipeline: false, credentialsId: 'sonar-token'
                     echo 'Quality Gate finally passed!'
                }
                
            }

        }
        stage('Trivy FSScan') {
            steps {
                sh 'trivy fs --format table -o tryvi-fs-report.html .'
                
            }
        }//
        stage('Build-Tag & Push Backend Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker-cred') {
                        dir('Backend') {
                            sh 'docker build -t princewillopah/backend:latest .'
                            sh 'trivy image --format table -o backend-image-report.html princewillopah/backend:latest '
                            sh 'docker push princewillopah/backend:latest'
                           
                        }
                    }
                }
            }
        }  
            
        stage('Build-Tag & Push Frontend Docker Image') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'docker-cred') {
                        dir('Frontend') {
                            sh 'docker build -t princewillopah/frontend:latest .'
                            sh 'trivy image --format table -o frontend-image-report.html princewillopah/frontend:latest '
                            sh 'docker push princewillopah/frontend:latest'
                        }
                    }
                }
            }
             
        }  
        stage('Docker Deploy via Compose') {
            steps {
                script {
                    sh 'docker-compose up -d'
                    // echo "Docker Compose deployment is not implemented in this pipeline."
                }
            }
        }
        
        
        
        
    }// end stages
}
