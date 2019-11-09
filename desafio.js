const users = [
    {
        name: 'Matheus',
        skills: ['Java', 'VB6', 'Office']
    },
    {
        name: 'Thaiso',
        skills: ['MuayTay', 'Culinaria', 'Risadas']
    },
    
]
for (let l of users){
    console.log('O ' + l.name + ' possui as habilidades:' , l.skills.join(', '));
}