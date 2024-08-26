function constructionCrew(obj) {
    if (obj.dizziness) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience;
    }

    return obj;
}
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});