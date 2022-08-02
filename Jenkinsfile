node {

   def commit_id

  try {
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"                        
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install --only=dev'
       sh 'npm test'
     }
   }
   stage('docker build/push') {
     docker.withRegistry('https://index.docker.io/v2/', 'dockerhub') {
       def app = docker.build("islandhopper152/read_voices:${commit_id}", '.').push()
     }
    //  sh 'docker tag <image> registry.heroku.com/<app>/<process-type>'
    //  sh 'docker push registry.heroku.com/<app>/<process-type>'
   } 


   stage("deploy to heroku") {
      nodejs(nodeJSInstallationName: 'nodejs') {
       sh 'npm install -g heroku'
       sh "heroku login -i"
       sh "echo "testperson@dfsd.com"
       sh "echo "testpassword"
     }
   }


  } catch(e){
        // mark build as failed
    currentBuild.result = "FAILURE";

    // send slack notification
    slackSend (channel:"#read-voices",color: '#FF0000', message: "FAILED: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' (${env.BUILD_URL})")

    // throw the error
    throw e;
  }
    slackSend (channel: "#read-voices", color: '#FF0000', message: "SUCCESS 🎈: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]' ('islandhopper152/read_voices:${commit_id}')")
}