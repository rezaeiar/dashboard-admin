const dateGenerator = (duration: string) => {
    return new Date(duration).toLocaleDateString("fa-IR-u-nu-latn")
}
export { dateGenerator }