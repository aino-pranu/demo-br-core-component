pipeline {
  agent any
  environment {
    GIT_REPO = 'demo-br-core-components'
  }
  stages {
     stage('Package deployment') {
     when {
           branch 'WIP-#28'
        not {
          changelog 'Update package version.'
        }
      }
      steps {
	        nodejs('node-js-12.0.0') {
	           withEnv(['npm_config_cache=npm-cache','HOME=.',]) {
	              sh '''
	                 cd Packages
			 ls
	                 npm set //npm.pkg.github.com/:_authToken ${GIT_ACCESS_TOKEN}
			 npm version patch
                         npm publish'''
	           }
	        }
           }
    }

	  
    stage('Commit changes') {
     when {
	branch 'WIP-#28'
        not {
          changelog 'Update package version.'
        }
      }
      steps {
        sh '''
           git remote add package-deployment https://ainosoft:${GIT_ACCESS_TOKEN}@github.com/ainosoft/$GIT_REPO.git
           git status
           git add .
           git commit -m "Update package version."
           git push -f package-deployment
           '''	        
      }
    }

  }

  post {
    always {
      cleanWs(cleanWhenAborted: true, cleanWhenFailure: true, cleanWhenSuccess: true, cleanWhenUnstable: true, deleteDirs: true)
    }
  }
}

