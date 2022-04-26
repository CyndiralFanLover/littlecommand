class LittleCommand {
  SubCommand(wherefolder, client, interaction) {
    interaction.options.getSubcommand(true)
    path = this.PathCondition()
    path = path.replace("<commandname>", commandname)
    this.path = path
    const data = require(this.path)
    try {
      data.run(client, interaction)
    } catch (err) {
      console.log("[Interaction Error] Reason : " + err)
    }
  }

  SubCommandGroup(wherefolder, client, interaction) {
    interaction.options.getSubcommandGroup(true)
    path = this.PathCondition()
    path = path.replace("<commandname>", commandname)
    this.path = path
    const data = require(this.path)
    try {
      data.run(client, interaction)
    } catch (err) {
      console.log("[Interaction Error] Reason : " + err)
    }
  }

  PathCondition(first) {
    return `${first}/<commandname>.js`
  }

  Handler(where, client, interaction) {
    require(where)(client, interaction)
  }
}

module.exports = {
  LittleCommand: LittleCommand
}
