module.exports = function KaseaIsMyDaddy(mod) {
    let blocked_abnormies = [];
    mod.game.data.abnormalities.forEach(abnormality=> {
        if(abnormality.effects.some(effect => effect.type === 244)) {
            blocked_abnormies.push(abnormality.id);
        }
    });

    const blocker = e=> blocked_abnormies.includes(e.id) ? false : undefined;
    mod.hook("S_ABNORMALITY_BEGIN", 3, {order: 10000, filter: {fake: null}}, blocker);
    mod.hook("S_ABNORMALITY_REFRESH", 1, {order: 10000, filter: {fake: null}}, blocker);
}