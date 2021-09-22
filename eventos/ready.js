module.exports = async client => {
    console.log(`${client.user.username} is available now!`)
    
    
    let totalUsers = client.guilds.cache.reduce((acc, value) => acc + value.memberCount, 0)
    
    
    var activities = [ `${client.guilds.cache.size} servers y  ${totalUsers} users!`], i = 0;
    setInterval(() => client.user.setActivity(`a?help ⸝⸝ ${activities}`, {type: "WATCHING" }),50000)
} 