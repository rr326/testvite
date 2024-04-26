export function fnShared() {
    const text = "fnShared() - do something generic"
    console.log(text)
    return text
}

export function sharedButNotInIndex() {
    return "sharedButNotInIndex() - do something generic"
}
