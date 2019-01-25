module.exports = function HideNinjaLogs(dispatch) {
    
    // spawn_npc ids
    const TemplateId = 12345;
    const HuntingZoneId = 1023
    
    dispatch.hook('S_SPAWN_NPC', 11, (event) => {
        if (event.templateId == TemplateId && event.huntingZoneId == HuntingZoneId) {
            return false;
        }
    })
    
}
