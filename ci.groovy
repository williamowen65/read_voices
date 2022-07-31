pipelineJob('read-voices') {
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
            scriptPath('Jenkinsfile')
        }
    }
    triggers {
        githubPush()
    }
}