module.exports = function KaseaIsMyDaddy(mod) {
    function blocker(event) {
        const abnormality = mod.game.data.abnormalities.get(event.id);
        if (abnormality && abnormality.effects.some(effect => effect.type === 244))
            return false;
    }
    mod.hook("S_ABNORMALITY_BEGIN", 3, {order: 10000, filter: {fake: null}}, blocker);
    mod.hook("S_ABNORMALITY_REFRESH", 1, {order: 10000, filter: {fake: null}}, blocker);
}