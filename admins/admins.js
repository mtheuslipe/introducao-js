const mapMine =new Map();
mapMine.set('Luiz', 'admin');
mapMine.set('Matheus', 'user');
mapMine.set('Aluízio', 'admin');
mapMine.set('Caroline', 'admin');
mapMine.set('Luiza', 'admin');

function getAdmins(Map){
    const admins=[];
    for([key, value] of Map){
        if(value='admin'){
            admins.push(key);
        }
    }
    return admins;
}
console.log(getAdmins(mapMine));