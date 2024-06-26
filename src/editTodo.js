function editTodo(todo, projects, title, description, dueDate, priority){
    let project = null;
    for(let i = 0; i<projects.length; i++){
        for(let j=0; j<projects[i].contents.length; j++){
            if(projects[i].contents[j] === todo){
                project = projects[i];
                break;
            }
        }
        if(project) break;
    }
    let index = project.contents.indexOf(todo);
    project.contents.splice(index,1);
    let edited = {
        title,
        description,
        dueDate,
        priority
    }
    project.contents.splice(index,0,edited)
    console.log(projects);
}

export default editTodo;