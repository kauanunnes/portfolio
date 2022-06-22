const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        selected: 'about me',
        selectedProject: -1,
        projects: [
          {
            title: 'consuming-api-react',
            description: 'This is a project developed with React by me to consume an API, also created by me, check more about in this link.',
            githubLink: 'https://github.com/kauanunnes/consuming-api-react',
            usedTechnologies: ['React', 'Material UI', 'Context API']
          },
          {
            title: 'node-api',
            description: 'This is an API Rest project developed with NodeJS, Express and Knex by me to control employees register.',
            githubLink: 'https://github.com/kauanunnes/node-api',
            usedTechnologies: ['NodeJS', 'BCrypt', 'Expres', 'KnexJS']
          },
          {
            title: 'contatos',
            description: 'Project developed with Angular to add contacts in your contacts list.',
            githubLink: 'https://github.com/kauanunnes/contatos',
            usedTechnologies: ['Angular', 'Material Icons']
          },
          {
            title: 'to-do app',
            description: 'To-do App Project developed with Angular.',
            githubLink: 'https://github.com/kauanunnes/to-do-angular',
            usedTechnologies: ['Angular']
          },
          {
            title: 'valida-cpf',
            description: 'This is a CPF validator developed with HTML, CSS and JavaScript.',
            githubLink: 'https://github.com/kauanunnes/valida-cpf',
            usedTechnologies: ['HTML', 'CSS', 'JavaScript']
          },
        ]
      }
    }, 
    methods: {
      handleChange({target}) {
        this.selected = target.innerText
      },
      selectProject(index) {
        if (this.selectedProject == index) {
          this.selectedProject = -1
          return 
        }
        this.selectedProject = index
      },
      getUsedTechnologies(technologies) {
        return technologies.reduce((prev, current, index) => {
          if (index < technologies.length - 1) return prev + current + ", "
          return prev + current
        } ,"")
      }
    }
  }).mount('#app')