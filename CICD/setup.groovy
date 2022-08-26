pipelineJob('portfolio') {
    definition {
        cpsScm {
            scm {
                git {
                    remote {
                        github('williamowen65/read_voices')
                    }
                    branch('*/main')
                }
            }
            scriptPath('CICD/Jenkinsfile')
        }
    }
    triggers {
        githubPush()
    }

}