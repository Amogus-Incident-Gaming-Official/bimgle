function removeAdvancement(advancementFilePath) {
    let arr = []
    if (typeof (advancementFilePath) == 'string') arr = [advancementFilePath]
    else if (typeof (advancementFilePath) == 'object') arr = advancementFilePath
    else console.log(`Invalid type for removeAdvancement(${advancementFilePath})`)

    ServerEvents.highPriorityData(event => {
        event.addJson('yourmodpack:advancements/removed', {
            display: { hidden: true },
        })
        arr.forEach(advancement => {
            event.addJson(`${advancement}.json`, {
                parent: 'yourmodpack:advancements/removed',
                display: { hidden: true },
                criteria: {
                    impossible: {
                        trigger: 'minecraft:impossible'
                    }
                },
                requirements: [['impossible']]
            })
        })
    })
}

removeAdvancement([
    'hexcasting:advancements/grant_patchi_book',
    "irons_spellbooks:grant_patchouli"
])

